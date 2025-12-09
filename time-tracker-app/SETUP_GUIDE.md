# 🔧 Complete Setup Guide

## Step-by-Step Firebase Configuration

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `time-tracker-app`
4. Disable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Authentication

1. In Firebase Console, click "Authentication" in left sidebar
2. Click "Get started"
3. Enable **Email/Password**:
   - Click on "Email/Password"
   - Toggle "Enable"
   - Click "Save"
4. Enable **Google Sign-In**:
   - Click on "Google"
   - Toggle "Enable"
   - Select support email
   - Click "Save"

### 3. Create Firestore Database

1. Click "Firestore Database" in left sidebar
2. Click "Create database"
3. Select "Start in test mode" (we'll add security rules later)
4. Choose your location
5. Click "Enable"

### 4. Set Up Security Rules

1. In Firestore Database, click "Rules" tab
2. Replace with these rules:

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

3. Click "Publish"

### 5. Get Firebase Configuration

1. Click the gear icon ⚙️ next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps"
4. Click the web icon `</>`
5. Register app with nickname: "TimeTrack Web"
6. Copy the `firebaseConfig` object

### 6. Update Your Code

Open `js/firebase-config.js` and replace with your config:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef123456"
};
```

### 7. Configure Google Sign-In for GitHub Pages

1. In Firebase Console → Authentication → Settings
2. Add authorized domain:
   - `yourusername.github.io`
3. Click "Add domain"

## 🚀 Deployment to GitHub Pages

### 1. Initialize Git Repository

```bash
cd time-tracker-app
git init
git add .
git commit -m "Initial commit: TimeTrack app"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name: `time-tracker-app`
4. Keep it public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### 3. Push to GitHub

```bash
git remote add origin https://github.com/yourusername/time-tracker-app.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to repository Settings
2. Click "Pages" in left sidebar
3. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
4. Click "Save"
5. Wait 1-2 minutes for deployment

### 5. Access Your App

Your app will be live at:
```
https://yourusername.github.io/time-tracker-app/
```

## 🎥 Creating Video Walkthrough

### What to Include (2-5 minutes)

1. **Introduction (30 sec)**
   - Show landing page
   - Explain the app purpose

2. **Authentication (30 sec)**
   - Demonstrate sign up
   - Show Google Sign-In

3. **Activity Logging (1-2 min)**
   - Add multiple activities
   - Show different categories
   - Demonstrate validation (1440 min limit)
   - Show remaining minutes counter

4. **Analytics Dashboard (1-2 min)**
   - Click "Analyse" button
   - Show pie chart
   - Show bar chart
   - Explain category breakdown

5. **No Data State (20 sec)**
   - Select a different date
   - Show "No data available" screen

6. **AI Usage (30 sec)**
   - Briefly explain how you used AI tools
   - Show any AI-generated components

### Recording Tools

- **Free Options:**
  - OBS Studio (Desktop)
  - Loom (Browser)
  - Windows Game Bar (Win + G)
  - QuickTime (Mac)

- **Upload to:**
  - YouTube (Unlisted)
  - Google Drive (Anyone with link can view)

## 📝 Testing Checklist

Before submitting, test:

- [ ] Sign up with email/password
- [ ] Login with existing account
- [ ] Google Sign-In works
- [ ] Add activity (all fields)
- [ ] Cannot exceed 1440 minutes
- [ ] Delete activity
- [ ] Change date
- [ ] View analytics with data
- [ ] View "No data" state
- [ ] Logout
- [ ] Responsive on mobile
- [ ] Responsive on tablet
- [ ] All links in README work

## 🐛 Troubleshooting

### Firebase Not Working

**Problem:** "Firebase is not defined"
- **Solution:** Check internet connection, Firebase CDN links in index.html

**Problem:** Authentication fails
- **Solution:** Verify Firebase config is correct, check Firebase Console for errors

**Problem:** Google Sign-In doesn't work
- **Solution:** Add your domain to authorized domains in Firebase Console

### GitHub Pages Issues

**Problem:** 404 error on GitHub Pages
- **Solution:** Wait 2-3 minutes after enabling, check branch and folder settings

**Problem:** Firebase doesn't work on GitHub Pages
- **Solution:** Add `yourusername.github.io` to Firebase authorized domains

### Chart.js Not Rendering

**Problem:** Charts don't appear
- **Solution:** Check browser console for errors, ensure Chart.js CDN is loaded

## 💡 Tips for Best Results

1. **Use Real Data:** Add realistic activities when recording video
2. **Test Thoroughly:** Try all features before recording
3. **Clear Explanation:** Speak clearly when explaining AI usage
4. **Good Lighting:** If showing yourself, ensure good lighting
5. **No Personal Info:** Don't show real email addresses in video

## 📞 Support

If you encounter issues:
1. Check Firebase Console for errors
2. Open browser DevTools (F12) and check Console
3. Verify all configuration steps were followed
4. Check that all files are uploaded to GitHub

---

Good luck with your project! 🚀
