'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import marketsData from '@/data/markets.json';
import MarketCard from '@/components/MarketCard';

export default function MarketDetailPage() {
  const params = useParams();
  const market = marketsData.find((m) => m.id === params.id);

  if (!market) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <h1 className="text-2xl text-white mb-4">Market not found</h1>
          <Link href="/" className="text-blue-500 hover:text-blue-400">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  // Get similar markets (same category, different id)
  const similarMarkets = marketsData
    .filter((m) => m.category === market.category && m.id !== market.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to markets
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Market Header */}
          <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-800">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {market.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-white mb-4">
              {market.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {market.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800">
              <div>
                <div className="text-gray-400 text-sm mb-1">Volume</div>
                <div className="text-white text-xl font-bold">
                  {market.volume}
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">End Date</div>
                <div className="text-white text-xl font-bold">
                  {new Date(market.endDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-800">
            <h2 className="text-xl font-bold text-white mb-4">Price Chart</h2>
            <div className="bg-gray-800 rounded-lg p-8 h-64 flex items-center justify-center">
              <MockChart market={market} />
            </div>
          </div>

          {/* Market Description */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h2 className="text-xl font-bold text-white mb-4">About this Market</h2>
            <p className="text-gray-300 leading-relaxed">
              This is a prediction market for: <strong>{market.title}</strong>
              <br />
              <br />
              Market participants can trade on the outcome of this event. The market will resolve
              based on the actual outcome when it occurs.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Outcomes Panel */}
          <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-800 sticky top-20">
            <h2 className="text-xl font-bold text-white mb-4">Outcomes</h2>

            {market.type === 'binary' ? (
              <BinaryOutcomes market={market} />
            ) : market.type === 'sports' ? (
              <SportsOutcomes market={market} />
            ) : (
              <MultipleOutcomes market={market} />
            )}
          </div>
        </div>
      </div>

      {/* Similar Markets */}
      {similarMarkets.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Similar Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarMarkets.map((market) => (
              <MarketCard key={market.id} market={market} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function BinaryOutcomes({ market }) {
  const yesOutcome = market.outcomes.find((o) => o.name === 'Yes');
  const noOutcome = market.outcomes.find((o) => o.name === 'No');

  return (
    <div className="space-y-4">
      <div className="bg-gray-800 rounded-lg p-4 border-2 border-green-500/30">
        <div className="flex justify-between items-center mb-2">
          <span className="text-green-400 font-semibold">Yes</span>
          <span className="text-green-400 text-2xl font-bold">
            {yesOutcome?.percentage}%
          </span>
        </div>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors">
          Buy Yes
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 border-2 border-red-500/30">
        <div className="flex justify-between items-center mb-2">
          <span className="text-red-400 font-semibold">No</span>
          <span className="text-red-400 text-2xl font-bold">
            {noOutcome?.percentage}%
          </span>
        </div>
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors">
          Buy No
        </button>
      </div>
    </div>
  );
}

function MultipleOutcomes({ market }) {
  return (
    <div className="space-y-3">
      {market.outcomes.map((outcome, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors cursor-pointer"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-medium">{outcome.name}</span>
            <span className="text-blue-400 text-xl font-bold">
              {outcome.percentage}%
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all"
              style={{ width: `${outcome.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SportsOutcomes({ market }) {
  return (
    <div className="space-y-4">
      {market.outcomes.map((outcome, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors"
        >
          <div className="flex justify-between items-center mb-2">
            <div>
              <div className="text-white font-semibold">{outcome.name}</div>
              {outcome.score !== undefined && (
                <div className="text-2xl font-bold text-white mt-1">
                  {outcome.score}
                </div>
              )}
            </div>
            <span className="text-blue-400 text-xl font-bold">
              {outcome.percentage}%
            </span>
          </div>
        </div>
      ))}
      {market.isLive && (
        <div className="flex items-center justify-center space-x-2 text-red-500 pt-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold">Live Game</span>
        </div>
      )}
    </div>
  );
}

function MockChart({ market }) {
  // Generate mock data points for the chart
  const dataPoints = market.outcomes[0].percentage;
  const variation = 10;
  
  return (
    <div className="w-full h-full flex flex-col justify-end items-center">
      <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
        {/* Grid lines */}
        <line x1="0" y1="50" x2="400" y2="50" stroke="#374151" strokeWidth="1" />
        <line x1="0" y1="100" x2="400" y2="100" stroke="#374151" strokeWidth="1" />
        <line x1="0" y1="150" x2="400" y2="150" stroke="#374151" strokeWidth="1" />
        
        {/* Mock chart line */}
        <path
          d={`M 0 ${200 - dataPoints * 1.5} 
             Q 50 ${200 - (dataPoints - 5) * 1.5} 100 ${200 - (dataPoints - 3) * 1.5}
             Q 150 ${200 - (dataPoints + 2) * 1.5} 200 ${200 - (dataPoints + 5) * 1.5}
             Q 250 ${200 - (dataPoints + 3) * 1.5} 300 ${200 - (dataPoints - 2) * 1.5}
             Q 350 ${200 - (dataPoints + 1) * 1.5} 400 ${200 - dataPoints * 1.5}`}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
        />
        
        {/* Fill area under line */}
        <path
          d={`M 0 ${200 - dataPoints * 1.5} 
             Q 50 ${200 - (dataPoints - 5) * 1.5} 100 ${200 - (dataPoints - 3) * 1.5}
             Q 150 ${200 - (dataPoints + 2) * 1.5} 200 ${200 - (dataPoints + 5) * 1.5}
             Q 250 ${200 - (dataPoints + 3) * 1.5} 300 ${200 - (dataPoints - 2) * 1.5}
             Q 350 ${200 - (dataPoints + 1) * 1.5} 400 ${200 - dataPoints * 1.5}
             L 400 200 L 0 200 Z`}
          fill="url(#gradient)"
          opacity="0.3"
        />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-gray-400 text-sm mt-4">7 day price history</div>
    </div>
  );
}

