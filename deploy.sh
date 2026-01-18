#!/bin/bash
# DevSpark Deployment Script

echo "🚀 DevSpark Deployment to Vercel"
echo "================================"

# Step 1: Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - DevSpark ready for deployment"
fi

# Step 2: Check for GitHub remote
if ! git remote | grep -q origin; then
    echo ""
    echo "❌ GitHub remote not configured"
    echo "Run: git remote add origin https://github.com/yourusername/devspark-solution.git"
    exit 1
fi

# Step 3: Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
git push -u origin master

# Step 4: Display deployment info
echo ""
echo "✅ Repository pushed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Go to https://vercel.com"
echo "2. Click 'New Project'"
echo "3. Import your GitHub repository"
echo "4. Add environment variables"
echo "5. Deploy!"
echo ""
echo "🎉 Your app will be live at:"
echo "   https://devspark-solution.vercel.app"
