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
import Daibetes from './Componants/HealthPackages/Daibetes';
import Allergy from './Componants/HealthPackages/Allergy';
import Quality from './Componants/NavComponents/Quality';
import ThyroidTests from './Componants/HealthPackages/ThyroidTests';
import HormoneTests from './Componants/HealthPackages/HormoneTests';
import Cancer from './Componants/HealthPackages/Cancer';
import Package1 from './Componants/TopPackages/Package1';
import Package2 from './Componants/TopPackages/Package2';
import AddMemberForm from './Componants/TopPackages/AddMemberForm';
import Upload from "./Componants/Upload";
import HeroIntro from "./Componants/HeroIntro";
import SaveMember from "./Componants/SaveMember";




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
          <Route path="/daibetes" element={<Daibetes/>}/>
          <Route path="/Thyroide" element={<ThyroidTests/>}/>
          <Route path="/Allergy" element={<Allergy/>}/>
          <Route path="/Hormone" element={<HormoneTests/>}/>
          <Route path="/Cancer" element={<Cancer/>}/>
          <Route path="/Package1" element={<Package1/>}/>
          <Route path="/Package2" element={<Package2/>}/>
          <Route path="/AddMemberForm" element={<AddMemberForm/>}/>
          <Route path="/Upload" element={<Upload/>}/>
          <Route path="/HeroIntro" element={<HeroIntro/>}/>
          <Route path="/SaveMember" element={<SaveMember/>}/>




        </Routes>


        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
