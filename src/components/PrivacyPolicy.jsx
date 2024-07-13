import React from 'react';
import { Helmet } from 'react-helmet';
import { WEBSITE_NAME } from '../constants/constants';

const PrivacyPolicy = () => {
  const pageTitle = `Privacy Policy - ${WEBSITE_NAME}`;
  return (
    <div className="container mx-auto px-4 py-8">
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Your privacy is important to us. It is { WEBSITE_NAME }'s policy to respect your privacy regarding any information we may collect from you across our website, [website name], and other sites we own and operate.</p>
      <h2 className="text-2xl font-bold mb-2">1. Information we collect</h2>
      <p className="mb-4">We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
      <h2 className="text-2xl font-bold mb-2">2. How we use information</h2>
      <p className="mb-4">We use the collected information to provide, operate, maintain, improve, and customize our services, including analyzing and monitoring usage trends.</p>
      <h2 className="text-2xl font-bold mb-2">3. Information sharing</h2>
      <p className="mb-4">We do not share any personally identifying information publicly or with third-parties, except when required to by law.</p>
      <h2 className="text-2xl font-bold mb-2">4. Data retention</h2>
      <p className="mb-4">We retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.</p>
      <h2 className="text-2xl font-bold mb-2">5. Your rights</h2>
      <p className="mb-4">You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
      <h2 className="text-2xl font-bold mb-2">6. Contact us</h2>
      <p className="mb-4">If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
      <p className="font-bold">This policy is effective as of 01-06-24.</p>
    </div>
  );
};

export default PrivacyPolicy;
