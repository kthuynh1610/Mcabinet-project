# M Cabinet Design - Landing Page

A modern, responsive landing page for M Cabinet Design built with React and Material-UI.

## 🚀 Features

- Modern and elegant design
- Fully responsive layout
- Material-UI components
- Firebase Hosting deployment
- CI/CD pipeline with GitHub Actions

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase account
- Git

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/kthuynh1610/Mcabinet-project.git
cd Mcabinet-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

To create a production build:

```bash
npm run build
```

## 🔥 Firebase Setup & Deployment

### First Time Setup

1. **Login to Firebase** (if not already logged in):
```bash
npm run firebase:login
```

2. **Create a Firebase project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project"
   - Follow the setup wizard

3. **Update Firebase configuration**:
   - Open `.firebaserc`
   - Replace `your-firebase-project-id` with your actual Firebase project ID
   - Open `.github/workflows/firebase-deploy.yml`
   - Replace `your-firebase-project-id` with your actual Firebase project ID

4. **Deploy manually** (first time):
```bash
npm run deploy
```

### 🤖 Automated CI/CD Deployment

This project is configured to automatically deploy to Firebase Hosting when you push to the `main` branch.

#### Setup GitHub Actions:

1. **Generate Firebase CI Token**:
```bash
npx firebase login:ci
```
Copy the token that is generated.

2. **Add token to GitHub Secrets**:
   - Go to your GitHub repository
   - Navigate to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `FIREBASE_SERVICE_ACCOUNT`
   - Value: Paste the token from step 1
   - Click "Add secret"

3. **Push to GitHub**:
```bash
git add .
git commit -m "Setup Firebase deployment"
git push origin main
```

The GitHub Action will automatically:
- Install dependencies
- Build the project
- Deploy to Firebase Hosting

## 📜 Available Scripts

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run deploy` - Build and deploy to Firebase
- `npm run firebase:login` - Login to Firebase
- `npm run firebase:init` - Initialize Firebase project

## 🌐 Deployment

The site is automatically deployed to Firebase Hosting via GitHub Actions on every push to the `main` branch.

Manual deployment:
```bash
npm run deploy
```

## 📁 Project Structure

```
Mcabinet/
├── public/
│   └── index.html
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # React components
│   │   ├── Header.js
│   │   ├── HeroSection.js
│   │   ├── OurBackground.js
│   │   ├── OurService.js
│   │   ├── OpeningHours.js
│   │   └── Footer.js
│   ├── App.js          # Main app component
│   ├── index.js        # Entry point
│   └── index.css       # Global styles
├── .github/
│   └── workflows/
│       └── firebase-deploy.yml  # CI/CD configuration
├── firebase.json       # Firebase configuration
├── .firebaserc        # Firebase project settings
└── package.json       # Dependencies and scripts
```

## 🎨 Technologies Used

- **React** - UI library
- **Material-UI** - Component library
- **Firebase Hosting** - Deployment platform
- **GitHub Actions** - CI/CD pipeline

## 📝 License

This project is private and proprietary.

## 👤 Author

M Cabinet Design

## 🔧 Troubleshooting

### Firebase deployment fails
- Make sure you're logged in: `npm run firebase:login`
- Check that your Firebase project ID is correct in `.firebaserc`
- Verify your Firebase token in GitHub Secrets

### Build warnings
- The build may show some ESLint warnings about unused variables
- These don't affect functionality but can be cleaned up for production

### GitHub Actions fails
- Verify `FIREBASE_SERVICE_ACCOUNT` secret is set correctly
- Check that the project ID in the workflow file matches your Firebase project
- Review the Actions logs in GitHub for specific errors

## 📞 Support

For issues or questions, please contact M Cabinet Design.

