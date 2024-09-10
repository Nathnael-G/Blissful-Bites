import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AboutUs from './Components/AboutUs';
import Specials from './Components/Specials';
import Menu from './Components/Menu';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

            useEffect(() => {
                const interval = setInterval(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
                }, 2000);
                return () => clearInterval(interval);
            }, []);
          
  return (
    <>
    <div className="h-full mx-auto max-w-7xl">
      <nav>
        <div className='Logo'>
          Blissful Bites
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <section className="container">
        <div className="flex flex-col justify-center content__container">
          <h1 className="text-4xl font-medium text-green-800">
            Welcome to <br />
            <span className="font-bold heading__1">Blissful Bites</span><br />
            <span className="font-bold heading__2">Explore our Food Adventure.</span><br />
          </h1>
          <p className="text-lg text-gray-600">
            Discover an exquisite fusion of flavors and ambiance that promises to elevate your dining experience. Indulge in our globally-inspired menu, crafted with care and passion. Join us and embark on a journey of culinary delight. Your table awaits.
          </p>
          <form action="#">
            <input type="text" placeholder="Send Us A Message" className="focus:outline-none focus:ring-2 focus:ring-green-600" />
            <button type="submit" className="">
              Send
            </button>
          </form>
        </div>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease' }}>
              <div className="grid grid-cols-2 gap-4 image__container">
                <img src="https://placehold.co/300x300" alt="Plate of dessert with berries"  className="w-full max-w-md rounded-lg" />
                <img src="https://placehold.co/300x300" alt="Plate of dessert with berries" className="w-full max-w-md rounded-lg" />
              </div>
            </div>
            <div className="swiper-slide" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease' }}>
              <div className="grid grid-cols-2 gap-4 image__container">
                <img src="https://placehold.co/300x300" alt="Plate of dessert with berries" className="w-full max-w-md rounded-lg" />
                <img src="https://placehold.co/300x300" alt="Plate of dessert with berries" className="w-full max-w-md rounded-lg" />
              </div>
            </div>
            <div className="swiper-slide" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease' }}>
              <div className="grid grid-cols-2 gap-4 image__container">
                <img src="https://placehold.co/300x300" alt="Plate of dessert with berries" className="w-full max-w-md rounded-lg" />
                <img src="https://placehold.co/300x300" alt="Plate of dessert with berries" className="w-full max-w-md rounded-lg" />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <span className={`w-3 h-3 ${currentIndex === 0 ? 'bg-green-700' : 'bg-gray-300'} rounded-full cursor-pointer`} onClick={() => setCurrentIndex(0)}></span>
            <span className={`w-3 h-3 ${currentIndex === 1 ? 'bg-green-700' : 'bg-gray-300'} rounded-full cursor-pointer`} onClick={() => setCurrentIndex(1)}></span>
            <span className={`w-3 h-3 ${currentIndex === 2 ? 'bg-green-700' : 'bg-gray-300'} rounded-full cursor-pointer`} onClick={() => setCurrentIndex(2)}></span>
          </div>
        </div>
      </section>
      <AboutUs />
      <Specials className="h-full" />
      <Menu className="h-full" />

    </div>
    </>

  );
}

export default App;