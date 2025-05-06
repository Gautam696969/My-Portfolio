import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-950 py-20 px-6 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          <span className="text-indigo-500">Contact</span> Me
        </h2>
        <p className="text-gray-400 mb-8">
          Want to work together or just say hi? Fill out the form below — I’ll get back to you soon.
        </p>

        <form
          action="https://formspree.io/f/your-form-id" // Replace with real ID
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-5 py-3 bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:border-indigo-500 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-5 py-3 bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:border-indigo-500 text-white"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-5 py-3 bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:border-indigo-500 text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
