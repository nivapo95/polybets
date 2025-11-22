'use client';

import { useState, useMemo } from 'react';
import MarketCard from '@/components/MarketCard';
import TopicTags from '@/components/TopicTags';
import marketsData from '@/data/markets.json';

export default function HomePage() {
  const [filters, setFilters] = useState({
    sortBy: 'volume',
    hideSports: false,
    hideCrypto: false,
  });

  const [selectedTag, setSelectedTag] = useState('All');

  const filteredAndSortedMarkets = useMemo(() => {
    let markets = [...marketsData];

    // Filter by tag
    if (selectedTag !== 'All') {
      markets = markets.filter((market) =>
        market.tags.some((tag) => tag.toLowerCase().includes(selectedTag.toLowerCase())) ||
        market.category.toLowerCase().includes(selectedTag.toLowerCase())
      );
    }

    // Hide sports
    if (filters.hideSports) {
      markets = markets.filter((market) => market.category !== 'Sports');
    }

    // Hide crypto
    if (filters.hideCrypto) {
      markets = markets.filter((market) => market.category !== 'Crypto');
    }

    // Sort by volume
    markets.sort((a, b) => {
      const getVolume = (vol) => {
        const match = vol.match(/\$(\d+(?:\.\d+)?)(k|m|M)?/);
        if (!match) return 0;
        let value = parseFloat(match[1]);
        if (match[2] === 'k') value *= 1000;
        if (match[2] === 'm' || match[2] === 'M') value *= 1000000;
        return value;
      };
      return getVolume(b.volume) - getVolume(a.volume);
    });

    return markets;
  }, [selectedTag, filters]);

  return (
    <div className="min-h-screen">
      {/* Topic Tags */}
      <TopicTags selectedTag={selectedTag} onTagSelect={setSelectedTag} />

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Market Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredAndSortedMarkets.map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedMarkets.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No markets found matching your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
