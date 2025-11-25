/**
 * Chart Component
 * Displays a simple bar chart of monthly spending
 */

import React, { useEffect, useRef } from 'react';
import { formatCurrency } from '../utils/calculationUtils';

const Chart = ({ spendByMonth }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || Object.keys(spendByMonth).length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const padding = 60;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;

    // Get data
    const months = Object.keys(spendByMonth).sort();
    const values = months.map((m) => spendByMonth[m]);
    const maxValue = Math.max(...values);

    // Clear canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw axes
    ctx.strokeStyle = '#d1d5db';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();

    // Draw bars
    const barWidth = chartWidth / months.length;
    const barSpacing = barWidth * 0.1;
    const actualBarWidth = barWidth - barSpacing;

    months.forEach((month, index) => {
      const value = spendByMonth[month];
      const barHeight = (value / maxValue) * chartHeight;
      const x = padding + index * barWidth + barSpacing / 2;
      const y = canvas.height - padding - barHeight;

      // Draw bar
      ctx.fillStyle = '#2563eb';
      ctx.fillRect(x, y, actualBarWidth, barHeight);

      // Draw label
      ctx.fillStyle = '#374151';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      const monthLabel = new Date(month + '-01').toLocaleDateString('en-US', {
        month: 'short',
        year: '2-digit',
      });
      ctx.fillText(monthLabel, x + actualBarWidth / 2, canvas.height - padding + 25);

      // Draw value
      ctx.fillStyle = '#2563eb';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`$${(value / 1000).toFixed(1)}k`, x + actualBarWidth / 2, y - 8);
    });

    // Draw Y-axis label
    ctx.fillStyle = '#6b7280';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('Spend (USD)', padding - 10, 20);
  }, [spendByMonth]);

  if (Object.keys(spendByMonth).length === 0) {
    return (
      <div className="card chart-section">
        <div className="empty-state">
          <div className="empty-icon">📈</div>
          <div className="empty-title">No Chart Data</div>
          <div className="empty-message">Adjust filters to see monthly spending trends.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="card chart-section">
      <div className="chart-container">
        <div className="card-title" style={{ marginBottom: '1rem' }}>
          Monthly Spend Trend
        </div>
        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default Chart;
