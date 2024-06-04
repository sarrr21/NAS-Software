interface CardProps {
    icon: React.ReactNode;
    title: string;
  }
  
  const Card: React.FC<CardProps> = ({ icon, title }) => {
    return (
      <div className="flex flex-row gap-4 items-center  p-3 bg-gray-300 bg-opacity-25 rounded-lg shadow-2xl backdrop-filter backdrop-blur-lg">
        
          <div className="text-3xl text-white">
            {icon}
          </div>
        
        <div className="text-white text-lg font-bold text-center">
          {title}
        </div>
      </div>
    );
  };
  
  export default Card;