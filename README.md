# MethodTech Challenge

This projectis a **React + TypeScript + Vite** application designed to display financial data in a dashboard format. It includes interactive charts, tables, and a date range picker for analyzing portfolio performance and valuation ratios.

## Live Demo

[View Demo](https://methodtech-challenge.netlify.app/)

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Components Overview](#components-overview)
- [Data Sources](#data-sources)
- [Styling](#styling)
- [Linting](#linting)

---

## Features

- **Dashboard Layout**: Displays performance summary, valuation ratios, and returns chart.
- **Interactive Charts**: Built using `echarts-for-react` for visualizing time-series data.
- **Dynamic Tables**: Displays CSV data with highlighted and formatted values.
- **Date Range Picker**: Allows users to select a date range for filtering data.
- **CSV Parsing**: Uses `papaparse` to load and parse CSV files dynamically.
- **TailwindCSS Styling**: Provides a modern and responsive UI.

---

## Project Structure

The project is organized as follows:

```
methodtech-challenge/
├── public/
│   ├── dataset/
│   │   ├── performanceSummary.csv
│   │   ├── returnsChart.csv
│   │   └── valueRatio.csv
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── DatePicker.tsx
│   │   ├── Header.tsx
│   │   ├── PerformanceSummary.tsx
│   │   ├── ReturnsChart.tsx
│   │   └── ValuationRatio.tsx
│   ├── container/
│   │   └── Dashboard.tsx
│   ├── hooks/
│   │   └── useCsvdata.ts
│   ├── ui/
│   │   ├── Chart.tsx
|   |   ├── CircularLoader.tsx
│   │   └── Table.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd methodtech-challenge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Scripts

- **Development**: Start the development server with hot module replacement.
  ```bash
  npm run dev
  ```

- **Build**: Build the project for production.
  ```bash
  npm run build
  ```

- **Preview**: Preview the production build.
  ```bash
  npm run preview
  ```

- **Lint**: Run ESLint to check for code quality issues.
  ```bash
  npm run lint
  ```

---

## Dependencies

### Main Dependencies

- **React**: Frontend library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript.
- **Vite**: Fast build tool and development server.
- **TailwindCSS**: Utility-first CSS framework.
- **echarts-for-react**: React wrapper for ECharts.
- **dayjs**: Lightweight date library.
- **papaparse**: CSV parsing library.
- **react-day-picker**: Date picker component.

### Development Dependencies

- **ESLint**: Linter for identifying and fixing code issues.
- **TypeScript ESLint**: TypeScript-specific linting rules.
- **@vitejs/plugin-react**: Vite plugin for React.

---

## Components Overview

### 1. **Dashboard**
   - File: [`src/container/Dashboard.tsx`](src/container/Dashboard.tsx)
   - The main container for the application. It includes:
     - **Header**: Displays the title and date range picker.
     - **PerformanceSummary**: Table summarizing performance metrics.
     - **ValuationRatio**: Table showing valuation ratios.
     - **ReturnsChart**: Line chart visualizing returns over time.

### 2. **Header**
   - File: [`src/components/Header.tsx`](src/components/Header.tsx)
   - Contains the title and the `DateRangePicker` component.

### 3. **PerformanceSummary**
   - File: [`src/components/PerformanceSummary.tsx`](src/components/PerformanceSummary.tsx)
   - Displays a table of performance metrics loaded from `performanceSummary.csv`.

### 4. **ValuationRatio**
   - File: [`src/components/ValuationRatio.tsx`](src/components/ValuationRatio.tsx)
   - Displays a table of valuation ratios loaded from `valueRatio.csv`.

### 5. **ReturnsChart**
   - File: [`src/components/ReturnsChart.tsx`](src/components/ReturnsChart.tsx)
   - Displays a time-series line chart of returns data loaded from `returnsChart.csv`.

### 6. **DateRangePicker**
   - File: [`src/components/DatePicker.tsx`](src/components/DatePicker.tsx)
   - Allows users to select a start and end date.

### 7. **Chart**
   - File: [`src/ui/Chart.tsx`](src/ui/Chart.tsx)
   - A reusable chart component built with `echarts-for-react`.

### 8. **Table**
   - File: [`src/ui/Table.tsx`](src/ui/Table.tsx)
   - A reusable table component with support for highlighted and formatted values.

### 9. **useCsvData Hook**
   - File: [`src/hooks/useCsvdata.ts`](src/hooks/useCsvdata.ts)
   - Custom hook for fetching and parsing CSV data using `papaparse`.

---

## Data Sources

The application uses the following CSV files located in the `public/dataset` directory:

1. **`performanceSummary.csv`**: Contains performance metrics.
2. **`valueRatio.csv`**: Contains valuation ratios.
3. **`returnsChart.csv`**: Contains time-series data for returns.

---

## Styling

- **TailwindCSS**: The project uses TailwindCSS for styling. Custom theme variables are defined in [`src/index.css`](src/index.css).

---

## Linting

- **ESLint**: Configured with TypeScript and React-specific rules.
- Configuration file: [`eslint.config.js`](eslint.config.js).

---

## Development Notes

- **Vite Configuration**: The project is configured with Vite. See [`vite.config.ts`](vite.config.ts) for details.
- **TypeScript Configuration**: Separate `tsconfig` files are used for application and node-specific settings:
  - [`tsconfig.app.json`](tsconfig.app.json)
  - [`tsconfig.node.json`](tsconfig.node.json)

---

## Future Improvements

- Add unit tests for components.
- Implement filtering of data based on the selected date range.
- Enhance accessibility (ARIA attributes, keyboard navigation).
- Optimize performance for large datasets.

---
