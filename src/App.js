import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HighlightSection from "./components/HighlightSection";
import TestimonialSection from "./components/TestimonialSection";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import ReserveATableSection from './components/ReserveATableSection';
import ContactMeSection from './components/ContactMeSection';

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
      <main>
        <Header></Header> {/* Includes Navigation */}
        <HeroSection/>
        <HighlightSection/>
        <TestimonialSection/>
        <AboutSection/>
        <ReserveATableSection/>
        <ContactMeSection></ContactMeSection>
        <FooterSection/>
        <Alert/>
      </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
