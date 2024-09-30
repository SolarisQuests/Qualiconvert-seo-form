import React from 'react';
import { UserIcon, BellIcon, BuildingOfficeIcon, GlobeAltIcon, CheckIcon } from '@heroicons/react/24/outline';

const ProgressTracker = ({ currentStep }) => {
  const steps = [
    { icon: UserIcon, title: "Practice Information", description: "Basic practice details" },
    { icon: BellIcon, title: "Customers & Competition", description: "Target audience and competitors" },
    { icon: BuildingOfficeIcon, title: "Website Information", description: "Website performance and marketing" },
    { icon: GlobeAltIcon, title: "SEO", description: "SEO details and optimization" },
    { icon: CheckIcon, title: "Review & Submit", description: "Review and submit your information" },
  ];

  return (
    <nav className="flex-grow">
      <ul className="space-y-6 relative">
        <div className="absolute left-3 top-6 bottom-2 w-0.5 bg-blue-400"></div>
        {steps.map((step, index) => (
          <li key={index} className={`flex items-start relative z-10 ${index + 1 === currentStep ? 'opacity-100' : 'opacity-50'}`}>
            <div className={`w-6 h-6 ${index + 1 === currentStep ? 'bg-white' : 'bg-blue-500'} rounded-full mr-4 flex items-center justify-center`}>
              <step.icon className={`w-4 h-4 ${index + 1 === currentStep ? 'text-blue-600' : 'text-white'}`} />
            </div>
            <div>
              <h2 className="font-semibold font-display">{step.title}</h2>
              <p className="text-sm text-blue-200">{step.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProgressTracker;