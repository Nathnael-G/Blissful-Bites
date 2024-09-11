function Reservation() {
    return (
        <section id="Reservation" className=" flex items-center justify-center min-h-screen">
        <div className="text-center">
            <p className="text-left text-green-600 text-md">Contact</p>
            <h1 className="text-8xl font-bold heading__1 text-green-800">GET IN TOUCH</h1>
            <hr className="w-16 mx-auto my-4 border-black" />
            <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                    <i className="fas fa-paper-plane text-2xl"></i>
                    <p className="text-xl">info@blissfulbites.com</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <i className="fas fa-phone text-2xl"></i>
                    <p className="text-xl">+1 (123) 456-7890</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <i className="fab fa-linkedin text-2xl"></i>
                    <p className="text-xl">@blissfulbites</p>
                </div>
            </div>
            <div className="mt-12">
                <p className="text-4xl">Ready to experience our culinary delights?</p>
                <hr className="w-32 mx-auto my-4 border-black" />
                <button className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded-full flex items-center justify-center mx-auto">
                    <i className="fas fa-envelope mr-2"></i> Book a Table
                </button>
            </div>
        </div>
    </section>
    )
  }
  
  export default Reservation;