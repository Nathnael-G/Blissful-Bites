
const Nav = () => {
  return (
    <nav>
        <div className='Logo'>
          Blissful Bites
        </div>
        <ul className='flex flex-wrap justify-between gap-2'>
          <li className='px-4 py-2 hover:text-green-600 font-medium'><a href="#">Home</a></li>
          <li className='px-4 py-2 hover:text-green-600 font-medium'><a href="#Aboutus">About Us</a></li>
          <li className='px-4 py-2 hover:text-green-600 font-medium'><a href="#">Services</a></li><a href="#Reservation">
          <li className='px-4 py-2 text-white font-medium bg-green-600 rounded hover:bg-green-800'>Contact Us</li></a>
        </ul>
      </nav>
  )
}

export default Nav