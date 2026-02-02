import React from 'react';
import Card from './Card.jsx';

/**
 * Demo component showcasing different Card variants and configurations
 * This component demonstrates the Card component's capabilities and serves as a visual test
 */
const CardDemo = () => {
  const handleCardClick = (cardType) => {
    console.log(`${cardType} card clicked!`);
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Card Component Demo</h1>
        
        {/* Basic Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Basic Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Default Card</h3>
              <p className="text-gray-600">This is a default card with hover effects enabled.</p>
            </Card>
            
            <Card variant="elevated">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Elevated Card</h3>
              <p className="text-gray-600">This card has more prominent shadows for emphasis.</p>
            </Card>
            
            <Card variant="outlined">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Outlined Card</h3>
              <p className="text-gray-600">This card uses borders instead of shadows.</p>
            </Card>
          </div>
        </section>

        {/* Interactive Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Interactive Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card onClick={() => handleCardClick('Interactive')}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clickable Card</h3>
              <p className="text-gray-600">Click me! This card has click functionality and keyboard support.</p>
            </Card>
            
            <Card hover={false}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Hover Effects</h3>
              <p className="text-gray-600">This card has hover effects disabled.</p>
            </Card>
          </div>
        </section>

        {/* Different Padding Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Padding Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card padding="sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Small Padding</h3>
              <p className="text-gray-600">Compact card with small padding.</p>
            </Card>
            
            <Card padding="md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Medium Padding</h3>
              <p className="text-gray-600">Default card with medium padding.</p>
            </Card>
            
            <Card padding="lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Large Padding</h3>
              <p className="text-gray-600">Spacious card with large padding.</p>
            </Card>
          </div>
        </section>

        {/* Project Card Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Project Card Example</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card onClick={() => handleCardClick('Project')} className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-teal-600 mb-4 rounded-md"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sample Project</h3>
              <p className="text-gray-600 mb-4">A demonstration of how the Card component can be used for project showcases.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Node.js</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">MongoDB</span>
              </div>
            </Card>
            
            <Card onClick={() => handleCardClick('Project')} className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-slate-500 to-blue-600 mb-4 rounded-md"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Another Project</h3>
              <p className="text-gray-600 mb-4">Another example showing responsive design and hover effects.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">JavaScript</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Express</span>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardDemo;