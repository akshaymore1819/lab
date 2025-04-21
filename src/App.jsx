import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Componants/Navbar";
import Login from "./Componants/Login";
import Home from "./Componants/Home";
import Home2 from "./Componants/Home2";
import Footer from "./Componants/Footer";
import LabLocations from "./Componants/LobLocations";
import AboutUs from './Componants/NavComponents/AboutUs';
import Coverage from './Componants/NavComponents/Coverage';
import GeneCliffe from './Componants/NavComponents/GeneCliffe';
import HealthBlog from './Componants/NavComponents/HealthBlog';
import HelpSupport from './Componants/NavComponents/HelpSupport';
import Partnership from './Componants/NavComponents/Partnership';
import Quality from './Componants/NavComponents/Quality';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lablocations" element={<LabLocations />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/coverage" element={<Coverage />} />
          <Route path="/gencliffe" element={<GeneCliffe />} />
          <Route path="/healthblog" element={<HealthBlog />} />
          <Route path="/helpsupport" element={<HelpSupport />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/quality" element={<Quality />} />  

        </Routes>


        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
