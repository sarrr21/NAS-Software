import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: 'Websites',
      description: 'Expert website development with captivating designs and seamless functionality to enhance your digital presence.',
      icon: '/icons/websites.svg' // Placeholder icon path
    },
    {
      title: 'UI/UX Design',
      description: 'Bespoke UI/UX design solutions focusing on intuitive interfaces and engaging user experiences.',
      icon: '/icons/ui-ux.svg' // Placeholder icon path
    },
    {
      title: 'Mobile Apps',
      description: 'Custom mobile app development from concept to launch, enhancing engagement with user-centric applications.',
      icon: '/icons/mobile-apps.svg' // Placeholder icon path
    },
    {
      title: 'Web Apps',
      description: 'Custom web app development including ERP, CRM, and ecommerce, integrated with mobile technology and robust APIs.',
      icon: '/icons/web-apps.svg' // Placeholder icon path
    },
    {
      title: 'DevOps and Cloud',
      description: 'Optimize operations with DevOps and cloud services, from architecture design to CI/CD, leveraging cutting-edge technology.',
      icon: '/icons/devops-cloud.svg' // Placeholder icon path
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive quality assurance services for flawless software performance and exceptional user experiences.',
      icon: '/icons/quality-assurance.svg' // Placeholder icon path
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div>
          <h1 className="text-6xl font-bold text-center mt-36">Our Services</h1>
          <p className="text-gray-500 text-center mt-8">
            At Nas Software, we harness a diverse array of cutting-edge technologies to turn your visionary ideas into reality.
            Discover how we <br /> leverage our tech stacks to build your dream product:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-lg font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
        <Link to="/work">
          <button className="mt-8 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
            View Our Latest Works
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
