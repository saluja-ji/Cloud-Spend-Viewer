# K&Co. Cloud Spend Viewer

A modern, maintainable web application for tracking and analyzing AWS and GCP cloud spending. Built with React and designed for easy extensibility.

## Features

**Core Functionality**
- View cloud cost data in an interactive data table
- Advanced filtering by cloud provider, team, and environment
- Monthly spend trends visualization with bar charts
- Real-time summary statistics (total spend, spend by provider)
- Click-to-detail modal for inspecting individual cost entries
- Responsive design that works on desktop and mobile devices

**UI/UX Features**
- Clean, professional interface with consistent styling
- Loading states with spinner animation
- Empty states with helpful messages
- Sortable data table (click column headers)
- Color-coded badges for cloud providers and environments
- Formatted currency and date displays
- Fully accessible modal dialogs

## Project Structure

```
cloud-spend-viewer/
├── public/
│   ├── index.html          # HTML entry point
│   └── data.json           # Static cloud spend data
├── src/
│   ├── components/         # React components
│   │   ├── DataTable.jsx   # Sortable data table
│   │   ├── Filters.jsx     # Filter controls
│   │   ├── Summary.jsx     # Summary cards
│   │   ├── Chart.jsx       # Monthly spend chart
│   │   └── DetailModal.jsx # Detail view modal
│   ├── services/
│   │   └── dataService.js  # Data fetching (simulates API)
│   ├── utils/
│   │   ├── filterUtils.js  # Filtering and sorting logic
│   │   └── calculationUtils.js # Calculations and formatting
│   ├── styles/
│   │   └── main.css        # Global styles
│   ├── App.jsx             # Main app component
│   └── index.jsx           # React entry point
├── webpack.config.js       # Webpack configuration
├── .babelrc               # Babel configuration
├── package.json           # Project dependencies
└── README.md             # This file
```

## Technology Stack

- **React 18** - UI library
- **Webpack 5** - Module bundler
- **Babel 7** - JavaScript transpiler
- **CSS3** - Styling with CSS variables and Grid/Flexbox
- **Vanilla JavaScript** - Canvas-based charts

## Getting Started

### Prerequisites
- Node.js 14+ and npm installed

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd cloud-spend-viewer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

## Usage

### Viewing Data
1. The application loads sample cloud spend data automatically
2. Data is displayed in a sortable table showing:
   - Date of the cost
   - Cloud provider (AWS/GCP)
   - Service name
   - Team responsible
   - Environment (prod/staging/dev)
   - Cost in USD

### Filtering Data
Use the filter controls to narrow down the data:
- **Cloud Provider**: Select AWS, GCP, or All
- **Team**: Select from Core, Data, Web teams, or All
- **Environment**: Select prod, staging, dev, or All
- **Month**: Filter by specific month or show all months

Filters work together - selected filters are applied as AND conditions.

### Sorting
Click on any table column header to sort by that column:
- Click once for ascending order
- Click again for descending order
- Visual indicators (↑/↓) show current sort direction

### Summary Section
View summary statistics for the filtered data:
- **Total Spend**: Sum of all costs matching current filters
- **AWS Spend**: Sum of AWS costs
- **GCP Spend**: Sum of GCP costs

### Charts
The monthly spend trend chart shows:
- Spending totals for each month matching current filters
- Values displayed above each bar
- Easy visualization of spending patterns over time

### Detail View
Click any row in the table to open a detailed modal showing:
- All data fields for that entry
- Color-coded provider and environment badges
- Contextual description of the cost

## Data Model

Each cloud spend entry contains:
```javascript
{
  "id": "unique-identifier",
  "date": "YYYY-MM-DD",
  "cloud_provider": "AWS" | "GCP",
  "service": "service-name",
  "team": "team-name",
  "env": "prod" | "staging" | "dev",
  "cost_usd": number
}
```

## Adding Sample Data

To add more cloud spend data, edit `public/data.json`:

```json
[
  {
    "id": "16",
    "date": "2025-03-05",
    "cloud_provider": "AWS",
    "service": "EC2",
    "team": "Core",
    "env": "prod",
    "cost_usd": 1500.00
  }
]
```

## Customization

### Changing Styles
All styling is in `src/styles/main.css` using CSS variables for easy customization:

```css
:root {
  --color-primary: #2563eb;      /* Change primary color */
  --color-success: #10b981;      /* Change success color */
  --border-radius: 8px;          /* Change border radius */
}
```

### Adding Filters
To add a new filter, modify `src/components/Filters.jsx` and update the filter logic in `src/utils/filterUtils.js`.

### Adding Calculations
Extend `src/utils/calculationUtils.js` with new calculation functions and use them in components.

## Maintaining Code Quality

### Key Principles
- **Separation of Concerns**: Data, business logic, and UI are kept separate
- **Reusable Components**: Modular, self-contained React components
- **Clear Naming**: Functions and variables use descriptive names
- **Comments**: Important logic includes brief explanatory comments
- **DRY**: Shared logic in utility modules, not repeated in components

### Component Architecture
- **Service Layer** (`services/`): Handles data fetching and API calls
- **Utility Layer** (`utils/`): Pure functions for filtering, calculations, and formatting
- **Component Layer** (`components/`): Presentation and user interaction
- **App Component**: Orchestrates state and connects everything

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Performance Optimizations

- Efficient filtering with single-pass algorithms
- Memoized calculations prevent unnecessary recomputation
- Canvas-based charts (lightweight rendering)
- CSS transitions for smooth animations
- Responsive images and media queries for mobile


## Troubleshooting

### Port 3000 already in use
```bash
# Change port in webpack config or use:
PORT=3001 npm start
```

### Module not found errors
```bash
# Clear node_modules and reinstall:
rm -rf node_modules package-lock.json
npm install
```

### Data not loading
- Check `public/data.json` exists and is valid JSON
- Open browser console to see error messages
- Verify webpack dev server is running


## Contact

K&Co. Cloud Spend Team
