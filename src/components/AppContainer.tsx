import React from 'react'
import Hero from '../sections/Hero';
import AppShowcase from '../sections/ShowcaseSection';
import NavBar from './NavBar';
import LogoShowCase from '../sections/LogoSection';
import FeatureCards from '../sections/FeatureCards';
import Experience from '../sections/ExperienceSection';
import TechStack from '../sections/TechStack';
import TestimonialsSection from '../sections/TestimonialsSection';
import ContactSection from '../sections/ContactSection';
import Footer from '../sections/Footer';

const AppContainer = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <AppShowcase />
      <LogoShowCase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default AppContainer;