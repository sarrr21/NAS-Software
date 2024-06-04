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
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    // Process form data (e.g., send to a server)
    console.log('Form submitted:', formData);

    // Clear the form
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="  flex mx-auto p-14 bg-cover bg-center m-0 " style={{ backgroundImage:'url(/bg.jpg)'  }}>
      <div>
        <h1 className='text-6xl text-yellow-500 font-bold'>
          Contact us <br />
          For more details
        </h1>
        <p className='flex gap-2 text-white'><span><img src="/email.png" className="h-8 " /></span>tesfamichael@nilesync.com</p>
        <p className='flex gap-2 text-white'><span><img src="/location.png" className="h-8" /></span>Addis Ababa, Ethiopia</p>
        <p className='flex gap-2 text-white'><span><img src="/call.png" className="h-8" /></span>+48 692 079 416</p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto text-center p-8 ">
        <h1 className='text-4xl text-white fot-bold '>Drop Us A Line</h1>
        <p className="text-white text-sm mt-3">We normally respond within 2 business days</p>
        <div className="mb-4">
          
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder='FullName'
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-6 py-2  rounded-lg bg-gray-700 text-gray-200"
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
            className="w-full px-6 py-2  rounded-lg bg-gray-700 text-gray-200"
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
            className="w-full px-6 py-2 rounded-lg bg-gray-700 text-gray-200"
          />
        </div>
        <div className="mb-4">
          
          <textarea
            id="message"
            name="message"
            placeholder='Message'
            value={formData.message}
            onChange={handleChange}
            className="w-full px-8 py-2  rounded-lg bg-gray-700 text-gray-200"
            rows={5}
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-gray-900 text-white px-6 py-2 rounded-lg">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;