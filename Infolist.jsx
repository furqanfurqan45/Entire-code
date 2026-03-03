// app/page.tsx
import Link from 'next/link';

const tiers = [
  {
    title: 'Fast Delivery',
    price: 2,
    priceSuffix: '/day',
    sub1: 'Lightning Shipping',
    sub2: 'Next-Day Arrival',
    bullet1: 'Express courier',
    bullet2: 'Track in real time',
    gradient: 'from-sky-500 via-cyan-400 to-teal-400',
  },
  {
    title: 'Premium Quality',
    price: 6,
    priceSuffix: '/month',
    sub1: 'Studio-Grade Sound',
    sub2: 'Hi-Res + ANC',
    bullet1: '40 mm titanium drivers',
    bullet2: '48 h battery / 60 h case',
    gradient: 'from-purple-500 via-pink-500 to-indigo-500',
    featured: true,
  },
  {
    title: 'Budget Buds',
    price: 9,
    priceSuffix: 'one-time',
    sub1: 'Essential Edition',
    sub2: 'Great for Students',
    bullet1: 'Balanced 12 mm drivers',
    bullet2: '30 h playtime',
    gradient: 'from-amber-400 via-orange-400 to-red-400',
  },
];

export default function AirBudsTiersPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-4">
      <div className="flex gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.title}
            className={`relative w-72 rounded-2xl shadow-xl transition-transform duration-300 hover:-translate-y-2 ${
              tier.featured ? 'scale-105 z-10' : ''
            }`}
          >
            {/* gradient background */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tier.gradient}`}
            />
            {/* glass overlay */}
            <div className="relative flex h-full flex-col rounded-2xl bg-black/20 p-6 text-white">
              {/* title */}
              <h3 className="text-xl font-bold">{tier.title}</h3>
              <span className="mt-1 h-0.5 w-4 rounded-full bg-white/60" />

              {/* big price */}
              <div className="my-4 text-center">
                <span className="text-7xl font-black text-white/25">
                  {tier.price}
                </span>
                <span className="text-sm text-white/60">{tier.priceSuffix}</span>
              </div>

              {/* sub-headlines */}
              <p className="text-sm font-semibold">{tier.sub1}</p>
              <p className="text-xs text-white/80 mb-3">{tier.sub2}</p>

              {/* bullets */}
              <ul className="text-xs space-y-1 mb-6">
                <li>• {tier.bullet1}</li>
                <li>• {tier.bullet2}</li>
              </ul>

              {/* CTA */}
              <Link
                href="/checkout"
                className="mt-auto block rounded-full bg-white/20 px-5 py-2 text-center text-sm font-bold backdrop-blur-sm hover:bg-white/30 transition"
              >
                Continue
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}