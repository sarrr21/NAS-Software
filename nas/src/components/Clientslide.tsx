import { useState, useEffect } from 'react';

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: 'Construction', logo: '/path/to/logo1.png' },
  { name: 'Equity', logo: '/path/to/logo2.png' },
  { name: 'Earth', logo: '/path/to/logo3.png' },
  { name: 'P-Shak', logo: '/path/to/logo4.png' },
  { name: 'Scanify-Dev', logo: '/path/to/logo5.png' },
  { name: 'Tokenhead', logo: '/path/to/logo6.png' },
];

const ClientsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex === clients.length - 1 ? 0 : prevIndex + 1));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="w-full overflow-hidden py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Our Clients</h2>
      <div className="carousel-container flex justify-center items-center space-x-1">
        {clients.map((client, index) => (
          <div
            key={index}
            className="carousel-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ transform: `translateX(${(index - currentIndex) * 50}px)` }}
          >
            <div className="bg-white p-4 rounded-lg shadow-lg flex justify-center items-center" style={{ width: '160px' }}>
              <img src={client.logo} alt={client.name} className="max-w-full max-h-24" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsCarousel;
