import AboutUs from './Components/AboutUs';
import Specials from './Components/Specials';
import Menu from './Components/Menu';
import Testimonials from './Components/Testimonials';
import Reservation from './Components/Reservation';
import MenuSection from './Components/MoreMenu';
import Nav from './Components/Nav';
import Hero from './Components/Hero';

function App() {
  return (
    <>
    <div className="h-full mx-auto max-w-7xl">
      <Nav/>
      <Hero />
      <MenuSection />
      <AboutUs />
      <Specials className="h-full" />
      <Menu className="h-full" />
      <Testimonials />
      <Reservation />

    </div>
    </>

  );
}

export default App;