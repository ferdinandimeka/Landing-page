import './App.css';
import React, { useEffect, useState } from 'react';
import {Features} from './components/Features';
import Header from './components/Header';
import { Navigation } from './components/Navigation';
import Json from './data/data.json'
import Products from './components/Products';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import SmoothScroll from "smooth-scroll"
import './App.css'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});

const App = () => {

  const [pageData, setPageData] = useState({})
  
  useEffect(() => {
    setPageData(Json)
  },[])

  return (
    <div className="App">
      <main>
        <Navigation />
        <Header />
        <Features data={pageData.Features} />
        <Products data={pageData.Products} />
        <Services data={pageData.Services} />
        <About data={pageData.About} />
        <Contact data={pageData.Contact} />
      </main>
    </div>
  );
}

export default App;
