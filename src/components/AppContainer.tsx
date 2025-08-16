import * as React from 'react'
import Hero from '../sections/Hero';
import TestimonialsSection from '../sections/TestimonialsSection';
import ContactSection from '../sections/ContactSection';
import BlogSection from '../sections/BlogSection';
import NavBar from './NavBar';
import Footer from '../sections/Footer';
import AppShowcase from '../sections/ShowcaseSection';
import LogoShowcase from '../sections/LogoSection';
import FeatureCards from '../sections/FeatureCards';
import Experience from '../sections/ExperienceSection';
import TechStack from '../sections/TechStack';

const AppContainer = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <AppShowcase />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default AppContainer;