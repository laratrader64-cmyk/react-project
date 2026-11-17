
"use client";

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you! Your message has been received.");
    event.target.reset();
  }

  return (
    <section id="contact" className="bg-gray-50 px-6 md:px-16 py-24">
      <p className="text-lime-600 font-semibold mb-3">
        GET IN TOUCH
      </p>

      <h2 className="text-4xl font-bold mb-10">
        Let's Work Together.
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl space-y-5"
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:border-lime-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:border-lime-500"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          required
          className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:border-lime-500"
        />

        <button
          type="submit"
          className="bg-black text-white px-8 py-4 rounded-full hover:bg-lime-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
