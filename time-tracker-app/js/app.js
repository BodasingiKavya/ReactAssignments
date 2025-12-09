// App State
let activities = [];
let selectedDate = '';

// Set today's date on load
function setTodayDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('selectedDate').value = today;
    selectedDate = today;
}

// Date change handler
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('selectedDate');
    if (dateInput) {
        dateInput.addEventListener('change', (e) => {
            selectedDate = e.target.value;
            loadActivities();
        });
    }
});

// Load activities for selected date
async function loadActivities() {
    if (!currentUser || !selectedDate) return;

    try {
        const snapshot = await db
            .collection('users')
            .doc(currentUser.uid)
            .collection('days')
            .doc(selectedDate)
            .collection('activities')
            .get();

        activities = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        renderActivities();
        updateStats();
    } catch (error) {
        console.error('Error loading activities:', error);
    }
}

// Add new activity
async function addActivity() {
    const name = document.getElementById('activityName').value.trim();
    const category = document.getElementById('activityCategory').value;
    const duration = parseInt(document.getElementById('activityDuration').value);

    if (!name || !duration || duration <= 0) {
        alert('Please fill all fields with valid values');
        return;
    }

    const totalMinutes = activities.reduce((sum, act) => sum + act.duration, 0);
    if (totalMinutes + duration > 1440) {
        alert(`Cannot add activity. Only ${1440 - totalMinutes} minutes remaining for this day.`);
        return;
    }

    try {
        const docRef = await db
            .collection('users')
            .doc(currentUser.uid)
            .collection('days')
            .doc(selectedDate)
            .collection('activities')
            .add({
                name,
                category,
                duration,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

        activities.push({
            id: docRef.id,
            name,
            category,
            duration
        });

        // Clear form
        document.getElementById('activityName').value = '';
        document.getElementById('activityDuration').value = '';

        renderActivities();
        updateStats();
    } catch (error) {
        alert('Error adding activity: ' + error.message);
    }
}

// Delete activity
async function deleteActivity(id) {
    if (!confirm('Delete this activity?')) return;

    try {
        await db
            .collection('users')
            .doc(currentUser.uid)
            .collection('days')
            .doc(selectedDate)
            .collection('activities')
            .doc(id)
            .delete();

        activities = activities.filter(act => act.id !== id);
        renderActivities();
        updateStats();
    } catch (error) {
        alert('Error deleting activity: ' + error.message);
    }
}

// Render activities list
function renderActivities() {
    const container = document.getElementById('activitiesList');
    
    if (activities.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--gray); padding: 2rem;">No activities logged for this day yet.</p>';
        return;
    }

    container.innerHTML = activities.map(activity => `
        <div class="activity-card">
            <div class="activity-info">
                <div class="activity-name">${activity.name}</div>
                <div class="activity-meta">
                    <span>${activity.category}</span>
                    <span>${activity.duration} minutes</span>
                </div>
            </div>
            <div class="activity-actions">
                <button class="btn-icon delete" onclick="deleteActivity('${activity.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Update statistics
function updateStats() {
    const totalMinutes = activities.reduce((sum, act) => sum + act.duration, 0);
    const remaining = 1440 - totalMinutes;
    const percentage = (totalMinutes / 1440) * 100;

    document.getElementById('totalMinutes').textContent = `${totalMinutes} min`;
    document.getElementById('remainingMinutes').textContent = `${remaining} min`;
    document.getElementById('progressFill').style.width = `${percentage}%`;

    // Enable/disable analyse button
    const analyseBtn = document.getElementById('analyseBtn');
    analyseBtn.disabled = totalMinutes === 0;
}

// Show analytics
function showAnalytics() {
    if (activities.length === 0) {
        showNoDataView();
        return;
    }

    document.querySelector('.section:first-child').style.display = 'none';
    document.getElementById('analyticsSection').style.display = 'block';
    renderAnalytics();
}

// Back to logger
function backToLogger() {
    document.querySelector('.section:first-child').style.display = 'block';
    document.getElementById('analyticsSection').style.display = 'none';
}

// Render analytics dashboard
function renderAnalytics() {
    const totalMinutes = activities.reduce((sum, act) => sum + act.duration, 0);
    const totalHours = (totalMinutes / 60).toFixed(1);
    
    // Group by category
    const categoryData = {};
    activities.forEach(act => {
        categoryData[act.category] = (categoryData[act.category] || 0) + act.duration;
    });

    const categories = Object.keys(categoryData);
    const durations = Object.values(categoryData);

    const content = document.getElementById('analyticsContent');
    content.innerHTML = `
        <div class="summary-cards">
            <div class="summary-card">
                <h4>Total Time Logged</h4>
                <p>${totalHours}h</p>
            </div>
            <div class="summary-card">
                <h4>Activities Count</h4>
                <p>${activities.length}</p>
            </div>
            <div class="summary-card">
                <h4>Categories</h4>
                <p>${categories.length}</p>
            </div>
            <div class="summary-card">
                <h4>Completion</h4>
                <p>${((totalMinutes / 1440) * 100).toFixed(0)}%</p>
            </div>
        </div>

        <div class="analytics-grid">
            <div class="chart-container">
                <h3>Time Distribution</h3>
                <canvas id="pieChart"></canvas>
            </div>
            <div class="chart-container">
                <h3>Activity Duration</h3>
                <canvas id="barChart"></canvas>
            </div>
        </div>

        <div class="chart-container">
            <h3>Category Breakdown</h3>
            <div class="category-breakdown">
                ${categories.map(cat => `
                    <div class="category-item">
                        <span class="category-name">${cat}</span>
                        <span class="category-time">${(categoryData[cat] / 60).toFixed(1)}h (${categoryData[cat]} min)</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Render charts
    setTimeout(() => {
        renderPieChart(categories, durations);
        renderBarChart();
    }, 100);
}

// Render pie chart
function renderPieChart(labels, data) {
    const ctx = document.getElementById('pieChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    '#6366f1', '#8b5cf6', '#ec4899', '#f59e0b',
                    '#10b981', '#3b82f6', '#ef4444', '#6b7280'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Render bar chart
function renderBarChart() {
    const ctx = document.getElementById('barChart');
    if (!ctx) return;

    const sortedActivities = [...activities].sort((a, b) => b.duration - a.duration);
    const labels = sortedActivities.map(act => act.name);
    const data = sortedActivities.map(act => act.duration);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Duration (minutes)',
                data: data,
                backgroundColor: '#6366f1'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Show no data view
function showNoDataView() {
    const content = document.getElementById('analyticsContent');
    content.innerHTML = `
        <div class="no-data">
            <div class="no-data-icon">📊</div>
            <h3>No Data Available</h3>
            <p>You haven't logged any activities for this date yet.</p>
            <button class="btn btn-primary" onclick="backToLogger()">
                <i class="fas fa-plus"></i> Start Logging Activities
            </button>
        </div>
    `;
    
    document.querySelector('.section:first-child').style.display = 'none';
    document.getElementById('analyticsSection').style.display = 'block';
}
