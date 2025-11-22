export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-6">Terms of Use</h1>
      
      <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 space-y-6">
        <p className="text-gray-300 leading-relaxed">
          This is a demonstration project and UI clone. No actual trading or monetary
          transactions take place on this platform.
        </p>
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Demo Purpose</h2>
          <p className="text-gray-300 leading-relaxed">
            This website is created for educational and demonstration purposes only.
            All data shown is mock data and does not represent real markets or trading activity.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">No Financial Advice</h2>
          <p className="text-gray-300 leading-relaxed">
            Nothing on this website constitutes financial advice. This is purely a
            frontend demonstration project.
          </p>
        </div>
      </div>
    </div>
  );
}

