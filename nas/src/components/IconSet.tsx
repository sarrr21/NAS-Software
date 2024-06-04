import Card from './Card';
import { FaFigma, FaCalculator, FaHospitalAlt, FaUniversity, FaMobileAlt, FaGlobe } from 'react-icons/fa';

const IconSet: React.FC = () => {
  const cards = [
    { icon: <FaFigma />, title: 'Product Design' },
    { icon: <FaCalculator />, title: 'ERP Systems' },
    { icon: <FaHospitalAlt />, title: 'Healthcare Systems' },
    { icon: <FaUniversity />, title: 'Payment Integration' },
    { icon: <FaMobileAlt />, title: 'Mobile Apps' },
    { icon: <FaGlobe />, title: 'Websites' }
  ];

  

  return (
    <div className="bg-gradient-to-r from-blue-900 to-gray-900 min-h-screen p-16 flex ">
      <div className="w-1/2 pr-8">
        <h1 className="text-6xl font-bold text-yellow-500 mt-8">NAS Software</h1>
        <p className="font-bold text-4xl text-white mb-6">Bringing Your Idea To Life!</p>
        <p className="text-gray-300 mb-6">
          Bridging Boundaries, Elevating Solutions: Your Ethiopian- <br />
          Rooted, Global Tech Powerhouse.
        </p>
        <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg mb-6">Let's Chat</button>
        <div className=" text-gray-300 gap-6  flex  rounded-lg ">
          <div className="text-center">
            <div className="text-2xl font-bold">13+</div>
            <div className="text-sm">Jobs Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">8</div>
            <div className="text-sm">Partners Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">7</div>
            <div className="text-sm">Dedicated Employees</div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-wrap justify-center items-center ">
        {cards.map((card, index) => (
          <div key={index} className="m-4">
            <Card icon={card.icon} title={card.title} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default IconSet;