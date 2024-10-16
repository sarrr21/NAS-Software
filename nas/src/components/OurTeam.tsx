import React, { useState, useEffect, useRef } from 'react';

interface Item {
  title: string;
  description: string;
  photo: string;
}

const items: Item[] = [
  { title: 'Sara Getnet', description: 'Front End Developer', photo: '/sara.jpg' },
  { title: 'Naol Ketema', description: 'Full Stack developer', photo: '/naol.png' },
  { title: 'Item 1', description: 'Description for item 1', photo: 'https://via.placeholder.com/150' },
  { title: 'Item 2', description: 'Description for item 2', photo: 'https://via.placeholder.com/150' },
  // Add more items as needed
];

const Team: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedItem && popupRef.current) {
      popupRef.current.focus();
    }
  }, [selectedItem]);

 
  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="p-16">
      <h1 className="text-6xl font-bold text-center mt-36">Our Team</h1>
      <p className="text-gray-500 text-center mt-8">
        We are a team of passionate people whose goal is to improve everyone's life through <br />
        disruptive products. We build great products to solve your business problems.
      </p>
      <div className="container mx-auto p-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {items.map((item, index) => (
            <div key={index} className="border rounded-lg shadow-lg p-4">
              
              <img src={item.photo} alt={item.title} className="w-full h-48 object-cover mb-8" />
              <h2 className="text-xl font-bold mb-3 text-center">{item.title}</h2>
              <p className="text-gray-500 text-center mb-6">{item.description}</p>
              <div className='flex justify-center'>
              <button  className="flex  items-center text-red-600 hover:text-red-800 font-medium mb-8">
  Read More
  <span className="ml-2 text-lg"> &gt; </span>
</button>
</div>
            </div>
          ))}
        </div>
      </div>
      

      {selectedItem && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <div
            ref={popupRef}
            tabIndex={-1}
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full outline-none"
          >
            <h2 id="dialog-title" className="text-2xl font-bold mb-4">{selectedItem.title}</h2>
            <img src={selectedItem.photo} alt={selectedItem.title} className="w-full h-48 object-cover mb-4" />
            <p id="dialog-description" className="text-gray-700 mb-4">{selectedItem.description}</p>
            <button
              onClick={closePopup}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;