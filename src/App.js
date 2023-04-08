import React from 'react'

import {About , Header, Footer,Skills,Work, Contact} from './container'
import {Navbar} from './components'
import './App.scss'
const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <Work />
        <About />
        <Skills />
        <Contact/>
        <Footer />

        
    </div>
  )
}

export default App