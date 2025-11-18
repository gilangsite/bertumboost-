export default function CaraBantuSection() {
  const promises = [
    {
      icon: "1",
      title: "Triage & Empathy di Sentuhan Pertama",
      desc: "Konsultasi AI yang empatik dan non-klinis, memberi validasi dan micro-action."
    },
    {
      icon: "2",
      title: "Rangkaian Program yang Praktis",
      desc: "Dari konsultasi cepat, cohort online 8 minggu, sampai flagship retreat 3 hari."
    },
    {
      icon: "3",
      title: "Komunitas yang Aman",
      desc: "Peer support, buddy systems, dan opsi rujukan ke klinisi bila diperlukan."
    }
  ];

  return (
    <section className="py-24 bg-bb-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-bb-secondary mb-4">
            Cara Bertumboost Membantu
          </h2>
          <p className="text-lg text-bb-secondary text-opacity-70">
            Tiga pilar yang memandu setiap langkah kamu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-3xl border border-bb-secondary border-opacity-10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Number indicator - minimal */}
              <div className="w-12 h-12 rounded-full bg-bb-secondary text-white mb-6 flex items-center justify-center text-xl font-bold">
                {promise.icon}
              </div>

              <h3 className="text-xl font-bold text-bb-secondary mb-4 leading-snug">
                {promise.title}
              </h3>
              <p className="text-bb-secondary text-opacity-80 leading-relaxed">
                {promise.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
