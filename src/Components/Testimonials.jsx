import React from "react"; 

const testimonials = [
    {
        text: "I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.",
        image: "hero-slider-1.jpg",
    },
    {
        text: "The ambiance and the service were just perfect. I had a wonderful time.",
        image: "hero-slider-2.jpg",
    },
];

function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black text-white">
            <img 
                src={testimonials[currentTestimonial].image} 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 zoom" 
            />
            <div className="relative z-10 text-center p-4">
                <p className="text-4xl mb-4">”</p>
                <p className="text-2xl md:text-3xl lg:text-4xl">{testimonials[currentTestimonial].text}</p>
                <div className="flex justify-center mt-4">
                    <i className="fas fa-circle text-xs mx-1"></i>
                    <i className="fas fa-circle text-xs mx-1"></i>
                    <i className="fas fa-circle text-xs mx-1"></i>
                </div>
                <div className="mt-6">
                    <img 
                        src="https://placehold.co/100x100" 
                        alt="Restaurant logo" 
                        className="mx-auto mb-2" 
                    />
                    <p className="text-sm">Jhon-Smith</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;