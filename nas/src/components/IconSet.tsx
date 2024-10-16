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
     
      
  <div className="bg-gradient-to-br from-gray-900 to-yellow-900 min-h-screen p-16 flex ">
  
      <div className="w-1/2 pr-8 py-10">
        <h1 className="text-6xl font-customSans font-bold text-yellow-500 mt-8">NAS Software</h1>
        <p className="font-bold text-4xl text-white mb-6">Bringing Your Idea To Life!</p>
        <p className="text-gray-300 mb-6">
          Bridging Boundaries, Elevating Solutions: Your Ethiopian- <br />
          Rooted, Global Tech Powerhouse.
        </p>
        <div className=' space-x-8'>
        <button className="bg-yellow-500 text-white px-10 py-3 rounded-lg mb-6">Let's Chat</button>
        <button className="border-yellow-500 border text-yellow-500 px-10 py-3 rounded-lg mb-6">Our Works</button>
        </div>
        <div className="text-gray-300 space-x-12 flex rounded-lg">
  <div className="text-center pr-6 border-r-2 border-gray-600 border-dashed">
    <div className="text-2xl font-bold">13+</div>
    <div className="text-sm">Jobs<br />Completed</div>
  </div>

  <div className="text-center pr-6 border-r-2 border-gray-600 border-dashed">
    <div className="text-2xl font-bold">8</div>
    <div className="text-sm">Partners<br />Worldwide</div>
  </div>

  <div className="text-center pr-6">
    <div className="text-2xl font-bold">7</div>
    <div className="text-sm">Dedicated<br />Employees</div>
  </div>
</div>
</div>
      <div className="w-1/2 flex flex-wrap justify-center items-center  py-10 ">
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