
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[75vh] flex flex-col justify-center px-6 md:px-16 py-20 bg-white"
    >
      <p className="text-lime-600 font-semibold mb-4">
        CREATIVE DESIGN AGENCY
      </p>

      <h1 className="text-5xl md:text-7xl font-bold text-black max-w-4xl leading-tight">
        Bringing Ideas
        <span className="text-lime-500"> To Life.</span>
      </h1>

      <p className="text-gray-600 text-lg mt-6 max-w-xl">
        We build meaningful digital experiences through
        branding, creative design and modern web development.
      </p>

      <a
        href="#services"
        className="bg-black text-white w-fit px-7 py-4 rounded-full mt-8 hover:bg-lime-600 transition"
      >
        Explore Our Services
      </a>
    </section>
  );
}
