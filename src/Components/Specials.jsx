// Components/Specials.js
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
    <section className="flex w-full specials-section h-96">
      <div className="w-1/2 p-8 specials-list">
        <h2 className="mb-4 text-3xl font-bold">Today&apos;s Specials</h2>
        <ul>
          {specialsData.map((special, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{special.title}</h3>
              <p className="text-gray-600">{special.recipe}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 h-full bg-center bg-cover specials-image" style={{ backgroundImage: "url('https://placehold.co/600x400')" }}>
        {/* You can replace the URL with an actual image link */}
      </div>
    </section>
  );
};

export default Specials;