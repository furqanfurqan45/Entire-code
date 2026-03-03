// app/not-found.jsx  (Next.js 13+ App Router)
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="w-full flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-6"
      >
        <h1 className="text-7xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            404
          </span>
        </h1>
        <p className="mt-4 text-xl text-neutral-300">
          Looks like this page deoesn't exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105 transition-transform"
        >
          Back Home
        </Link>
      </motion.div>
    </main>
  );
}