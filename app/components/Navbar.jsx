
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-6 bg-white">
      <h1 className="text-2xl font-bold text-black">
        Aura<span className="text-lime-500">.</span>
      </h1>

      <div className="hidden md:flex gap-8 text-gray-700">
        <a href="#home" className="hover:text-lime-600">Home</a>
        <a href="#about" className="hover:text-lime-600">About</a>
        <a href="#services" className="hover:text-lime-600">Services</a>
        <a href="#contact" className="hover:text-lime-600">Contact</a>
      </div>

      <a
        href="#contact"
        className="bg-black text-white px-5 py-3 rounded-full hover:bg-lime-600 transition"
      >
        Let's Talk
      </a>
    </nav>
  );
}
