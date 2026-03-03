// Hero.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
   <section className="flex h-[75vh] min-h-[600px] w-[calc(99vw-1px)] items-center justify-center overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-black">
    <Image
        src="/sa.jpg"
        alt="Ultra-modern AirBuds"
        fill
        className="object-cover opacity-50"
        priority
      />

      {/* subtle animated radial highlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />

      <div className="z-10 flex flex-col items-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Hear the Future
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 max-w-lg text-lg text-neutral-300 sm:mt-6"
        >
          Deep bass, crystal highs, 48-hour battery — all wrapped in minimal design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 font-semibold text-white shadow-lg shadow-purple-500/30 transition-transform hover:scale-105">
            Shop Now
          </button>
          <button className="rounded-full border border-neutral-700 bg-neutral-800/50 px-8 py-3 font-semibold text-neutral-200 backdrop-blur-sm transition hover:bg-neutral-700/70">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}