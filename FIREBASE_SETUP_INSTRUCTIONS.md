# 🔥 Firebase Setup - Final Steps

## ✅ What's Already Done

I've completed the following setup for you:

1. ✅ Installed Firebase CLI tools
2. ✅ Created Firebase configuration files (`firebase.json`, `.firebaserc`)
3. ✅ Set up GitHub Actions CI/CD workflow
4. ✅ Built your React app successfully
5. ✅ Added deployment scripts to `package.json`
6. ✅ Created comprehensive README documentation
7. ✅ Committed and pushed everything to GitHub

## 🎯 What You Need to Do (3 Simple Steps)

### Step 1: Login to Firebase (One-time)

Open your terminal and run:

```bash
cd /Users/account/Downloads/Mcabinet
npx firebase login
```

This will open your browser to authenticate with your Google account.

### Step 2: Create/Select Firebase Project

Go to [Firebase Console](https://console.firebase.google.com/) and:

1. Click **"Add project"** (or select an existing one)
2. Follow the setup wizard
3. Copy your **Project ID** (you'll need it in the next step)

### Step 3: Update Firebase Project ID

You need to replace `your-firebase-project-id` in two files:

**File 1: `.firebaserc`**
```json
{
  "projects": {
    "default": "YOUR_ACTUAL_PROJECT_ID_HERE"
  }
}
```

**File 2: `.github/workflows/firebase-deploy.yml`** (line 37)
```yaml
projectId: YOUR_ACTUAL_PROJECT_ID_HERE
```

### Step 4: Generate Firebase CI Token

In your terminal, run:

```bash
npx firebase login:ci
```

**Copy the token** that appears - you'll need it for the next step!

### Step 5: Add Token to GitHub Secrets

1. Go to: https://github.com/kthuynh1610/Mcabinet-project/settings/secrets/actions
2. Click **"New repository secret"**
3. Name: `FIREBASE_SERVICE_ACCOUNT`
4. Value: **Paste the token from Step 4**
5. Click **"Add secret"**

### Step 6: Deploy!

You have two options:

**Option A: Manual Deploy (first time recommended)**
```bash
npm run deploy
```

**Option B: Automatic Deploy**
Just push to GitHub:
```bash
git add .
git commit -m "Update Firebase project ID"
git push origin main
```

The GitHub Action will automatically build and deploy! 🚀

## 🎉 That's It!

After completing these steps:
- Your site will be live on Firebase Hosting
- Every push to `main` branch will automatically deploy
- You can view your site at: `https://YOUR_PROJECT_ID.web.app`

## 📋 Quick Reference Commands

```bash
# Login to Firebase
npm run firebase:login

# Deploy manually
npm run deploy

# Check deployment status
npx firebase hosting:sites:list

# View your live site
npx firebase open hosting:site
```

## 🆘 Need Help?

If you encounter any issues:

1. **"Project not found"** - Make sure you updated the project ID in both files
2. **"Permission denied"** - Run `npx firebase login` again
3. **GitHub Action fails** - Check that the secret is added correctly
4. **Build errors** - Run `npm run build` locally to test

## 📞 Support

Check the main README.md for more detailed troubleshooting steps.

---

**Current Status**: ✅ All code is committed and pushed to GitHub. Just complete the manual steps above to go live!

