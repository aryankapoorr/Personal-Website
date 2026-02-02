import React from 'react';
import Button from './Button.jsx';

/**
 * Demo component showcasing all Button variants and features
 * This component demonstrates the Button component's capabilities
 */
const ButtonDemo = () => {
  const handleClick = (message) => {
    console.log(message);
  };

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Button Component Demo</h2>
      
      {/* Variants Demo */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" onClick={() => handleClick('Primary button clicked')}>
            Primary Button
          </Button>
          <Button variant="secondary" onClick={() => handleClick('Secondary button clicked')}>
            Secondary Button
          </Button>
          <Button variant="outline" onClick={() => handleClick('Outline button clicked')}>
            Outline Button
          </Button>
        </div>
      </div>

      {/* Sizes Demo */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm" onClick={() => handleClick('Small button clicked')}>
            Small
          </Button>
          <Button variant="primary" size="md" onClick={() => handleClick('Medium button clicked')}>
            Medium
          </Button>
          <Button variant="primary" size="lg" onClick={() => handleClick('Large button clicked')}>
            Large
          </Button>
        </div>
      </div>

      {/* Link Buttons Demo */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Link Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" href="#internal-link">
            Internal Link
          </Button>
          <Button variant="secondary" href="https://github.com" external>
            External Link
          </Button>
          <Button variant="outline" href="mailto:example@email.com">
            Email Link
          </Button>
        </div>
      </div>

      {/* Disabled State Demo */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Disabled State</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled onClick={() => handleClick('This should not fire')}>
            Disabled Primary
          </Button>
          <Button variant="secondary" disabled onClick={() => handleClick('This should not fire')}>
            Disabled Secondary
          </Button>
          <Button variant="outline" disabled href="https://example.com">
            Disabled Link
          </Button>
        </div>
      </div>

      {/* Accessibility Demo */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Accessibility Features</h3>
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="primary" 
            ariaLabel="Save your current work"
            onClick={() => handleClick('Save button clicked')}
          >
            Save
          </Button>
          <Button 
            variant="secondary" 
            ariaLabel="Delete this item permanently"
            onClick={() => handleClick('Delete button clicked')}
          >
            Delete
          </Button>
        </div>
        <p className="text-sm text-gray-600">
          Try navigating with Tab key and pressing Enter or Space to activate buttons.
        </p>
      </div>
    </div>
  );
};

export default ButtonDemo;