import { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const [activeLink, setActiveLink] = useState<string>('Home');

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row p-8 md:p-16 justify-between border">
        <div className="mb-8 md:mb-0">
          <h1 className="text-yellow-500 text-2xl mb-6 font-bold">NAS Software</h1>
          <p className="text-gray-500 mb-8">
            Bridging Boundaries, Elevating Solutions: <br />
            Your Ethiopian-Rooted, Global Tech Powerhouse.
          </p>
          <h1 className="font-bold text-xl">Social</h1>
          <div className="flex gap-4 mt-6">
            <a href="https://facebook.com" className="text-yellow-500 hover:underline">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.linkedin.com/company/nas-software-development/" className="text-yellow-500 hover:underline">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" className="text-yellow-400 hover:underline">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        <div className="text-gray-500 text-sm md:pr-48">
          <h1
            className={`cursor-pointer block ${
              activeLink === 'Home' ? 'text-black' : 'text-gray-500'
            }`}
            onClick={() => handleClick('Home')}
          >
            Home
          </h1>
          <a
            href="/service"
            className={`cursor-pointer block mt-2 ${
              activeLink === 'Service' ? 'text-black' : 'text-gray-500'
            }`}
            onClick={() => handleClick('Service')}
          >
            Service
          </a>
          <a
            href="/about"
            className={`cursor-pointer block mt-2 ${
              activeLink === 'About' ? 'text-black' : 'text-gray-500'
            }`}
            onClick={() => handleClick('About')}
          >
            About
          </a>
          <a
            href="/contact"
            className={`cursor-pointer block mt-2 ${
              activeLink === 'Contact' ? 'text-black' : 'text-gray-500'
            }`}
            onClick={() => handleClick('Contact')}
          >
            Contact
          </a>
        </div>
      </div>
      <div className="border p-4 text-sm text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} NAS Software. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
