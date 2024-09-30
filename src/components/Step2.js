import React, { useState } from 'react';
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";

const Step2 = ({ formData, updateFormData, nextStep, prevStep }) => {
  const [idealCustomers, setIdealCustomers] = useState(formData.idealCustomers || '');
  const [customerChoice, setCustomerChoice] = useState(formData.customerChoice || '');
  const [uniqueFeatures, setUniqueFeatures] = useState(formData.uniqueFeatures || '');
  const [competitors, setCompetitors] = useState(formData.competitors || ['', '']);
  const [errors, setErrors] = useState({});

  const validateURL = (url) => {
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return urlRegex.test(url);
  };

  const handleCompetitorChange = (index, value) => {
    const newCompetitors = [...competitors];
    newCompetitors[index] = value;
    setCompetitors(newCompetitors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    competitors.forEach((url, index) => {
      if (url && !validateURL(url)) {
        newErrors[`competitor_${index}`] = "Please enter a valid URL";
      }
    });

    if (Object.keys(newErrors).length === 0) {
      updateFormData({ 
        idealCustomers, 
        customerChoice, 
        uniqueFeatures, 
        competitors 
      });
      nextStep();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 font-display">Customers & Competition</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="idealCustomers">Who are your ideal customers? Please define your target audience.</Label>
          <textarea
            id="idealCustomers"
            value={idealCustomers}
            onChange={(e) => setIdealCustomers(e.target.value)}
            placeholder="Enter here..."
            required
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
          />
        </div>
        <div>
          <Label htmlFor="customerChoice">Why do your best customers choose you?</Label>
          <textarea
            id="customerChoice"
            value={customerChoice}
            onChange={(e) => setCustomerChoice(e.target.value)}
            placeholder="Enter here..."
            required
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
          />
        </div>
        <div>
          <Label htmlFor="uniqueFeatures">What makes you different from your competitors?</Label>
          <textarea
            id="uniqueFeatures"
            value={uniqueFeatures}
            onChange={(e) => setUniqueFeatures(e.target.value)}
            placeholder="Enter here..."
            required
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
          />
        </div>
        <div>
          <Label>Who are your main competitors? Please share their website URLs, if possible.</Label>
          {competitors.map((competitor, index) => (
            <div key={index} className="mt-2">
              <Input
                value={competitor}
                onChange={(e) => handleCompetitorChange(index, e.target.value)}
                placeholder="Enter competitor URL"
              />
              {errors[`competitor_${index}`] && <p className="text-red-500 text-sm mt-1">{errors[`competitor_${index}`]}</p>}
            </div>
          ))}
        </div>
        <div className="flex justify-between pt-4">
          <Button type="button" onClick={prevStep} variant="outline">Prev</Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </div>
  );
};

export default Step2;