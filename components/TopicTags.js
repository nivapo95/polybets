'use client';

export default function TopicTags({ selectedTag, onTagSelect }) {
  const tags = [
    'All', 'Trump', 'Ukraine', 'Epstein', 'Trump x Mamdani', 'Fed', 'Token Sales',
    'Gemini 3', 'Venezuela', 'Best of 2025', 'Monad', 'Chile Election', 'Gaza',
    'China', 'Mamdani', 'Google Search', 'Earnings', 'Global Elections', 'Israel',
    'Trade War', 'India-Pakistan', 'AI', 'Parlays', 'Earn 4%', 'US Election',
    'Crypto Prices', 'Bitcoin', 'Weather', 'Movies'
  ];

  return (
    <div className="bg-[#1e2936] border-b border-[#2d3a4d] sticky top-[106px] z-40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3 py-3">
          {/* Search Icon */}
          <button className="flex-shrink-0 w-8 h-8 bg-[#2c3949] rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#343e50] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Filter Icon */}
          <button className="flex-shrink-0 w-8 h-8 bg-[#2c3949] rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#343e50] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </button>

          {/* Bookmark Icon */}
          <button className="flex-shrink-0 w-8 h-8 bg-[#2c3949] rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#343e50] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-700"></div>

          {/* Tags */}
          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => onTagSelect(tag)}
                  className={`px-3 py-1 rounded text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedTag === tag
                      ? 'bg-blue-600 text-white'
                      : 'bg-[#2c3949] text-gray-300 hover:bg-[#343e50] hover:text-white'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button className="flex-shrink-0 w-8 h-8 bg-[#2c3949] rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#343e50] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

