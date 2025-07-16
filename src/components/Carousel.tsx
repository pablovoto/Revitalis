import { useState, useEffect } from 'react';

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: CarouselItem[] = [
    {
      id: 1,
      title: "Tratamientos Faciales",
      subtitle: "Rejuvenece tu rostro",
      image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Descubre nuestros tratamientos faciales personalizados con tecnología de vanguardia"
    },
    {
      id: 2,
      title: "Depilación Láser",
      subtitle: "Piel suave para siempre",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Elimina el vello no deseado con nuestro láser de última generación"
    },
    {
      id: 3,
      title: "Masajes Relajantes",
      subtitle: "Bienestar total",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Relájate y renuévate con nuestros masajes terapéuticos profesionales"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel w-full h-96 lg:h-[500px] rounded-lg shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={`slide${index + 1}`}
          className={`carousel-item relative w-full ${
            index === currentSlide ? 'block' : 'hidden'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl md:text-2xl text-primary-content mb-4">{slide.subtitle}</p>
                <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                <button className="btn btn-primary btn-lg">
                  Conocer Más
                </button>
              </div>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="btn btn-circle btn-ghost text-white hover:bg-white hover:bg-opacity-20"
            >
              ❮
            </button>
            <button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="btn btn-circle btn-ghost text-white hover:bg-white hover:bg-opacity-20"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`btn btn-xs btn-circle ${
              index === currentSlide ? 'btn-primary' : 'btn-ghost btn-outline'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
