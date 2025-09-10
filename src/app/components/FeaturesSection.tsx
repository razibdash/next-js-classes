const features = [
  {
    title: "⚡ Fast Performance",
    description: "Optimized with Next.js for blazing fast speed and SEO.",
  },
  {
    title: "🎨 Beautiful UI",
    description: "Styled with TailwindCSS to make your app look amazing.",
  },
  {
    title: "🛠️ Developer Friendly",
    description: "Built with TypeScript for type safety and scalability.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-6 bg-blue-500">
      <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
