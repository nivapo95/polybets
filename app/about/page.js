export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-6">About Polymarket</h1>
      
      <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 space-y-6">
        <p className="text-gray-300 leading-relaxed">
          This is a UI clone of Polymarket, built as a demonstration of modern web development
          with Next.js and Tailwind CSS.
        </p>
        
        <p className="text-gray-300 leading-relaxed">
          Polymarket is a prediction market platform where users can trade on the outcome
          of real-world events. This clone features a fully functional interface with
          filtering, sorting, and responsive design.
        </p>

        <div className="pt-6 border-t border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Browse markets across multiple categories</li>
            <li>• Filter and sort markets by various criteria</li>
            <li>• View detailed market information and charts</li>
            <li>• Fully responsive design for all devices</li>
            <li>• Clean, modern UI inspired by Polymarket</li>
          </ul>
        </div>

        <div className="pt-6 border-t border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Next.js (App Router)</li>
            <li>• React</li>
            <li>• Tailwind CSS</li>
            <li>• JavaScript</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

