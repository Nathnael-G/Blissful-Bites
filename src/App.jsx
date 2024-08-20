import React from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function App() {
  return (
    <div className="max-w-7xl mx-auto h-full">
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
      <section className="container grid grid-cols-2 gap-10 py-10">
        <div className="content__container flex flex-col justify-center">
          <h1 className="text-4xl font-medium text-green-800 mb-4">
            Welcome to <br />
            <span className="heading__1 font-bold">Blisful Bites</span><br />
            <span className="heading__2 font-bold text-green-600">Explore our Food Adventure.</span><br />
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover an exquisite fusion of flavors and ambiance that promises to elevate your dining experience. Indulge in our globally-inspired menu, crafted with care and passion. Join us and embark on a journey of culinary delight. Your table awaits.
          </p>
          <form action="#" className="flex items-center">
            <input type="text" placeholder="Send Us A Message" className="w-full max-w-md py-2 pl-10 text-lg text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
            <button type="submit" className="text-lg font-medium text-white bg-green-600 hover:bg-green-800 transition duration-300 py-2 px-4 rounded">
              Send
            </button>
          </form>
        </div>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide" data-swiper-autoplay="4000">
              <div className="image__container grid grid-cols-2 gap-4">
                <img src="./images/img1.png" alt="" className="w-full max-w-md rounded-lg" />
                <img src="./images/img2.png" alt="" className="w-full max-w-md rounded-lg" />
              </div>
            </div>
            <div className="swiper-slide" data-swiper-autoplay="4000">
              <div className="image__container grid grid-cols-2 gap-4">
                <img src="./images/img3.png" alt="" className="w-full max-w-md rounded-lg" />
                <img src="./images/img4.png" alt="" className="w-full max-w-md rounded-lg" />
              </div>
            </div>
            <div className="swiper-slide" data-swiper-autoplay="4000">
              <div className="image__container grid grid-cols-2 gap-4">
                <img src="./images/img5.png" alt="" className="w-full max-w-md rounded-lg" />
                <img src="./images/img6.png" alt="" className="w-full max-w-md rounded-lg" />
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </div>
  );
}

export default App;