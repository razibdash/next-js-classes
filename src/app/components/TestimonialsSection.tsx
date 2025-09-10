const testimonials = [
  {
    name: "Sarah Johnson",
    feedback: "This platform is amazing! It helped me launch my project quickly.",
  },
  {
    name: "Michael Smith",
    feedback: "The UI is clean and modern, and the performance is unmatched.",
  },
  {
    name: "Emily Davis",
    feedback: "I love how easy it is to customize with TailwindCSS.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-6 bg-amber-500">
      <h2 className="text-3xl font-bold text-center mb-10">What People Say</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-50 rounded-2xl shadow-md border hover:shadow-xl transition"
          >
            <p className="text-gray-700 italic">“{t.feedback}”</p>
            <h4 className="mt-4 font-semibold text-indigo-600">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
