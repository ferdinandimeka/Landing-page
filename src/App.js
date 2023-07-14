import './App.css';
import React, { useEffect, useState } from 'react';
import {Features} from './components/Features';
import Header from './components/Header';
import { Navigation } from './components/Navigation';
import Json from './data/data.json'
import Products from './components/Products';

const App = () => {

  const [pageData, setPageData] = useState({})
  
  useEffect(() => {
    setPageData(Json)
  },[])

  return (
    <div className="App">
      <Navigation />
      <Header />
      <Features data={pageData.Features} />
      <Products data={pageData.Products} />
    </div>
  );
}

export default App;
