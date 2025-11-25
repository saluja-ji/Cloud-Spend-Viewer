/**
 * DataTable Component
 * Displays cloud spend data in a sortable table
 */

import React from 'react';
import { formatCurrency, formatDate } from '../utils/calculationUtils';

const DataTable = ({ data, onRowClick, sortConfig, onSort }) => {
  const handleHeaderClick = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    onSort({ key, direction });
  };

  const getSortClass = (key) => {
    if (sortConfig.key !== key) return '';
    return sortConfig.direction === 'asc' ? 'sorted-asc' : 'sorted-desc';
  };

  if (data.length === 0) {
    return (
      <div className="card table-section">
        <div className="empty-state">
          <div className="empty-icon">📊</div>
          <div className="empty-title">No Data Found</div>
          <div className="empty-message">
            Try adjusting your filters to see cloud spend data.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card table-section">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th
                onClick={() => handleHeaderClick('date')}
                className={`sortable ${getSortClass('date')}`}
              >
                Date
              </th>
              <th
                onClick={() => handleHeaderClick('cloud_provider')}
                className={`sortable ${getSortClass('cloud_provider')}`}
              >
                Provider
              </th>
              <th
                onClick={() => handleHeaderClick('service')}
                className={`sortable ${getSortClass('service')}`}
              >
                Service
              </th>
              <th
                onClick={() => handleHeaderClick('team')}
                className={`sortable ${getSortClass('team')}`}
              >
                Team
              </th>
              <th
                onClick={() => handleHeaderClick('env')}
                className={`sortable ${getSortClass('env')}`}
              >
                Environment
              </th>
              <th
                onClick={() => handleHeaderClick('cost_usd')}
                className={`sortable ${getSortClass('cost_usd')}`}
              >
                Cost
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} onClick={() => onRowClick(row)}>
                <td>{formatDate(row.date)}</td>
                <td>
                  <span className={`badge ${row.cloud_provider.toLowerCase()}`}>
                    {row.cloud_provider}
                  </span>
                </td>
                <td>{row.service}</td>
                <td>{row.team}</td>
                <td>
                  <span className={`badge ${row.env}`}>{row.env}</span>
                </td>
                <td className="cost-value">{formatCurrency(row.cost_usd)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
