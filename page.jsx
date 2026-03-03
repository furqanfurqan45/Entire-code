'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import List from '@/components/List';
import Infolist from '@/components/Infolist';

export default function AirbidsHero() {
  return (
   <>
   <main>
    <Hero/>
    <div className="separator"></div>
    <List/>
    <div className="separator"></div>
    <Infolist/>
   </main>
   </>
  );
}