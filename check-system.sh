#!/bin/bash

# DevSpark System Check Script
# This script verifies all components are properly set up

echo "🔍 DevSpark System Check"
echo "========================"
echo ""

# Check Node.js
echo "1. Checking Node.js..."
if command -v node &> /dev/null; then
    echo "   ✅ Node.js installed: $(node -v)"
else
    echo "   ❌ Node.js not found"
    exit 1
fi

# Check npm
echo ""
echo "2. Checking npm..."
if command -v npm &> /dev/null; then
    echo "   ✅ npm installed: $(npm -v)"
else
    echo "   ❌ npm not found"
    exit 1
fi

# Check dependencies
echo ""
echo "3. Checking dependencies..."
cd devspark-solution
if [ -d "node_modules" ]; then
    echo "   ✅ Dependencies installed"
else
    echo "   ⚠️  Dependencies not found, installing..."
    npm install
fi

# Check .env file
echo ""
echo "4. Checking configuration..."
if [ -f ".env" ]; then
    echo "   ✅ .env file exists"
    
    # Check MongoDB URI
    if grep -q "MONGODB_URI=mongodb" .env; then
        echo "   ✅ MongoDB URI configured"
    else
        echo "   ⚠️  MongoDB URI needs to be configured"
    fi
    
    # Check Email config
    if grep -q "SMTP_PASS=" .env; then
        PASS_LENGTH=${#SMTP_PASS}
        if [ $PASS_LENGTH -ge 10 ]; then
            echo "   ✅ Email configuration detected"
        else
            echo "   ⚠️  Email password might be incomplete"
        fi
    else
        echo "   ⚠️  Email configuration needed"
    fi
else
    echo "   ❌ .env file not found"
    echo "   Please create .env with proper configuration"
    exit 1
fi

# Check file structure
echo ""
echo "5. Checking file structure..."
FILES=(
    "server/server.js"
    "public/index.html"
    "public/admin.html"
    "public/css/style.css"
    "public/js/script.js"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "   ✅ $file"
    else
        echo "   ❌ $file not found"
    fi
done

echo ""
echo "========================"
echo "✅ System check complete!"
echo ""
echo "Next steps:"
echo "1. Configure MongoDB in .env"
echo "2. Configure Gmail App Password in .env"
echo "3. Run: npm run dev"
echo "4. Visit http://localhost:5000"
