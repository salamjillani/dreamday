import React, { useState } from 'react';

const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    budget: '',
  });
  const [paymentStatus, setPaymentStatus] = useState('');
  const [zoomLink, setZoomLink] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (parseInt(formData.budget) < 3000) {
      alert('Minimum budget requirement is $3,000.');
      return;
    }

    // Simulate payment processing
    setPaymentStatus('Processing payment...');
    
    setTimeout(() => {
      setPaymentStatus('Payment successful!');
      setZoomLink('https://zoom.us/j/1234567890?pwd=example');
    }, 2000);
  };

  return (
    <section 
      id="consultation" 
      className="py-16 px-4 bg-[#1d395e] text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(29, 57, 94, 0.9), rgba(29, 57, 94, 0.9)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><pattern id="consultation" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="1200" height="600" fill="url(%23consultation)"/></svg>')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 font-bold">
          Book Your Exclusive Consultation with Eboniece Perry
        </h2>
        <p className="text-center text-lg md:text-xl mb-4">
          Live Your Dream. Every Detail. Perfectly Planned.
        </p>
        <p className="text-center text-base md:text-lg mb-8">
          Embark on a journey to your perfect event with a personal consultation with Eboniece Perry, the principal planner at DreamDay. This session is designed to help shape your event into a meticulously crafted experience that aligns with your unique vision, with a commitment to sustainability and elegance.
        </p>
        <p className="text-center text-lg font-semibold mb-4">Minimum Budget: $3,000</p>
        <p className="text-center text-lg font-semibold mb-4">Consultation Fee: $500</p>
        
        <div className="mb-8">
          <h3 className="font-serif text-2xl mb-2 font-bold">What's Included:</h3>
          <ul className="list-disc list-inside text-base md:text-lg space-y-2">
            <li>Brainstorming Session: A deep dive into your vision, preferences, and the specifics of your event.</li>
            <li>Taste Testing Day: Sample a selection of exquisite flavors to choose the perfect culinary offerings for your event.</li>
            <li>Palette and Theme Review: Explore and select from a variety of color schemes and themes to find the right ambiance.</li>
            <li>Venue Scouting: Evaluate potential venues to locate the ideal setting for your event.</li>
            <li>Special Guests and Activities: Plan engaging activities and entertainment to enchant your guests.</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h3 className="font-serif text-2xl mb-2 font-bold">Booking Steps:</h3>
          <ol className="list-decimal list-inside text-base md:text-lg space-y-2">
            <li>Fill Out the Form: Submit your contact information and details about your event, ensuring it meets the minimum budget requirement.</li>
            <li>Submit Your Payment: Securely pay the consultation fee ($500) via Stripe to confirm your booking.</li>
            <li>Schedule Your Zoom Session: Receive a Zoom link for your consultation with Eboniece Perry upon payment confirmation.</li>
          </ol>
        </div>
        
        <div className="bg-white text-[#1d395e] p-6 rounded-lg max-w-lg mx-auto">
          <h3 className="font-serif text-2xl mb-4 text-center font-bold">Consultation Booking Form</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full p-3 border border-[#295185] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fd7aa3]"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full p-3 border border-[#295185] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fd7aa3]"
              required
            />
            <input
              type="text"
              name="eventType"
              value={formData.eventType}
              onChange={handleInputChange}
              placeholder="Event Type"
              className="w-full p-3 border border-[#295185] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fd7aa3]"
              required
            />
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              placeholder="Event Budget ($)"
              className="w-full p-3 border border-[#295185] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fd7aa3]"
              required
            />
            <div className="w-full p-3 border border-[#295185] rounded-lg bg-gray-50">
              <p className="text-sm text-gray-600">Credit Card Information</p>
              <p className="text-xs text-gray-500 mt-1">Secure payment processing (Demo mode)</p>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FEACC6] text-[#1d395e] font-semibold py-3 px-6 rounded-lg hover:bg-[#fd7aa3] transition-colors duration-300"
            >
              Pay $500 and Book Consultation
            </button>
          </form>
          
          {paymentStatus && (
            <p className="text-center text-sm mt-4 font-semibold">{paymentStatus}</p>
          )}
          
          {zoomLink && (
            <div className="text-center text-sm mt-4">
              <p className="mb-2">Your Zoom consultation link:</p>
              <a 
                href={zoomLink} 
                className="text-[#fd7aa3] underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                {zoomLink}
              </a>
            </div>
          )}
          
          <p className="text-center text-xs mt-4 text-gray-600">
            Secure payment powered by Stripe. Zoom link provided after payment confirmation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;