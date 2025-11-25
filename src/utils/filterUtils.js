/**
 * Filtering Utilities
 * Provides functions to filter cloud spend data
 */

export const filterData = (data, filters) => {
  return data.filter((item) => {
    // Filter by cloud provider
    if (filters.cloudProvider !== 'All' && item.cloud_provider !== filters.cloudProvider) {
      return false;
    }

    // Filter by team
    if (filters.team !== 'All' && item.team !== filters.team) {
      return false;
    }

    // Filter by environment
    if (filters.env !== 'All' && item.env !== filters.env) {
      return false;
    }

    // Filter by month
    if (filters.month) {
      const itemMonth = new Date(item.date).toISOString().slice(0, 7);
      if (itemMonth !== filters.month) {
        return false;
      }
    }

    return true;
  });
};

export const sortData = (data, sortConfig) => {
  if (!sortConfig.key) return data;

  const sorted = [...data].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return sorted;
};
