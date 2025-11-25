/**
 * Main App Component
 * Orchestrates the cloud spend viewer application
 */

import React, { useState, useEffect } from 'react';
import { fetchCloudSpendData } from './services/dataService';
import {
  filterData,
  sortData,
} from './utils/filterUtils';
import {
  calculateTotalSpend,
  calculateSpendByProvider,
  calculateSpendByMonth,
  getUniqueValues,
} from './utils/calculationUtils';
import Filters from './components/Filters';
import Summary from './components/Summary';
import Chart from './components/Chart';
import DataTable from './components/DataTable';
import DetailModal from './components/DetailModal';
import './styles/main.css';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    cloudProvider: 'All',
    team: 'All',
    env: 'All',
    month: '',
  });
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
  const [selectedItem, setSelectedItem] = useState(null);

  // Load data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const fetchedData = await fetchCloudSpendData();
        setData(fetchedData);
        setError(null);
      } catch (err) {
        setError('Failed to load cloud spend data. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Apply filters and sorting
  const filteredData = filterData(data, filters);
  const sortedData = sortData(filteredData, sortConfig);

  // Calculate summaries
  const totalSpend = calculateTotalSpend(sortedData);
  const spendByProvider = calculateSpendByProvider(sortedData);
  const spendByMonth = calculateSpendByMonth(sortedData);

  // Get filter options
  const teams = getUniqueValues(data, 'team');
  const months = getUniqueValues(data, 'date')
    .map((date) => date.slice(0, 7))
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort();

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSort = (config) => {
    setSortConfig(config);
  };

  if (error) {
    return (
      <div>
        <header className="app-header">
          <h1>K&Co. Cloud Spend Viewer</h1>
        </header>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
            <h2 style={{ marginBottom: '0.5rem' }}>Error</h2>
            <p style={{ color: '#666' }}>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <header className="app-header">
          <h1>K&Co. Cloud Spend Viewer</h1>
        </header>
        <div className="container">
          <div className="loading-container">
            <div className="spinner"></div>
            <div className="loading-text">Loading cloud spend data...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <header className="app-header">
        <h1>K&Co. Cloud Spend Viewer</h1>
        <p>Track and analyze your AWS and GCP cloud spending</p>
      </header>

      <div className="container">
        <Filters
          filters={filters}
          onFilterChange={handleFilterChange}
          teams={teams}
          months={months}
        />

        <Summary totalSpend={totalSpend} spendByProvider={spendByProvider} />

        <Chart spendByMonth={spendByMonth} />

        <DataTable
          data={sortedData}
          onRowClick={setSelectedItem}
          sortConfig={sortConfig}
          onSort={handleSort}
        />
      </div>

      {selectedItem && <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
};

export default App;
