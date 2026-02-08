import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Nasıl Çalışır", href: "/nasil-calisir" },
      { label: "Mahalleler", href: "/mahalleler" },
      { label: "SSS", href: "/sss" },
    ],
    legal: [
      { label: "Gizlilik Politikası", href: "/gizlilik" },
      { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
      { label: "Çerez Politikası", href: "/cerez-politikasi" },
      { label: "KVKK", href: "/kvkk" },
    ],
    contact: [
      { icon: Phone, label: "(224) 441 17 00", href: "tel:+902244411700" },
      {
        icon: Mail,
        label: "bilgi@nilufer.bel.tr",
        href: "mailto:bilgi@nilufer.bel.tr",
      },
      { icon: MapPin, label: "Nilüfer Belediyesi, Bursa", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-linear-to-r from-blue-500 to-purple-500 text-white p-2 rounded-lg">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="font-bold text-xl text-white">
                NilüferKomite
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Katılımcı demokrasi platformu. Mahallelerimizin geleceğini
              birlikte şekillendiriyoruz.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full bg-gray-800 hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Yasal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">İletişim</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-start space-x-2 text-sm hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <contact.icon className="h-5 w-5 mt-0.5 shrink-0 group-hover:text-blue-400" />
                    <span>{contact.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              © {currentYear} Nilüfer Belediyesi. Tüm hakları saklıdır.
            </p>
            <p className="text-gray-400">
              ❤️ ile <span className="text-blue-400">katılımcı demokrasi</span>{" "}
              için tasarlandı
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
