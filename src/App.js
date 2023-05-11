import React from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Form from './components/Form';
import Navbar from './components/Navbar';
import QA from './components/QA';
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp';
import About from './components/About';
import Triangle from './components/Triangle';
import Triangle2 from './components/Triangle2';

function App() {
  return (
    <div className="App">
      <Carousel/>
      <Triangle/>
      <Form/>
      <Triangle2/>
      <About/>
      <QA/>
      <Whatsapp/>
      <Footer/>
    </div>
  );
}

export default App;
