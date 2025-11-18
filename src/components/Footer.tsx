export default function Footer() {
  return (
    <footer className="bg-bb-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-[#0e0e0e] font-bold text-2xl mb-4">Bertumboost</h3>
            <p className="text-[#0e0e0e] leading-relaxed max-w-md">
              Tempat pertama yang aman untuk mulai. Konsultasi AI singkat & privat
              untuk bantu kamu mulai berubah dengan kebiasaan kecil yang konsisten.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#0e0e0e] font-semibold mb-4">Program</h4>
            <ul className="space-y-2 text-[#0e0e0e]">
              <li><a href="#" className="hover:text-white transition-colors">Konsultasi AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Online Cohort</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Boost Retreat</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#0e0e0e] font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-[#0e0e0e]">
              <li>info@bertumboost.com</li>
              <li>+62 123 4567 890</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white border-opacity-10 pt-8 text-center text-[#0e0e0e] text-sm">
          <p>&copy; 2025 Bertumboost. Aman, privat, dan tanpa judgement.</p>
        </div>
      </div>
    </footer>
  );
}
