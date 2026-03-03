// components/Footer.tsx
import Link from 'next/link';

export default function Footer(){
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'AirBuds Pro', href: '/' },
      { label: 'AirBuds Lite', href: '/' },
      { label: 'AirBuds Sport', href: '/' },
      { label: 'Compare', href: '/' },
    ],
    Support: [
      { label: 'Help Center', href: '/' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Warranty', href: '/' },
      { label: 'Shipping', href: '/' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/' },
      { label: 'Terms of Service', href: '/' },
      { label: 'Cookies', href: '/' },
    ],
  };

  return (
    <footer className="w-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-neutral-200">
      <div className="mx-auto max-w-screen-xl px-6 py-12">
        {/* top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* brand */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-2">SoundPulse</h2>
            <p className="text-sm text-neutral-400">
              Hear the future, feel the beat.
            </p>
          </div>

          {/* link groups */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-3">{title}</h3>
              <ul className="space-y-2 text-sm">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-purple-400 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div className="border-t border-neutral-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-neutral-500">
            © {currentYear} SoundPulse Inc. All rights reserved.
          </p>

          {/* social icons (optional) */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['Twitter', 'Instagram', 'YouTube'].map((s) => (
              <a
                key={s}
                href="#"
                className="text-neutral-500 hover:text-purple-400 transition"
                aria-label={s}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};