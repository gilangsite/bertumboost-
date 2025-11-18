export default function SocialProofSection() {
  const testimonials = [
    {
      quote: "Dalam 30 hari, aku punya action plan yang jelas dan buddy check-in setiap minggu.",
      name: "Alya, 20",
      role: "Mahasiswa Kedokteran"
    },
    {
      quote: "Cohort 8 minggu jadi ruang praktek yang aman. Aku dapat mentor dan networking lokal.",
      name: "Nadia, 23",
      role: "Fresh Graduate, Remote Worker"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-bb-secondary mb-16">
          Mereka Mulai dari Langkah Kecil
        </h2>

        {/* Testimonials - minimal & clean */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl"
            >
              <p className="text-lg text-bb-secondary text-opacity-90 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-bb-secondary">{testimonial.name}</p>
                <p className="text-sm text-bb-secondary text-opacity-60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - sesuai closing narrative */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl font-bold text-bb-secondary">
            Mulai dari satu kebiasaan kecil
          </h3>
          <p className="text-lg text-bb-secondary text-opacity-70 leading-relaxed">
            Bertumboost bukan janji shortcut — kita adalah tempat pertama yang aman untuk mulai.
            Ambil satu langkah kecil: coba konsultasi AI tiga menit kami.
          </p>
          <button className="btn-primary px-12 py-5 text-lg mt-4">
            Coba Konsultasi AI — 3 menit
          </button>
        </div>
      </div>
    </section>
  );
}
