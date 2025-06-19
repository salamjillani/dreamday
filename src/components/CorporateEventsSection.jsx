import React from 'react';

const CorporateEventsSection = () => {
  const packages = [
    {
      name: 'Signature Soiree',
      description: 'Professional themes, tech setup, guest management.',
      price: '$4,500',
    },
    {
      name: 'Prestige Package',
      description: 'Full brand integration, team-building activities.',
      price: '$7,500',
    },
    {
      name: 'Executive Retreat',
      description: 'Luxury venues, executive experiences.',
      price: '$12,000',
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#ffdee9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-[#1d395e] text-center mb-4 font-bold">Corporate Events</h2>
        <p className="text-center text-lg md:text-xl text-[#295185] mb-12">
          DreamDay designs corporate experiences that inspire, impress, and deliver impact.
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

export default CorporateEventsSection;