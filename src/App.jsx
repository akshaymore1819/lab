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
import Quality from './Componants/NavComponents/Quality';
import ThyroidTests from './Componants/HealthPackages/ThyroidTests';
import HormoneTests from './Componants/HealthPackages/HormoneTests';
// import Cancer from './Componants/HealthPackages/Cancer';
import Package1 from './Componants/TopPackages/Package1';
import Package2 from './Componants/TopPackages/Package2';
import AddMemberForm from './Componants/TopPackages/AddMemberForm';
import Upload from "./Componants/Upload";
import HeroIntro from "./Componants/HeroIntro";
import SaveMember from "./Componants/SaveMember";
import HealthEx from './Componants/NavComponents/HealthEx';
import Full_body from './Componants/NavComponents/Full_body';
import Heart from './Componants/NavComponents/Heart';
import Fever from './Componants/NavComponents/Fever';
import Vitamin from './Componants/NavComponents/Vitamin';
import Cancer from './Componants/NavComponents/Cancer';
import Lifestyle from './Componants/NavComponents/Lifestyle';
import Pregnancy from './Componants/NavComponents/Pregnancy';
import Fertility from './Componants/NavComponents/Fertility';
import Allergy from './Componants/NavComponents/Allergy';
import STD from './Componants/NavComponents/STD';
import Combo from './Componants/NavComponents/Combo';
import Arthritis from './Componants/NavComponents/Arthritis';
import Anemia from './Componants/NavComponents/Anemia';
import Antental from './Componants/NavComponents/Antental';
import TestDetails from "./Componants/TestDetails";
import BookNow from "./Componants/BookNow";




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
          
          <Route path="/Hormone" element={<HormoneTests/>}/>
          
          <Route path="/Package1" element={<Package1/>}/>
          <Route path="/Package2" element={<Package2/>}/>
          <Route path="/AddMemberForm" element={<AddMemberForm/>}/>
          <Route path="/Upload" element={<Upload/>}/>
          <Route path="/HeroIntro" element={<HeroIntro/>}/>
          <Route path="/SaveMember" element={<SaveMember/>}/>
          <Route path="/healthex" element={<HealthEx />} />
          <Route path="/fullbody" element={<Full_body />} />
          <Route path="/heart" element={<Heart />} />
          <Route path="/fever" element={<Fever />} />
          <Route path="/vitamin" element={<Vitamin />} />
          <Route path="/cancer" element={<Cancer />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/pregnancy" element={<Pregnancy />} />
          <Route path="/fertility" element={<Fertility />} />
          <Route path="/allergy" element={<Allergy />} />
          <Route path="/std" element={<STD />} />
          <Route path="/combo" element={<Combo />} />
          <Route path="/arthritis" element={<Arthritis />} />
          <Route path="/anemia" element={<Anemia />} />
          <Route path="/antental" element={<Antental />} />
          <Route path="/test-details/:testName" element={<TestDetails />} />
          <Route path="/booknow" element={<BookNow/>} />




        </Routes>


        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
