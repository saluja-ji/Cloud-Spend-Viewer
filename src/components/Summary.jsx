/**
 * Summary Component
 * Displays summary statistics of cloud spend
 */

import React from 'react';
import { formatCurrency } from '../utils/calculationUtils';

const Summary = ({ totalSpend, spendByProvider }) => {
  return (
    <div className="summary-section">
      <div className="summary-card">
        <div className="summary-label">Total Spend (Filtered)</div>
        <div className="summary-value">{formatCurrency(totalSpend)}</div>
      </div>

      {Object.entries(spendByProvider).map(([provider, amount]) => (
        <div key={provider} className={`summary-card ${provider.toLowerCase()}`}>
          <div className="summary-label">{provider} Spend</div>
          <div className="summary-value">{formatCurrency(amount)}</div>
        </div>
      ))}
    </div>
  );
};

export default Summary;
