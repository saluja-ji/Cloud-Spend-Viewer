/**
 * DetailModal Component
 * Displays detailed information about a selected cloud spend entry
 */

import React from 'react';
import { formatCurrency, formatDate } from '../utils/calculationUtils';

const DetailModal = ({ item, onClose }) => {
  if (!item) return null;

  const getDescription = (item) => {
    const envName = {
      prod: 'Production',
      staging: 'Staging',
      dev: 'Development',
    }[item.env] || item.env;

    return `This is ${item.cloud_provider} ${item.service} spend from the ${item.team} team in ${envName} environment on ${formatDate(item.date)}.`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">Cloud Spend Details</div>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-body">
          <div className="detail-row">
            <div className="detail-label">Date</div>
            <div className="detail-value">{formatDate(item.date)}</div>
          </div>

          <div className="detail-row">
            <div className="detail-label">Provider</div>
            <div className="detail-value">
              <span className={`badge ${item.cloud_provider.toLowerCase()}`}>
                {item.cloud_provider}
              </span>
            </div>
          </div>

          <div className="detail-row">
            <div className="detail-label">Service</div>
            <div className="detail-value">{item.service}</div>
          </div>

          <div className="detail-row">
            <div className="detail-label">Team</div>
            <div className="detail-value">{item.team}</div>
          </div>

          <div className="detail-row">
            <div className="detail-label">Environment</div>
            <div className="detail-value">
              <span className={`badge ${item.env}`}>{item.env}</span>
            </div>
          </div>

          <div className="detail-row">
            <div className="detail-label">Cost</div>
            <div className="detail-value" style={{ color: '#2563eb', fontWeight: 'bold' }}>
              {formatCurrency(item.cost_usd)}
            </div>
          </div>

          <div className="detail-description">{getDescription(item)}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
