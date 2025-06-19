import React from 'react';

const WeddingsSection = () => {
  const packages = [
    {
      name: 'Bliss Package',
      description: 'Elegant design, day-of coordination, bridal assistance.',
      price: '$5,000',
    },
    {
      name: 'Grandeur Package',
      description: 'Full-service planning, vendor management, luxury touches.',
      price: '$8,500',
    },
    {
      name: 'Legacy Package',
      description: 'Multi-day custom events, international coordination.',
      price: '$15,000',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-[#1d395e] text-center mb-4 font-bold">Weddings</h2>
        <p className="text-center text-lg md:text-xl text-[#295185] mb-12">
          From intimate ceremonies to grand celebrations, DreamDay crafts weddings that honor your story.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-[#FEACC6] p-6 rounded-lg shadow-lg text-center hover:bg-[#ffdee9] transition-colors duration-300 transform hover:scale-105"
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

export default WeddingsSection;