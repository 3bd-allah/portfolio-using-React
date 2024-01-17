import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ChakraProvider, useStatStyles } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";
import ProjectSection from "./components/ProjectsComponent/ProjectSection";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import ContactMeWithFormikLib from "./components/ContactMeWithFormikLib";
import ContactMeWithChakra_Formika from "./components/ContactMeWithChakra_Formika";
import Alert from "./components/Alert";
import { AlertProvider } from "./context/alertContext";
import ButtonUp from "./utilities/ButtonUp";
import ScrollUpButton from "./utilities/ScrollUpButton";
import { useEffect,useRef,useState  } from "react";

function App() {

  const [navbarDown, setNavbarDown] = useState(false);
  const prevStatus = useRef(null)

  useEffect(()=>{
 

  },[])

  return (
    <div className="App">
      <ChakraProvider>
        <AlertProvider>
          <header>
            <Navbar />
          </header>
          <main>
            <LandingSection />
            <ProjectSection />
            {/* <ContactMe /> */}
            {/* <ContactMeWithFormikLib /> */}
            <ContactMeWithChakra_Formika />
            <Alert />
            <ScrollUpButton />
          </main>
          <footer>
            <Footer />
          </footer>
        </AlertProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
