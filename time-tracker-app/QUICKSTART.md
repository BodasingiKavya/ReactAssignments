# ⚡ Quick Start Guide

## 🎯 Get Running in 5 Minutes

### 1. Firebase Setup (2 minutes)

```bash
# Go to: https://console.firebase.google.com/
# Create project → Enable Auth (Email + Google) → Create Firestore
```

### 2. Get Your Config (1 minute)

```bash
# Firebase Console → Project Settings → Your apps → Web
# Copy the firebaseConfig object
```

### 3. Update Code (1 minute)

Edit `js/firebase-config.js`:
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_ID",
    appId: "YOUR_APP_ID"
};
```

### 4. Test Locally (30 seconds)

```bash
# Just open index.html in your browser!
# Or use: python -m http.server 8000
```

### 5. Deploy (30 seconds)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/time-tracker-app.git
git push -u origin main

# Enable GitHub Pages in repo settings
```

## ✅ That's It!

Your app is now live at: `https://USERNAME.github.io/time-tracker-app/`

## 🎥 Video Recording Tips

1. Sign up → Add 5-6 activities → Click Analyse
2. Show charts and stats
3. Change date → Show "No data" screen
4. Mention AI tools used (ChatGPT for code, etc.)
5. Keep it under 5 minutes!

## 🆘 Quick Fixes

**Firebase error?** → Check config in firebase-config.js
**Google Sign-In fails?** → Add domain to Firebase authorized domains
**Charts not showing?** → Check browser console (F12)

---

Need detailed help? See [SETUP_GUIDE.md](SETUP_GUIDE.md)
