
export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <h2 className="text-2xl font-bold">
          Aura<span className="text-lime-500">.</span>
        </h2>

        <p className="text-gray-400">
          hello@aurastudio.co
        </p>

        <p className="text-gray-400">
          © 2026 Aura Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
