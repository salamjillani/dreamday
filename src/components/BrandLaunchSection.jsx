import React from 'react';

const BrandLaunchSection = () => {
  const packages = [
    {
      name: 'Essential Launch',
      description: 'Press coordination, branded visuals.',
      price: '$5,500',
    },
    {
      name: 'Signature Launch',
      description: 'Media rollout, influencer management.',
      price: '$9,000',
    },
    {
      name: 'Elite Launch',
      description: 'National campaigns, large-scale activations.',
      price: '$16,000',
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#ffdee9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-[#1d395e] text-center mb-4 font-bold">Brand, Product, and Service Launches</h2>
        <p className="text-center text-lg md:text-xl text-[#295185] mb-12">
          DreamDay orchestrates unforgettable launches.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-[#FEACC6] transition-colors duration-300 transform hover:scale-105"
            >
              <h3 className="font-serif text-2xl text-[#1d395e] mb-2 font-bold">{pkg.name}</h3>
              <p className="text-[#295185] mb-4">{pkg.description}</p>
              <p className="text-[#fd7aa3] font-semibold text-xl">{pkg.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLaunchSection;