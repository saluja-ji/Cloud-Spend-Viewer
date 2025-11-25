/**
 * Filters Component
 * Provides filter controls for cloud provider, team, and environment
 */

import React from 'react';

const Filters = ({
  filters,
  onFilterChange,
  teams,
  months,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="card">
      <div className="card-title">Filters</div>
      <div className="filters-section">
        <div className="filter-group">
          <label htmlFor="cloudProvider">Cloud Provider</label>
          <select
            id="cloudProvider"
            name="cloudProvider"
            value={filters.cloudProvider}
            onChange={handleChange}
          >
            <option value="All">All Providers</option>
            <option value="AWS">AWS</option>
            <option value="GCP">GCP</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="team">Team</label>
          <select
            id="team"
            name="team"
            value={filters.team}
            onChange={handleChange}
          >
            <option value="All">All Teams</option>
            {teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="env">Environment</label>
          <select
            id="env"
            name="env"
            value={filters.env}
            onChange={handleChange}
          >
            <option value="All">All Environments</option>
            <option value="prod">Production</option>
            <option value="staging">Staging</option>
            <option value="dev">Development</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="month">Month</label>
          <select
            id="month"
            name="month"
            value={filters.month}
            onChange={handleChange}
          >
            <option value="">All Months</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {new Date(month + '-01').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
