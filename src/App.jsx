import Herosection from './components/Herosection.jsx';
import Project from './components/ProjectsSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import NavigationBar from './components/NavigationBar.jsx'

import './App.css'

function App() {


  return (
    
      <div>
        <Herosection/>
        <Project/>
        <SkillsSection/>
        <ContactSection/>
        <Footer/>
        <NavigationBar/>
      </div>
 
    
  );
}

export default App
