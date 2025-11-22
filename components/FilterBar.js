'use client';

export default function FilterBar({ filters, onFilterChange }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-6">
      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-wrap gap-4 items-center">
        {/* Sort By */}
        <div className="flex items-center space-x-2">
          <label className="text-gray-400 text-sm">Sort by:</label>
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange('sortBy', e.target.value)}
            className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="volume">24hr Volume</option>
            <option value="liquidity">Liquidity</option>
            <option value="newest">Newest</option>
            <option value="ending">Ending Soon</option>
          </select>
        </div>

        {/* Frequency */}
        <div className="flex items-center space-x-2">
          <label className="text-gray-400 text-sm">Frequency:</label>
          <select
            value={filters.frequency}
            onChange={(e) => onFilterChange('frequency', e.target.value)}
            className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        {/* Status */}
        <div className="flex items-center space-x-2">
          <label className="text-gray-400 text-sm">Status:</label>
          <select
            value={filters.status}
            onChange={(e) => onFilterChange('status', e.target.value)}
            className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="active">Active</option>
            <option value="resolved">Resolved</option>
            <option value="all">All</option>
          </select>
        </div>

        {/* Toggle Filters */}
        <div className="flex items-center space-x-4 ml-auto">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.hideSports}
              onChange={(e) => onFilterChange('hideSports', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
            />
            <span className="text-gray-300 text-sm">Hide sports?</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.hideCrypto}
              onChange={(e) => onFilterChange('hideCrypto', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
            />
            <span className="text-gray-300 text-sm">Hide crypto?</span>
          </label>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {/* Sort By */}
          <div>
            <label className="text-gray-400 text-xs mb-1 block">Sort by</label>
            <select
              value={filters.sortBy}
              onChange={(e) => onFilterChange('sortBy', e.target.value)}
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="volume">24hr Volume</option>
              <option value="liquidity">Liquidity</option>
              <option value="newest">Newest</option>
              <option value="ending">Ending Soon</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="text-gray-400 text-xs mb-1 block">Status</label>
            <select
              value={filters.status}
              onChange={(e) => onFilterChange('status', e.target.value)}
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="active">Active</option>
              <option value="resolved">Resolved</option>
              <option value="all">All</option>
            </select>
          </div>
        </div>

        {/* Toggle Filters */}
        <div className="flex flex-col space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.hideSports}
              onChange={(e) => onFilterChange('hideSports', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
            />
            <span className="text-gray-300 text-sm">Hide sports?</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.hideCrypto}
              onChange={(e) => onFilterChange('hideCrypto', e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
            />
            <span className="text-gray-300 text-sm">Hide crypto?</span>
          </label>
        </div>
      </div>
    </div>
  );
}

