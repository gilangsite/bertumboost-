export default function MasalahSection() {
  const problems = [
    {
      name: "Alya, 20",
      title: "The Overachiever",
      desc: "Lulus cum laude tapi setiap malam memikirkan masa depan dan takut salah pilih spesialisasi."
    },
    {
      name: "Nadia, 23",
      title: "The Drift",
      desc: "Kerja remote, sering merasa imposter. Tiap meeting terasa berat."
    },
    {
      name: "Raka, 19",
      title: "The Quiet One",
      desc: "Sering kena bullying di kampus dan takut cerita ke siapa-siapa."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Story-driven headline */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-bb-secondary mb-4">
            Kamu nggak sendirian
          </h2>
          <p className="text-lg text-bb-secondary text-opacity-70 leading-relaxed">
            Banyak Gen-Z tampak 'baik-baik saja' tapi merasa hancur di dalam.
            Ini cerita mereka yang mulai dari langkah kecil.
          </p>
        </div>

        {/* Persona cards - minimal & clean */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((person, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Minimal icon - sesuai branding "biji/komma" concept */}
              <div className="w-12 h-12 rounded-full bg-bb-primary mb-6 flex items-center justify-center">
                <span className="text-2xl text-bb-secondary">●</span>
              </div>

              <p className="text-sm text-bb-secondary text-opacity-60 mb-2">{person.name}</p>
              <h3 className="text-xl font-bold text-bb-secondary mb-4">
                {person.title}
              </h3>
              <p className="text-bb-secondary text-opacity-80 leading-relaxed">
                {person.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
