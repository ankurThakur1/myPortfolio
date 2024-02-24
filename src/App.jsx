import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <div className="App">
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  )
}

export default App;