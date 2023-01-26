import React from 'react'
import { Navbar, CTA, Brand, Feature, Article } from './components'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
const App = () => {
  return (
    <div className='App  color__danger'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App