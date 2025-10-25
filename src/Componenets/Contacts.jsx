import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="pt-40 px-8 md:px-20">
      <p className="text-sm text-center text-gray-500 mb-2">CONTACT</p>
      <h1 className="text-4xl font-semibold mb-6 text-center">Get In Touch</h1>
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <div className="text-gray-700 mb-4">
            I’m open to freelance projects or full-time opportunities. Feel free
            to reach out!
          </div>
          <div className="mb-2 flex items-center gap-2">
            <div>
              <MdOutlineMail />
            </div>
            eishatahmedtamim70@gmail.com
          </div>
          <div className="mb-2 flex items-center gap-2">
            <div>
              <FaWhatsapp />
            </div>
            +8801723235799
          </div>
          <div className="mb-2 flex  items-center gap-2">
            <div>
              <IoLocationOutline />
            </div>
            Rajshahi, Bangladesh
          </div>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700"
          />
          <button
            type="submit"
            className="bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
