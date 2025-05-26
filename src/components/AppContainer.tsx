import React from 'react'
import Hero from '../sections/Hero';
import AppShowcase from '../sections/ShowcaseSection';
import NavBar from './NavBar';

const AppContainer = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <AppShowcase />
    </div>
  )
}

export default AppContainer;