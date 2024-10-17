import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default ProductCard;
