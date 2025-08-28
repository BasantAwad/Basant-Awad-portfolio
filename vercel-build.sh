#!/bin/bash

# Vercel Build Script for Monorepo
echo "🚀 Starting Vercel build process..."

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install

# Build the frontend
echo "🔨 Building frontend..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build output: frontend/build"
else
    echo "❌ Build failed!"
    exit 1
fi
