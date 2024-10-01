// src/components/Step1.js
import React, { useState } from 'react';
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";

const Step1 = ({ formData, updateFormData, nextStep, prevStep }) => {
  const [practiceName, setPracticeName] = useState(formData.practiceName || '');
  const [contactName, setContactName] = useState(formData.contactName || '');
  const [businessEmail, setBusinessEmail] = useState(formData.businessEmail || '');
  const [description, setDescription] = useState(formData.description || '');
  const [services, setServices] = useState(formData.services || '');
  const [location, setLocation] = useState(formData.location || '');
  const [city, setCity] = useState(formData.city || '');
  const [state, setState] = useState(formData.state || '');
  const [zip, setZip] = useState(formData.zip || '');
  const [seasonalTrends, setSeasonalTrends] = useState(formData.seasonalTrends || '');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // const validateZip = (zip) => {
  //   const zipRegex = /^\d{5}(-\d{4})?$/;
  //   return zipRegex.test(zip);
  // };

  const validateState = (state) => {
    const stateRegex = /^[A-Z]{2}$/;
    return stateRegex.test(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(businessEmail)) {
      newErrors.businessEmail = "Please enter a valid email address";
    }

    // if (!validateZip(zip)) {
    //   newErrors.zip = "Please enter a valid UK ZIP code";
    // }

    if (!validateState(state)) {
      newErrors.state = "Please enter a valid 2-letter UK state code";
    }

    if (Object.keys(newErrors).length === 0) {
      updateFormData({ 
        practiceName, 
        contactName, 
        businessEmail, 
        description, 
        services, 
        location, 
        city, 
        state, 
        zip, 
        seasonalTrends 
      });
      nextStep();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 font-display">Practice Information</h2>
      <p className="mb-8 text-gray-600">
        Please provide your practice information.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="practiceName">Practice Name</Label>
          <Input
            id="practiceName"
            value={practiceName}
            onChange={(e) => setPracticeName(e.target.value)}
            placeholder="Enter practice name"
            required
          />
        </div>
        <div>
          <Label htmlFor="contactName">Contact Name</Label>
          <Input
            id="contactName"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            placeholder="Enter contact name"
            required
          />
        </div>
        <div>
          <Label htmlFor="businessEmail">Business Email</Label>
          <Input
            id="businessEmail"
            type="email"
            value={businessEmail}
            onChange={(e) => setBusinessEmail(e.target.value)}
            placeholder="Enter business email"
            required
          />
          {errors.businessEmail && <p className="text-red-500 text-sm mt-1">{errors.businessEmail}</p>}
        </div>
        <div>
          <Label htmlFor="description">Please provide a brief description about your practice.</Label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            required
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
          />
        </div>
        <div>
          <Label htmlFor="services">Provide details about the main services that you provide at your practice. Please feel free to include links if descriptions are on your website.</Label>
          <textarea
            id="services"
            value={services}
            onChange={(e) => setServices(e.target.value)}
            placeholder="Enter services"
            required
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={4}
          />
        </div>
        <div>
          <Label htmlFor="location">Which markets do you operate in (please provide specific locations - city and state)?</Label>
          <Input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            required
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city"
              required
            />
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value.toUpperCase())}
              placeholder="Enter state"
              maxLength={2}
              required
            />
            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
          </div>
          <div>
            <Label htmlFor="zip">ZIP</Label>
            <Input
              id="zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="Enter ZIP code"
              required
            />
            {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip}</p>}
          </div>
        </div>
        <div>
          <Label htmlFor="seasonalTrends">Are there any seasonal trends that affect your business?</Label>
          <textarea
            id="seasonalTrends"
            value={seasonalTrends}
            onChange={(e) => setSeasonalTrends(e.target.value)}
            placeholder="Enter seasonal trends"
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

export default Step1;