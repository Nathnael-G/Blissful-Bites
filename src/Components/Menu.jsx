
const menuItems = [
  {
    name: 'Pizza',
    price: '90.00 Rs - 380.00 Rs',
    description: 'Enjoy a delicious pizza with a variety of toppings to choose from. Perfect for any meal.',
    imgSrc: 'https://placehold.co/100x100', // Image URL
  },
  {
    name: 'Garlic Bread',
    price: '80.00 Rs - 120.00 Rs',
    description: 'Crispy garlic bread with a soft center, perfect as a side dish or appetizer.',
    imgSrc: 'https://placehold.co/100x100', // Image URL
  },
  {
    name: 'Pasta',
    price: '120.00 Rs - 170.00 Rs',
    description: 'Rich and creamy pasta with a variety of sauces to choose from. A perfect comfort food.',
    imgSrc: 'https://placehold.co/100x100', // Image URL
  },
  {
    name: 'Cake',
    price: '190.00 Rs - 220.00 Rs',
    description: 'Delicious cake with a variety of flavors to choose from. Perfect for dessert.',
    imgSrc: 'https://placehold.co/100x100', // Image URL
  },
  {
    name: 'Ice Cream',
    price: '70.00 Rs - 100.00 Rs',
    description: 'Creamy ice cream with a variety of flavors to choose from. A perfect treat.',
    imgSrc: 'https://placehold.co/100x100', // Image URL
  },
  {
    name: 'Snacks',
    price: '70.00 Rs - 140.00 Rs',
    description: 'A variety of snacks to enjoy at any time of the day. From chips to nuts.',
    imgSrc: 'https://placehold.co/100x100', // Image URL
  },
  {
    name: 'Mocktails',
    price: '50.00 Rs Only',
    description: 'A variety of refreshing mocktails to enjoy. Perfect for any occasion.',
    imgSrc: 'https://placehold.co/100x100', // Image URL
  },
];

const Menu = () => {
  return (
    <div className="px-5 py-10 text-white bg-black">
      <h1 className="mb-8 text-4xl font-bold text-center">Delicious Menu</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full pr-2 md:w-1/2">
          {menuItems.slice(0, Math.ceil(menuItems.length / 2)).map((item, index) => (
            <div key={index} className="flex items-start w-full p-4 mb-4 bg-gray-800 rounded-lg">
              <img src={item.imgSrc} alt={item.name} className="w-24 h-24 mr-4 bg-gray-600" />
              <div>
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-yellow-400">{item.price}</p>
                <p className="mt-2 text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden mx-2 border-l-2 border-gray-600 md:block"></div>
        <div className="w-full pl-2 md:w-1/2">
          {menuItems.slice(Math.ceil(menuItems.length / 2)).map((item, index) => (
            <div key={index} className="flex items-start w-full p-4 mb-4 bg-gray-800 rounded-lg">
              <img src={item.imgSrc} alt={item.name} className="w-24 h-24 mr-4 bg-gray-600" />
              <div>
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-yellow-400">{item.price}</p>
                <p className="mt-2 text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-10 text-center text-gray-400">
        Buffet Service: Winter Daily from 9:00 am to 10:00 pm
      </p>
    </div>
  );
};

export default Menu;