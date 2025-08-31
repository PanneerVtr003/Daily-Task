import React, { useState, useEffect } from 'react';
import Item from './item';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';


function App() {
  const [items, setItems] = useState([]);

 
  return (
    <>
      <Header />
      <Item items={items} setItems={setItems} />
      <Body items={items} setItems={setItems} />
      <Footer />
    </>
  );
}

export default App;
