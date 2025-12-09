// Authentication State Management
let currentUser = null;

// Check auth state on load
auth.onAuthStateChanged(user => {
    if (user) {
        currentUser = user;
        showMainApp();
        document.getElementById('userEmail').textContent = user.email;
    } else {
        currentUser = null;
        showPage('landingPage');
    }
});

// Page Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function showLogin() {
    showPage('loginPage');
}

function showSignup() {
    showPage('signupPage');
}

function showMainApp() {
    showPage('mainApp');
    setTodayDate();
    loadActivities();
}

// Login Handler
async function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
        alert('Login failed: ' + error.message);
    }
}

// Signup Handler
async function handleSignup(event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const name = document.getElementById('signupName').value;

    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        await userCredential.user.updateProfile({ displayName: name });
    } catch (error) {
        alert('Signup failed: ' + error.message);
    }
}

// Google Login
async function handleGoogleLogin() {
    try {
        await auth.signInWithPopup(googleProvider);
    } catch (error) {
        alert('Google login failed: ' + error.message);
    }
}

// Logout
async function handleLogout() {
    try {
        await auth.signOut();
    } catch (error) {
        alert('Logout failed: ' + error.message);
    }
}
