import { useState } from 'react';
import './App.css';
import Home from "./Componants/Home";
import Footer from "./Componants/Footer"
import Home2 from "./Componants/Home2";
import Navbar from "./Componants/Navbar";


function App() {
  const [count, setCount] = useState(0); // Can be removed if unused

  return (
    <div className="app">
      <Navbar/>
      <Home />
   
      <Home2/>
      <Footer/>
    </div>
  );
}

export default App;