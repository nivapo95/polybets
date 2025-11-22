import Link from 'next/link';

export default function MarketCard({ market }) {
  if (market.type === 'binary') {
    return <BinaryMarketCard market={market} />;
  } else if (market.type === 'sports') {
    return <SportsMarketCard market={market} />;
  } else {
    return <MultipleChoiceCard market={market} />;
  }
}

function BinaryMarketCard({ market }) {
  const yesOutcome = market.outcomes.find(o => o.name === 'Yes');
  const noOutcome = market.outcomes.find(o => o.name === 'No');

  // Generate avatar image using placeholder service
  const getAvatar = () => {
    // Use DiceBear API for consistent avatars based on market title
    const seed = encodeURIComponent(market.title);
    const avatarUrl = `https://api.dicebear.com/7.x/shapes/svg?seed=${seed}`;
    
    return (
      <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-600">
        <img 
          src={avatarUrl} 
          alt={market.title}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  return (
    <Link href={`/market/${market.id}`}>
      <div className="bg-[#2c3949] rounded-lg p-4 hover:bg-[#343e50] transition-all cursor-pointer border border-[#3a4a5c] hover:border-[#4a5a6c] h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start space-x-3 flex-1 min-w-0">
            {getAvatar()}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-normal text-sm leading-snug line-clamp-2">
                {market.title}
              </h3>
            </div>
          </div>
          <div className="ml-3 text-right flex-shrink-0">
            <div className="text-2xl font-semibold text-white">{yesOutcome?.percentage}%</div>
            <div className="text-xs text-gray-400">chance</div>
          </div>
        </div>

        {/* Yes/No Buttons */}
        <div className="grid grid-cols-2 gap-2 mb-3 mt-auto">
          <button className="bg-[#1e2936] hover:bg-[#253041] border border-green-500/20 rounded px-3 py-2 flex items-center justify-between transition-colors">
            <span className="text-green-400 text-xs font-medium">Yes</span>
            <span className="text-white text-sm font-semibold">{yesOutcome?.percentage}%</span>
          </button>
          <button className="bg-[#1e2936] hover:bg-[#253041] border border-red-500/20 rounded px-3 py-2 flex items-center justify-between transition-colors">
            <span className="text-red-400 text-xs font-medium">No</span>
            <span className="text-white text-sm font-semibold">{noOutcome?.percentage}%</span>
          </button>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            {market.icon === 'repeat' && <span>🔄</span>}
            <span>{market.volume}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="hover:text-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            <button className="hover:text-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

function MultipleChoiceCard({ market }) {
  const displayOutcomes = market.outcomes.slice(0, 2);
  
  const getAvatar = () => {
    // Use DiceBear API for consistent avatars
    const seed = encodeURIComponent(market.title);
    const avatarUrl = `https://api.dicebear.com/7.x/identicon/svg?seed=${seed}`;
    
    return (
      <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-orange-500 to-pink-600">
        <img 
          src={avatarUrl} 
          alt={market.title}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  return (
    <Link href={`/market/${market.id}`}>
      <div className="bg-[#2c3949] rounded-lg p-4 hover:bg-[#343e50] transition-all cursor-pointer border border-[#3a4a5c] hover:border-[#4a5a6c] h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start space-x-3 mb-3">
          {getAvatar()}
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-normal text-sm leading-snug line-clamp-2 mb-2">
              {market.title}
            </h3>
          </div>
        </div>

        {/* Outcomes */}
        <div className="space-y-2 mb-3 flex-grow">
          {displayOutcomes.map((outcome, index) => (
            <div key={index} className="bg-[#1e2936] hover:bg-[#253041] border border-[#3a4a5c] rounded px-3 py-2 flex items-center justify-between transition-colors cursor-pointer">
              <span className="text-gray-300 text-xs">{outcome.name}</span>
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm font-semibold">{outcome.percentage}%</span>
                <div className="flex space-x-1">
                  <button className="text-green-400 hover:text-green-300 text-xs px-2 py-0.5 bg-green-500/10 rounded">Yes</button>
                  <button className="text-red-400 hover:text-red-300 text-xs px-2 py-0.5 bg-red-500/10 rounded">No</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
          <div className="flex items-center space-x-1">
            {market.icon === 'repeat' && <span>🔄</span>}
            <span>{market.volume}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="hover:text-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            <button className="hover:text-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

function SportsMarketCard({ market }) {
  const [team1, team2] = market.outcomes;

  const getTeamLogo = (teamName) => {
    // Use DiceBear API for team logos
    const seed = encodeURIComponent(teamName);
    const logoUrl = `https://api.dicebear.com/7.x/shapes/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`;
    
    return (
      <div className="w-7 h-7 rounded overflow-hidden bg-gray-700">
        <img 
          src={logoUrl} 
          alt={teamName}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  return (
    <Link href={`/market/${market.id}`}>
      <div className="bg-[#2c3949] rounded-lg p-4 hover:bg-[#343e50] transition-all cursor-pointer border border-[#3a4a5c] hover:border-[#4a5a6c] h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          {market.isLive && (
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-500 text-xs font-semibold">LIVE</span>
            </div>
          )}
          <div className="flex items-center space-x-2 text-xs text-gray-400 ml-auto">
            <span>{market.volume}</span>
            <span className="bg-[#1e2936] px-2 py-0.5 rounded text-xs">{market.tags[0]}</span>
            {market.gameTime && !market.isLive && <span>{market.gameTime}</span>}
          </div>
        </div>

        {/* Teams */}
        <div className="space-y-2 mb-3 flex-grow">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {getTeamLogo(team1.name)}
              <span className="text-white font-medium text-sm">{team1.name}</span>
              {team1.score !== undefined && (
                <span className="text-white font-bold text-lg ml-1">{team1.score}</span>
              )}
            </div>
            <span className="text-gray-400 text-sm">{team1.percentage}%</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {getTeamLogo(team2.name)}
              <span className="text-white font-medium text-sm">{team2.name}</span>
              {team2.score !== undefined && (
                <span className="text-white font-bold text-lg ml-1">{team2.score}</span>
              )}
            </div>
            <span className="text-gray-400 text-sm">{team2.percentage}%</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <button className="bg-[#1e2936] hover:bg-[#253041] rounded px-3 py-2 text-center transition-colors">
            <div className="text-gray-300 text-xs mb-0.5">{team1.name}</div>
            <div className="text-white text-sm font-semibold">{team1.percentage}%</div>
          </button>
          <button className="bg-[#1e2936] hover:bg-[#253041] rounded px-3 py-2 text-center transition-colors">
            <div className="text-gray-300 text-xs mb-0.5">{team2.name}</div>
            <div className="text-white text-sm font-semibold">{team2.percentage}%</div>
          </button>
        </div>
      </div>
    </Link>
  );
}

