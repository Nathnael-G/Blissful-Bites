const specialsData = [
  {
    title: 'Spicy Chicken Curry',
    recipe: 'Chicken, spices, coconut milk, onions, garlic, ginger',
  },
  {
    title: 'Vegetable Stir Fry',
    recipe: 'Mixed vegetables, soy sauce, sesame oil, garlic',
  },
  {
    title: 'Pasta Primavera',
    recipe: 'Pasta, seasonal vegetables, olive oil, parmesan cheese',
  },
  {
    title: 'Chocolate Lava Cake',
    recipe: 'Chocolate, butter, eggs, flour, sugar',
  },
];

const Specials = () => {
  return (
    <section className="flex flex-col md:flex-row w-full specials-section">
      <div className="w-full md:w-1/2 p-8 specials-list bg-opacity-80">
        <h2 className="mb-4 text-3xl font-bold text-green-800">Today&apos;s Specials</h2>
        <ul>
          {specialsData.map((special, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-xl font-semibold text-green-400">{special.title}</h3>
              <p className="text-gray-600">{special.recipe}</p>
            </li>
          ))}
        </ul>
      </div>
      <div 
        className="hidden md:block w-1/2 bg-center bg-cover specials-image" 
        style={{ backgroundImage: "url('SPECAIL.jpeg')" }}
      />
    </section>
  );
};

export default Specials;