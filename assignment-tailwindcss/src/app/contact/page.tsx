"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-16">
      <div className="w-full max-w-5xl px-4">
        <div className="text-center mb-12">
          <h6 className="text-teal-600 uppercase font-bold tracking-wider mb-4">
            Contact
          </h6>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
            Contact For Any Query
          </h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Feel free to drop us a message, and
            we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control p-4 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control p-4 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control p-4 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="mb-6">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control p-4 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    rows={5}
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-teal-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
