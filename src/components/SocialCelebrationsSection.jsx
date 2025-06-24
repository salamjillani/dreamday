import React from 'react';

const SocialCelebrationsSection = () => {
  const packages = [
    {
      name: 'Chic Gathering',
      description: 'Birthdays, showers, intimate events.',
      price: '$2,000',
    },
    {
      name: 'Lavish Affair',
      description: 'Milestone events, luxury rentals.',
      price: '$4,500',
    },
    {
      name: 'Signature Soiree',
      description: 'Custom-themed social events.',
      price: '$7,000',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-[#1d395e] text-center mb-4 font-bold">Social Celebrations</h2>
        <p className="text-center text-lg md:text-xl text-[#295185] mb-12">
          DreamDay transforms life's moments into unforgettable celebrations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-[#FEACC6] p-6 rounded-lg shadow-lg text-center hover:bg-[#ffdee9] transition-colors duration-300 transform hover:scale-105"
            >
              <h3 className="font-serif text-2xl text-[#1d395e] mb-2 font-bold">{pkg.name}</h3>
              <p className="text-[#295185] mb-4">{pkg.description}</p>
              <p className="text-[#ffffff] font-semibold text-xl">{pkg.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialCelebrationsSection;