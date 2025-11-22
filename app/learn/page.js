export default function LearnPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-6">Learn About Prediction Markets</h1>
      
      <div className="space-y-6">
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">What are Prediction Markets?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Prediction markets are exchange-traded markets where participants can trade on
            the outcomes of future events. Market prices reflect the collective wisdom of
            all participants.
          </p>
          <p className="text-gray-300 leading-relaxed">
            When you buy a share in a prediction market, you're essentially betting on
            whether you think an event will happen or not. The price of shares reflects
            the market's collective belief about the probability of that outcome.
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">1. Choose a Market</h3>
              <p className="text-gray-300">
                Browse markets on politics, sports, crypto, and more. Each market has
                multiple outcomes to choose from.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">2. Make Your Prediction</h3>
              <p className="text-gray-300">
                Buy shares in the outcome you believe will happen. The price reflects
                the current market probability.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">3. Market Resolution</h3>
              <p className="text-gray-300">
                When the event occurs, winning shares are worth $1 and losing shares
                are worth $0.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Market Types</h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Binary Markets</h3>
              <p className="text-gray-300">
                Simple Yes/No questions with two possible outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Multiple Choice</h3>
              <p className="text-gray-300">
                Markets with more than two possible outcomes, where only one can win.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Sports Markets</h3>
              <p className="text-gray-300">
                Live and upcoming sporting events across various leagues and competitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

