import React, { useState } from 'react';
import { Button } from "./ui/Button";
import { Label } from "./ui/Label";

const Step4 = ({ formData, updateFormData, nextStep, prevStep }) => {
  const [seoOptimization, setSeoOptimization] = useState(formData.seoOptimization || '');
  const [targetKeywords, setTargetKeywords] = useState(formData.targetKeywords || '');
  const [seoReporting, setSeoReporting] = useState(formData.seoReporting || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({
      seoOptimization,
      targetKeywords,
      seoReporting,
    });
    nextStep();
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 font-display">SEO</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="seoOptimization">Has your website been optimized for SEO in the past? If yes, please describe how it was optimized i.e. via an agency, and any details on what they worked on in terms of SEO.</Label>
          <textarea
            id="seoOptimization"
            value={seoOptimization}
            onChange={(e) => setSeoOptimization(e.target.value)}
            placeholder="Enter here..."
            required
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
          />
        </div>
        <div>
          <Label htmlFor="targetKeywords">For optimization purposes, please provide target keywords or phrases that pertain to the business and industry. This list does not have to be exhaustive for now.</Label>
          <textarea
            id="targetKeywords"
            value={targetKeywords}
            onChange={(e) => setTargetKeywords(e.target.value)}
            placeholder="Enter here..."
            required
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
          />
        </div>
        <div>
          <Label htmlFor="seoReporting">If applicable, please share any reporting, keyword research, and audit information from previous companies you've worked with for SEO.</Label>
          <textarea
            id="seoReporting"
            value={seoReporting}
            onChange={(e) => setSeoReporting(e.target.value)}
            placeholder="Enter here..."
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
          />
        </div>
        <div className="flex justify-between pt-4">
          <Button type="button" onClick={prevStep} variant="outline">Prev</Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </div>
  );
};

export default Step4;