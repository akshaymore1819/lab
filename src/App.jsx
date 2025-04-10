import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Componants/Navbar";
import Login from "./Componants/Login";
import Home from "./Componants/Home";
import Home2 from "./Componants/Home2";
import Footer from "./Componants/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
