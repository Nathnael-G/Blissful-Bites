const AboutUs = () => {
  return (
    <section className="flex flex-wrap-reverse justify-between h-full gap-8 pb-10 about-us-section">
        <div className="flex flex-col justify-center mt-8">
        <img src="https://placehold.co/400x300" alt="Café" className="mx-2 rounded-lg shadow-lg" />
        <img src="https://placehold.co/400x300" alt="Café" className="mx-2 rounded-lg shadow-lg" />
      </div>
        <div>
      <h2 className="mb-4 text-3xl font-bold text-center text-green-800">Our Story</h2>
      <h3 className="mb-6 text-xl text-center text-green-600">Every Flavor Tells a Story</h3>
      <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-600">
        Celebrate your special occasion in style at our cozy café, where we offer the perfect setting for an unforgettable party. 
        Whether it&apos;s a birthday bash, anniversary celebration, bridal shower, or any other joyous event, we have everything you need 
        to make it an extraordinary experience. 
        Book your party at our café and let us take care of all the details, leaving you and your guests to revel in the joy of the occasion. 
        It will be an affair to remember, filled with laughter, great food, and the warmth of shared moments with your loved ones.
      </p>
      <h4 className="text-lg font-bold text-center">Book Through Call OR Message on WhatsApp:</h4>
      <p className="mb-4 text-center">+918769571142</p>
      <p className="mb-4 text-center">+917568023234</p>
      <div className="flex justify-center">
        <button className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
          Read More
        </button>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;