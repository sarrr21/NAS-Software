import { useState, useEffect, useRef } from 'react';

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: 'Construction', logo: '/spo1.png' },
  { name: 'Equity', logo: '/spo2.jpg' },
  { name: 'Earth', logo: '/spo2.png' },
  { name: 'P-Shak', logo: '/spo4.png' },
  { name: 'Scanify-Dev', logo: '/spo5.png' },
  { name: 'Tokenhead', logo: 'spo6.jpg' },
  { name: 'Scanify-Dev', logo: '/spo7.png' },
  { name: 'Tokenhead', logo: 'spo8.png' },
];

const ClientsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsToSlide = 3; // Number of items to slide at a time
  const itemWidth = 200; // Width of each item (adjust as needed)
  const gap = 16; // Gap between items
  const containerRef = useRef<HTMLDivElement>(null); // Reference to the carousel container

  useEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth || 0; // Get container width
    const visibleItems = Math.floor(containerWidth / (itemWidth + gap)); // Number of visible items

    // Only slide if there are hidden items
    if (!isPaused && currentIndex + visibleItems < clients.length) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + itemsToSlide;
          return nextIndex + visibleItems >= clients.length ? prevIndex : nextIndex; // Stop sliding if all items are visible
        });
      }, 6000); // Slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex, itemsToSlide, itemWidth, gap, clients.length]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="w-full overflow-hidden py-8">
      <h2 className="text-4xl font-roboto font-bold text-center mb-16">Our Clients</h2>
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={containerRef} // Attach reference to the container
          className="carousel-track flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (itemWidth + gap)}px)`, // Slide by the item width + gap
          }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{ minWidth: `${itemWidth}px`, marginRight: `${gap}px` }}
            >
              <div className="bg-white p-4 rounded-lg shadow-lg flex justify-center items-center" style={{ width: '160px' }}>
                <img src={client.logo} alt={client.name} className="max-w-full max-h-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsCarousel;
