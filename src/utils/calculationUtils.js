/**
 * Calculation Utilities
 * Provides functions to calculate summaries and analytics
 */

export const calculateTotalSpend = (data) => {
  return data.reduce((total, item) => total + item.cost_usd, 0);
};

export const calculateSpendByProvider = (data) => {
  const spending = {};
  data.forEach((item) => {
    if (!spending[item.cloud_provider]) {
      spending[item.cloud_provider] = 0;
    }
    spending[item.cloud_provider] += item.cost_usd;
  });
  return spending;
};

export const calculateSpendByTeam = (data) => {
  const spending = {};
  data.forEach((item) => {
    if (!spending[item.team]) {
      spending[item.team] = 0;
    }
    spending[item.team] += item.cost_usd;
  });
  return spending;
};

export const calculateSpendByMonth = (data) => {
  const spending = {};
  data.forEach((item) => {
    const month = new Date(item.date).toISOString().slice(0, 7);
    if (!spending[month]) {
      spending[month] = 0;
    }
    spending[month] += item.cost_usd;
  });
  return spending;
};

export const getUniqueValues = (data, field) => {
  const unique = [...new Set(data.map((item) => item[field]))];
  return unique.sort();
};

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
