import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import Button from '../../components/common/Button';

// Import the react-flags-select component and its CSS
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

// A simple MessageModal component
const MessageModal = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative rounded-lg bg-white p-8 text-center text-gray-800 shadow-xl">
        <p className="mb-4 text-xl font-semibold">{message}</p>
        <button
          onClick={onClose}
          className="rounded-full bg-orange-500 px-6 py-2 font-bold text-white hover:bg-orange-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
    file: null,
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false); // New state for drag-and-drop
  const [selectedCountry, setSelectedCountry] = useState('IN'); // State for the selected country

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleRecaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      setModalMessage("Please verify captcha!");
      return;
    }

    console.log("Form submitted:", formData);
    setModalMessage("Form submitted successfully!");
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      message: '',
      file: null,
    });
    setCaptchaVerified(false);
  };

  const handleCloseModal = () => {
    setModalMessage('');
  };
  
  // Drag and drop handlers
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      // Update formData with the first dropped file
      setFormData(prev => ({
        ...prev,
        file: droppedFiles[0]
      }));
    }
  };

  return (
    <div className="min-h-screen text-white flex items-start justify-center p-4 sm:p-6 lg:p-12 bg-[#010925] rounded-xl">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

        <div className="flex flex-col justify-between h-full py-8 px-6 rounded-lg">
          {/* Top Section */}
          <div className="flex flex-col">
            <h4 className="uppercase tracking-wide text-xl sm:text-2xl font-semibold text-white">
              We Are Here To Help You
            </h4>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mt-4 text-white">
              Let’s Transform Your <br /> Vision Into Value.
            </h1>
            <div className="text-3xl mt-15 text-white font-bold">Contact Us</div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mt-2 text-lg">
            <p className="flex items-center gap-3 text-white">
              <FaEnvelope className="text-2xl" /> bts.tecoerng
            </p>
            <p className="flex items-center gap-3 text-white">
              <FaPhone className="text-2xl" /> +91 83117 46476
            </p>
          </div>

          {/* Social Media */}
          <div className="mt-8">
            <h4 className="font-semibold text-lg sm:text-xl text-white">Our Socials</h4>
            <div className="flex space-x-4 mt-3">
              {/* Twitter */}
              <a href="#" className="hover:opacity-80 transition">
                <FaTwitter className="w-10 h-10 text-[#1DA1F2]" />
              </a>

              {/* Facebook */}
              <a href="#" className="hover:opacity-80 transition">
                <FaFacebookF className="w-10 h-10 text-[#1877F2]" />
              </a>

              {/* LinkedIn */}
              <a href="#" className="hover:opacity-80 transition">
                <FaLinkedinIn className="w-10 h-10 text-[#0A66C2]" />
              </a>

              {/* Youtube */}
              <a href="#" className="hover:opacity-80 transition">
                <FaYoutube className="w-10 h-10 text-[#FF0000]" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white text-black rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get in <span className="text-orange-500">touch</span>
          </h2>
          <p className="text-black text-sm sm:text-base text-center mb-6 font-bold">
            We are always ready to help. There are many ways to contact us. <br /> You may drop us a line, give us a call or send an email.
          </p>
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border-b px-2 py-2 focus:outline-none focus:ring-0 focus:border-orange-400 placeholder:text-gray-500"
            />
            
            {/* Country code selector and phone number input */}
            <div className="flex items-center space-x-2 border rounded-lg px-2">
              <ReactFlagsSelect
                selected={selectedCountry}
                onSelect={(code) => setSelectedCountry(code)}
                searchable
                className="w-auto h-auto flex-shrink-0"
                // Custom styles to integrate with Tailwind
                customLabels={{ 'IN': { primary: 'India', secondary: '+91' } }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Contact number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 outline-none py-2 focus:outline-none focus:ring-0 placeholder:text-gray-500"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-b px-2 py-2 focus:outline-none focus:ring-0 focus:border-orange-400 placeholder:text-gray-500"
            />
            <textarea
              name="message"
              placeholder="Let's talk about your idea"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border-b px-2 py-2 focus:outline-none focus:ring-0 focus:border-orange-400 placeholder:text-gray-500"
            ></textarea>

            {/* Drag and Drop File Input */}
            <div
              className={`w-full border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer
                ${isDragging ? 'border-orange-500 bg-gray-100' : 'border-gray-300'}`}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById('file-input').click()}
            >
              {formData.file ? (
                <p className="text-gray-800 font-medium">{formData.file.name}</p>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.707-8.293a1 1 0 00-1.414 0l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L5.414 13H11a1 1 0 100-2H5.414l1.293-1.293a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600 mt-2">Upload additional file</p>
                </>
              )}
              <input
                id="file-input"
                type="file"
                name="file"
                onChange={handleChange}
                className="hidden"
              />
            </div>
            
            {/* Recaptcha and Submit Button */}
            <div className="my-4 overflow-hidden flex justify-center">
              <div className="max-w-[304px] w-full">
                <div className="transform scale-[0.85] origin-top-left sm:transform-none">
                  <ReCAPTCHA
                    sitekey="6LdzJMcrAAAAACABV3lu9c3GfnoGLBe0gJEChPvn"
                    onChange={handleRecaptchaChange}
                  />
                </div>
              </div>
            </div>
            
            <Button text='SUBMIT' className='rounded-xl w-full'/>
          </form>
        </div>
      </div>
      <MessageModal message={modalMessage} onClose={handleCloseModal} />
    </div>
  );
}