export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
      
      <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 space-y-6">
        <p className="text-gray-300 leading-relaxed">
          This is a demonstration project. No user data is collected or stored.
        </p>
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Data Collection</h2>
          <p className="text-gray-300 leading-relaxed">
            This demo application does not collect, store, or process any personal
            information. All interactions are client-side only.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
          <p className="text-gray-300 leading-relaxed">
            This website does not use cookies or tracking technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

