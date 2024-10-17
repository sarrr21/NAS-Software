import { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }
    console.log('Form submitted:', formData);
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="relative flex flex-col lg:flex-row mx-auto px-6 md:px-16 lg:px-24 py-16 gap-10 lg:gap-52 bg-cover bg-center" style={{ backgroundImage: 'url(/bg.jpg)' }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-80"></div>

      <div className="relative z-10 mb-10 lg:mb-0">
        <h1 className='text-4xl md:text-5xl lg:text-6xl text-yellow-500 font-bold mb-4'>
          Contact Us
        </h1>
        <h1 className='text-4xl md:text-5xl lg:text-6xl text-yellow-500 font-bold mb-8 lg:mb-16'>
          For More Details
        </h1>
        <p className='flex gap-2 text-white mb-3'><span><img src="/email.png" className="h-6" /></span>tesfamichael@nilesync.com</p>
        <p className='flex gap-2 text-white mb-3'><span><img src="/location.png" className="h-6" /></span>Addis Ababa, Ethiopia</p>
        <p className='flex gap-2 text-white mb-3'><span><img src="/call.png" className="h-6" /></span>+48 692 079 416</p>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 w-full lg:max-w-lg text-center p-2">
        <h1 className='text-3xl md:text-4xl text-white font-bold mb-3'>Drop Us A Line</h1>
        <p className="text-gray-400 font-semibold text-sm md:text-md mb-6">We normally respond within 2 business days</p>
        <div className="mb-4">
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder='Full Name'
            value={formData.fullName}
            onChange={handleChange}
            className="w-full md:w-96 px-6 py-3 rounded-lg bg-gray-900 text-gray-200 text-sm"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className="w-full md:w-96 px-6 py-3 rounded-lg bg-gray-900 text-gray-200 text-sm"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder='Subject'
            value={formData.subject}
            onChange={handleChange}
            className="w-full md:w-96 px-6 py-3 rounded-lg bg-gray-900 text-gray-200 text-sm"
          />
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            placeholder='Message'
            value={formData.message}
            onChange={handleChange}
            className="w-full md:w-96 px-6 py-3 rounded-lg bg-gray-900 text-gray-200 text-sm"
            rows={6}
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-gray-900 text-white px-10 py-3 rounded-lg text-md">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
