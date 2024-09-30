import React, { useState } from 'react';
import { Button } from "./ui/Button";
import { Label } from "./ui/Label";

const Step3 = ({ formData, updateFormData, nextStep, prevStep }) => {
  const [websiteSuccess, setWebsiteSuccess] = useState(formData.websiteSuccess || '');
  const [nonConversionReason, setNonConversionReason] = useState(formData.nonConversionReason || '');
  const [importantActions, setImportantActions] = useState(formData.importantActions || '');
  const [digitalMarketingHistory, setDigitalMarketingHistory] = useState(formData.digitalMarketingHistory || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({
      websiteSuccess,
      nonConversionReason,
      importantActions,
      digitalMarketingHistory
    });
    nextStep();
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 font-display">Website Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="websiteSuccess">How do you measure the success of your website/platform?</Label>
          <textarea
            id="websiteSuccess"
            value={websiteSuccess}
            onChange={(e) => setWebsiteSuccess(e.target.value)}
            placeholder="Enter here..."
            required
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
          />
        </div>
        <div>
          <Label htmlFor="nonConversionReason">Why do you think somebody who may land on your website does not convert?</Label>
          <textarea
            id="nonConversionReason"
            value={nonConversionReason}
            onChange={(e) => setNonConversionReason(e.target.value)}
            placeholder="Enter here..."
            required
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
          />
        </div>
        <div>
          <Label htmlFor="importantActions">Which actions on the website are most important to you? I.e. apart from calling to book an appointment, is there another action you want visitors to take when they visit your website?</Label>
          <textarea
            id="importantActions"
            value={importantActions}
            onChange={(e) => setImportantActions(e.target.value)}
            placeholder="Enter here..."
            required
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
          />
        </div>
        <div>
          <Label htmlFor="digitalMarketingHistory">Have you invested in any digital marketing activities in the past? This could include Google Adwords, Facebook Ads, etc. If so, please tell us why the investment was successful or not?</Label>
          <textarea
            id="digitalMarketingHistory"
            value={digitalMarketingHistory}
            onChange={(e) => setDigitalMarketingHistory(e.target.value)}
            placeholder="Enter here..."
            required
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

export default Step3;