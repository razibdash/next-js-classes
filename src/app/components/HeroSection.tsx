export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
        Welcome to MyWebsite 🚀
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Build modern web applications with Next.js, TypeScript, and TailwindCSS.
      </p>
      <a
        href="/get-started"
        className="bg-white text-indigo-700 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-gray-100 transition"
      >
        Get Started
      </a>
    </section>
  );
}
