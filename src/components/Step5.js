import React, { useState } from 'react';
import { Button } from "./ui/Button";
import { Label } from "./ui/Label";

const Step5 = ({ formData, updateFormData, prevStep, submitForm }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (captchaAnswer !== '11') {
      newErrors.captcha = "Incorrect answer. Please try again.";
    }

    // if (!termsAccepted) {
    //   newErrors.terms = "You must accept the terms and conditions to proceed.";
    // }

    if (Object.keys(newErrors).length === 0) {
      submitForm();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 font-display">Review & Submit</h2>
      <p className="mb-8 text-gray-600">
        Thank you for completing your Onboarding Form. Our team will review and be in touch on next steps.
        We are excited to have you join the Qualiconvert family.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center">
          {/* <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          /> */}
          {/* <Label htmlFor="terms" className="ml-2">
            By electronically executing this agreement, you agree to all of the above <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>
          </Label> */}
        </div>
        {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
        <div>
          <Label htmlFor="captcha">Please confirm you're not a bot by answering this question: 6 + 5 = ?</Label>
          <input
            id="captcha"
            type="text"
            value={captchaAnswer}
            onChange={(e) => setCaptchaAnswer(e.target.value)}
            required
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.captcha && <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>}
        </div>
        <div className="flex justify-between pt-4">
          <Button type="button" onClick={prevStep} variant="outline">Prev</Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Step5;