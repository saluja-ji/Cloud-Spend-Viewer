#!/bin/bash
# 
# K&Co. Cloud Spend Viewer - Getting Started
# This file documents all the steps to get the app running
#

# ============================================================================
# QUICK START (5 MINUTES)
# ============================================================================

# Step 1: Navigate to the project directory
cd cloud-spend-viewer

# Step 2: Install dependencies
npm install

# Step 3: Start the development server
npm start

# Step 4: Open http://localhost:3000 in your browser
# The app should automatically open in your default browser

# Done! You're now running the K&Co. Cloud Spend Viewer 🎉


# ============================================================================
# WHAT HAPPENS NEXT
# ============================================================================

# The development server will:
# ✅ Compile React and JavaScript files
# ✅ Load CSS styling
# ✅ Fetch sample data from public/data.json
# ✅ Display the app in your browser
# ✅ Auto-reload when you make changes
# ✅ Show any errors in the console


# ============================================================================
# WHAT YOU'LL SEE
# ============================================================================

# Header:
#   "K&Co. Cloud Spend Viewer"
#   "Track and analyze your AWS and GCP cloud spending"

# Filter Controls:
#   - Cloud Provider (AWS, GCP, All)
#   - Team (Core, Data, Web)
#   - Environment (prod, staging, dev)
#   - Month (Jan, Feb, Mar, All)

# Summary Cards:
#   - Total Spend: $8,110.24
#   - AWS Spend: $4,654.12
#   - GCP Spend: $3,456.12

# Chart:
#   - Monthly spending trends (bar chart)

# Data Table:
#   - 15 sample cloud cost entries
#   - Sortable columns
#   - Click row for details


# ============================================================================
# TRYING THE APP
# ============================================================================

# 1. Filter by Cloud Provider:
#    Select "AWS" → See only AWS costs
#    Select "GCP" → See only GCP costs
#    Select "All" → See all costs

# 2. Sort the Table:
#    Click "Cost" header → Sort by cost ascending
#    Click "Cost" again → Sort descending
#    Click "Date" → Sort by date

# 3. View Details:
#    Click any row in the table → See full details in modal
#    Click close button or overlay → Close modal

# 4. Combine Filters:
#    Select Team="Data" + Env="prod" → See Data team's prod spending

# 5. Check the Chart:
#    Watch chart update as you change filters
#    See monthly spending trends


# ============================================================================
# TROUBLESHOOTING
# ============================================================================

# Port 3000 already in use?
PORT=3001 npm start

# Clear cache and reinstall:
rm -rf node_modules package-lock.json
npm install
npm start

# Not seeing changes after code edits?
# The dev server auto-reloads. Check browser console for errors.

# Can't fetch data.json?
# Make sure file exists at: public/data.json
# Check browser console for network errors


# ============================================================================
# BUILDING FOR PRODUCTION
# ============================================================================

# Create optimized build:
npm run build

# This creates a dist/ folder with:
# - dist/index.html (compiled HTML)
# - dist/bundle.js (bundled JavaScript)
# - dist/styles.css (compiled styles)

# Deploy dist/ folder to your web server


# ============================================================================
# NEXT STEPS
# ============================================================================

# 1. Read the documentation:
#    - README.md - Features and usage guide
#    - ARCHITECTURE.md - How the app is structured
#    - DEVELOPER_GUIDE.md - Common tasks and tips

# 2. Explore the code:
#    - src/App.jsx - Main component
#    - src/components/ - React components
#    - src/utils/ - Helper functions
#    - src/styles/main.css - Styling

# 3. Try customization:
#    - Edit public/data.json to add data
#    - Change colors in src/styles/main.css
#    - Add new filters by editing components

# 4. Make it production-ready:
#    - Replace mock data with real API
#    - Add authentication if needed
#    - Deploy to your server


# ============================================================================
# KEY COMMANDS
# ============================================================================

npm start              # Start development server
npm run build          # Build for production
npm run dev            # Start dev server and open browser
npm install            # Install dependencies
npm update             # Update dependencies


# ============================================================================
# PROJECT STRUCTURE
# ============================================================================

# cloud-spend-viewer/
# ├── src/                           # Source code
# │   ├── App.jsx                    # Main app component
# │   ├── index.jsx                  # React entry point
# │   ├── components/                # React components
# │   │   ├── DataTable.jsx
# │   │   ├── Filters.jsx
# │   │   ├── Summary.jsx
# │   │   ├── Chart.jsx
# │   │   └── DetailModal.jsx
# │   ├── services/                  # Data services
# │   │   └── dataService.js
# │   ├── utils/                     # Utilities
# │   │   ├── filterUtils.js
# │   │   └── calculationUtils.js
# │   └── styles/
# │       └── main.css
# ├── public/                        # Static files
# │   ├── index.html
# │   └── data.json
# ├── Documentation files
# ├── Configuration files
# └── README.md


# ============================================================================
# ADDING DATA
# ============================================================================

# Edit public/data.json:
# [
#   {
#     "id": "1",
#     "date": "2025-01-15",
#     "cloud_provider": "AWS",
#     "service": "EC2",
#     "team": "Core",
#     "env": "prod",
#     "cost_usd": 1234.56
#   },
#   ... more entries ...
# ]


# ============================================================================
# CUSTOMIZING COLORS
# ============================================================================

# Edit src/styles/main.css:
# :root {
#   --color-primary: #2563eb;        # Change this color
#   --color-primary-dark: #1e40af;   # Change darker variant
#   ... other variables ...
# }


# ============================================================================
# ADDING A NEW FILTER
# ============================================================================

# 1. Edit src/components/Filters.jsx
#    Add a new <select> element

# 2. Edit src/utils/filterUtils.js
#    Add filtering condition for the new field

# 3. Update App.jsx
#    Extract unique values for the new filter


# ============================================================================
# GETTING HELP
# ============================================================================

# Documentation files (read in order):
# 1. SETUP.md (this process)
# 2. README.md (features and usage)
# 3. ARCHITECTURE.md (system design)
# 4. DEVELOPER_GUIDE.md (common tasks)
# 5. USAGE_EXAMPLES.md (real scenarios)

# Online resources:
# - React docs: https://react.dev
# - Webpack docs: https://webpack.js.org
# - MDN CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
# - MDN JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript


# ============================================================================
# FEATURES QUICK REFERENCE
# ============================================================================

# Data Display:
# - Table with sortable columns
# - 15 sample cloud cost records
# - Date, provider, service, team, environment, cost fields

# Filtering:
# - By cloud provider (AWS, GCP)
# - By team (Core, Data, Web)
# - By environment (prod, staging, dev)
# - By month (January, February, March)

# Analytics:
# - Total spend for filtered data
# - Spend breakdown by provider
# - Monthly trends in chart

# Interactivity:
# - Click column header to sort
# - Click row for detail modal
# - Filters update instantly
# - Chart updates with filters


# ============================================================================
# READY TO GO!
# ============================================================================

# You now have a fully functional cloud spend viewer application!
# 
# Next: npm start
# Then: Open http://localhost:3000
# Finally: Explore and customize!
# 
# Questions? Check the documentation files!

echo "🚀 K&Co. Cloud Spend Viewer is ready!"
echo ""
echo "Next steps:"
echo "1. Run: npm install"
echo "2. Run: npm start"
echo "3. Open: http://localhost:3000"
echo ""
echo "📚 Documentation:"
echo "- README.md - Features overview"
echo "- SETUP.md - Detailed setup guide"
echo "- ARCHITECTURE.md - System design"
echo "- DEVELOPER_GUIDE.md - Quick reference"
echo ""
echo "Happy coding! 🎉"
