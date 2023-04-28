import React from 'react';
import NavBar from '../ReUsable/NavBar';
import Footer from '../ReUsable/Footer';

const Contact = () => {
  return (
    <div>
    <NavBar />
    <div className='p-10 mt-24'>
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-6 mb-6 lg:mb-0">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-700 mb-6">If you have any questions or feedback, please feel free to get in touch with us using the form below. We'll get back to you as soon as possible.</p>
          <form className="max-w-lg">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email address" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Enter your message"></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-sky-600 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-2">Get in touch</h1>
          <p className="text-gray-700 mb-6">We are always looking for volunteers and donations to help support our mission of improving rural health. If you would like to get involved, please fill out the form or contact us directly.</p>
          <p className="text-gray-700"><strong>Address:</strong> Ubungo, Dar Es Salaam</p>
          <p className="text-gray-700"><strong>Email:</strong> info@aid4ruralhealth.org</p>
          <p className="text-gray-700"><strong>Phone:</strong> (+255) 774-665175</p>
          <p className="text-gray-700"><strong>Follow us:</strong> <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>, <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>, <a href="#" className="text-blue-500 hover:text-blue-700">Instagram</a></p>
        </div>
      </div>
    </div>
    </div>

    <Footer />
    </div>
  )}

  export default Contact;