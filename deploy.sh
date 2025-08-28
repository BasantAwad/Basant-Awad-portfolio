#!/bin/bash

# Portfolio Website Deployment Script
# This script helps deploy the portfolio to various free hosting platforms

echo "🚀 Portfolio Deployment Script"
echo "================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Function to build the project
build_project() {
    echo "📦 Building project..."
    npm run build
    
    if [ $? -eq 0 ]; then
        echo "✅ Build successful!"
    else
        echo "❌ Build failed!"
        exit 1
    fi
}

# Function to deploy to Netlify
deploy_netlify() {
    echo "🌐 Deploying to Netlify..."
    echo "📁 Build folder ready for Netlify deployment"
    echo "📋 Steps to deploy:"
    echo "   1. Go to https://netlify.com"
    echo "   2. Drag and drop the 'build' folder"
    echo "   3. Set custom domain: basant-awad-mohamed.netlify.app"
    echo "   4. Enable HTTPS automatically"
    echo ""
    echo "📂 Your build folder is ready at: ./build"
}

# Function to deploy to Vercel
deploy_vercel() {
    echo "🚀 Deploying to Vercel..."
    
    # Check if Vercel CLI is installed
    if ! command -v vercel &> /dev/null; then
        echo "📥 Installing Vercel CLI..."
        npm install -g vercel
    fi
    
    echo "🔐 Please login to Vercel..."
    vercel login
    
    echo "🚀 Deploying..."
    vercel --prod
    
    echo "✅ Deployment complete!"
}

# Function to deploy to GitHub Pages
deploy_github_pages() {
    echo "📚 Deploying to GitHub Pages..."
    
    # Check if gh-pages is installed
    if ! npm list gh-pages &> /dev/null; then
        echo "📥 Installing gh-pages..."
        npm install --save-dev gh-pages
    fi
    
    # Check if homepage is set in package.json
    if ! grep -q '"homepage"' package.json; then
        echo "⚠️  Please add homepage to package.json:"
        echo '   "homepage": "https://basantawad.github.io/portfolio"'
        echo "   Then run this script again."
        exit 1
    fi
    
    echo "🚀 Deploying..."
    npm run deploy
    
    echo "✅ Deployment complete!"
    echo "🌐 Your site will be available at the homepage URL in a few minutes."
}

# Function to show deployment options
show_options() {
    echo "🎯 Choose deployment platform:"
    echo "1) Netlify (Recommended - Drag & Drop)"
    echo "2) Vercel (Git Integration)"
    echo "3) GitHub Pages (Git Integration)"
    echo "4) All platforms (Build only)"
    echo "5) Exit"
    echo ""
    read -p "Enter your choice (1-5): " choice
}

# Main deployment flow
main() {
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        echo "📥 Installing dependencies..."
        npm install
    fi
    
    # Build the project
    build_project
    
    # Show deployment options
    show_options
    
    case $choice in
        1)
            deploy_netlify
            ;;
        2)
            deploy_vercel
            ;;
        3)
            deploy_github_pages
            ;;
        4)
            echo "📦 Build completed successfully!"
            echo "📂 Build folder is ready at: ./build"
            echo "🚀 You can now deploy manually to your preferred platform."
            ;;
        5)
            echo "👋 Goodbye!"
            exit 0
            ;;
        *)
            echo "❌ Invalid choice. Please run the script again."
            exit 1
            ;;
    esac
}

# Function to show help
show_help() {
    echo "📖 Portfolio Deployment Script Help"
    echo "==================================="
    echo ""
    echo "Usage: ./deploy.sh [OPTION]"
    echo ""
    echo "Options:"
    echo "  -h, --help     Show this help message"
    echo "  -b, --build    Build only (no deployment)"
    echo "  -n, --netlify  Deploy to Netlify"
    echo "  -v, --vercel   Deploy to Vercel"
    echo "  -g, --github   Deploy to GitHub Pages"
    echo ""
    echo "Examples:"
    echo "  ./deploy.sh           # Interactive deployment"
    echo "  ./deploy.sh --build   # Build only"
    echo "  ./deploy.sh --netlify # Deploy to Netlify"
    echo ""
}

# Parse command line arguments
case "$1" in
    -h|--help)
        show_help
        exit 0
        ;;
    -b|--build)
        build_project
        echo "📦 Build completed successfully!"
        exit 0
        ;;
    -n|--netlify)
        build_project
        deploy_netlify
        exit 0
        ;;
    -v|--vercel)
        build_project
        deploy_vercel
        exit 0
        ;;
    -g|--github)
        build_project
        deploy_github_pages
        exit 0
        ;;
    "")
        main
        ;;
    *)
        echo "❌ Unknown option: $1"
        echo "Use --help for usage information."
        exit 1
        ;;
esac
