
const services = [
  {
    number: "01",
    title: "Branding",
    description: "Building memorable brand identities that stand out."
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Creating beautiful and user-friendly digital experiences."
  },
  {
    number: "03",
    title: "Web Design",
    description: "Designing modern and responsive websites."
  }
];

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-16 py-24 bg-white">
      <p className="text-lime-600 font-semibold mb-3">
        WHAT WE DO
      </p>

      <h2 className="text-4xl font-bold text-black mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.number}
            className="border border-gray-200 p-8 rounded-2xl hover:border-lime-500 transition"
          >
            <p className="text-lime-600 font-bold mb-8">
              {service.number}
            </p>

            <h3 className="text-2xl font-bold mb-4">
              {service.title}
            </h3>

            <p className="text-gray-600 leading-7">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
