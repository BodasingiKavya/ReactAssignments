# ⏰ TimeTrack - Daily Activity Tracker

A modern, responsive web application that helps users track their daily activities in minutes and visualize how their 24 hours are spent each day.

## 🚀 Live Demo

**Deployed Link:** [Your GitHub Pages URL]

**Video Walkthrough:** [Your YouTube/Drive Link]

## 📸 Screenshots

![Landing Page](screenshots/landing.png)
![Activity Logger](screenshots/logger.png)
![Analytics Dashboard](screenshots/analytics.png)

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend/Database:** Firebase (Firestore + Authentication)
- **Visualization:** Chart.js
- **Deployment:** GitHub Pages
- **Version Control:** Git & GitHub

## ✨ Features

### Core Features
- ✅ **User Authentication**
  - Email/Password authentication
  - Google Sign-In integration
  - Secure session management

- ✅ **Activity Logging**
  - Add activities with name, category, and duration
  - Date-based activity tracking
  - Real-time validation (max 1440 minutes per day)
  - Edit and delete activities
  - Visual progress tracking

- ✅ **Analytics Dashboard**
  - Interactive pie chart showing time distribution by category
  - Bar chart displaying individual activity durations
  - Summary statistics (total time, activity count, completion %)
  - Category breakdown with detailed time allocation
  - "No data available" state with beautiful UI

- ✅ **Responsive Design**
  - Mobile-first approach
  - Works seamlessly on phones, tablets, and desktops
  - Smooth animations and transitions
  - Modern, clean UI with gradient backgrounds

### Activity Categories
- 💼 Work
- 📚 Study
- 😴 Sleep
- 🏃 Exercise
- 🎮 Entertainment
- 🍽️ Food
- 👥 Social
- 📌 Other

## 🤖 AI Tools Used

This project leveraged AI tools throughout the development process:

1. **ChatGPT/Claude** - Used for:
   - Initial project architecture planning
   - Generating boilerplate code for Firebase integration
   - Creating responsive CSS layouts
   - Debugging complex state management issues
   - Writing documentation and README content

2. **GitHub Copilot** - Assisted with:
   - Auto-completing repetitive code patterns
   - Suggesting Chart.js configuration options
   - Writing validation logic

3. **AI-Powered Design Tools**:
   - Color palette generation for consistent theming
   - Icon and emoji selection for categories
   - Layout suggestions for responsive design

4. **Code Quality**:
   - AI-assisted code review for best practices
   - Performance optimization suggestions
   - Accessibility improvements

## 📦 Installation & Setup

### Prerequisites
- Node.js (optional, for local server)
- Firebase account
- Git

### Steps to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/time-tracker-app.git
   cd time-tracker-app
   ```

2. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication (Email/Password and Google)
   - Create a Firestore database
   - Copy your Firebase configuration

3. **Configure Firebase**
   - Open `js/firebase-config.js`
   - Replace the placeholder values with your Firebase credentials:
   ```javascript
   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_PROJECT_ID.appspot.com",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
   };
   ```

4. **Run the application**
   - Option 1: Open `index.html` directly in your browser
   - Option 2: Use a local server
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```
   - Navigate to `http://localhost:8000`

## 🗂️ Project Structure

```
time-tracker-app/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styles and animations
├── js/
│   ├── firebase-config.js # Firebase configuration
│   ├── auth.js           # Authentication logic
│   └── app.js            # Main application logic
├── assets/               # Images and icons (optional)
├── screenshots/          # App screenshots for README
└── README.md            # Project documentation
```

## 🔥 Firebase Data Structure

```
users/
  └── {userId}/
      └── days/
          └── {date (YYYY-MM-DD)}/
              └── activities/
                  └── {activityId}/
                      ├── name: string
                      ├── category: string
                      ├── duration: number
                      └── timestamp: timestamp
```

## 🎨 Design Highlights

- **Color Scheme:** Modern purple gradient with accent colors
- **Typography:** Clean, readable Segoe UI font family
- **Animations:** Smooth fade-ins, slide-ups, and hover effects
- **Icons:** Font Awesome for consistent iconography
- **Charts:** Interactive Chart.js visualizations

## 📱 Responsive Breakpoints

- **Mobile:** < 480px
- **Tablet:** 481px - 768px
- **Desktop:** > 768px

## 🚀 Deployment

### GitHub Pages Deployment

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click Save

3. **Access your app**
   - Your app will be live at: `https://yourusername.github.io/time-tracker-app/`

## 🔒 Security Considerations

- Firebase security rules should be configured to ensure users can only access their own data
- API keys are safe to expose in client-side code (Firebase handles security through rules)
- Passwords are handled securely by Firebase Authentication

### Recommended Firestore Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🎯 Future Improvements

- [ ] Add activity editing functionality
- [ ] Implement weekly/monthly analytics views
- [ ] Export data as PDF or CSV
- [ ] Add activity templates for quick logging
- [ ] Implement dark mode toggle
- [ ] Add notifications/reminders
- [ ] Social features (share achievements)
- [ ] Multi-language support
- [ ] Offline mode with service workers
- [ ] Activity suggestions based on patterns

## 🐛 Known Issues

- Charts may not render properly on very old browsers (IE11)
- Google Sign-In requires proper domain configuration in Firebase

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Firebase for backend infrastructure
- Chart.js for beautiful visualizations
- Font Awesome for icons
- AI tools (ChatGPT, Copilot) for development assistance

---

**Note:** Remember to replace placeholder links and credentials with your actual values before deployment!
