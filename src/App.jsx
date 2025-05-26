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
import Diabetes from './Componants/HealthPackages/Diabetes';
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
import Create from "./Componants/Create";
import Wellness1 from "./Componants/Wellness1";
import Wellness2 from "./Componants/Wellness2";
import Wellness3 from "./Componants/Wellness3";
import Queries from './Componants/FooterPages/Queries';
import CollectionCentres from './Componants/FooterPages/CollectionCentres';
import StatutoryCompliance from './Componants/FooterPages/StatutoryCompliance';
import Careers from './Componants/FooterPages/Careers';
import ESGPractices from './Componants/FooterPages/ESGPractices';
import Faq from './Componants/FooterPages/Faq';
import MenHealthCheckup from "./Componants/MenHealthCheckup";
import AnnualHealthPackage from "./Componants/AnnualHealthPackage";





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
          <Route path="/diabetes" element={<Diabetes/>}/>
          <Route path="/Tahyroide" element={<ThyroidTests/>}/>
          
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
          <Route path="/Create" element={<Create/>} />
          <Route path="/wellness1" element={<Wellness1/>} />
          <Route path="/wellness2" element={<Wellness2/>} />
          <Route path="/wellness3" element={<Wellness3/>} />
          <Route path="/Queries" element={<Queries/>} />
           <Route path="/ESGPractices" element={<ESGPractices/>} />
          <Route path="/CollectionCentres" element={<CollectionCentres/>} />
          <Route path="/StatutoryCompliance" element={<StatutoryCompliance/>} />
          <Route path="/Careers" element={<Careers/>} />
          <Route path="/Faq" element={<Faq/>} />
          <Route path="/MenHealthCheckup" element={<MenHealthCheckup/>} />
         <Route path="/AnnualHealthPackage" element={<AnnualHealthPackage/>} />





        </Routes>


        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
