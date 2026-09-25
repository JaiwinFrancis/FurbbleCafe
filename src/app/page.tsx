'use client';

import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandIntro from '@/components/BrandIntro';
import CravingCategories from '@/components/CravingCategories';
import SignatureProducts from '@/components/SignatureProducts';
import Menu from '@/components/Menu';
import FurbbleWorld from '@/components/FurbbleWorld';
import VibeGallery from '@/components/VibeGallery';
import FurbbleEffect from '@/components/FurbbleEffect';
import Crowd from '@/components/Crowd';
import InstagramWall from '@/components/InstagramWall';
import Specials from '@/components/Specials';
import Events from '@/components/Events';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <CravingCategories />
        <SignatureProducts />
        <Menu />
        <FurbbleWorld />
        <VibeGallery />
        <FurbbleEffect />
        <Crowd />
        <InstagramWall />
        <Specials />
        <Events />
        <Location />

      </main>
      <Footer />
    </>
  );
}
