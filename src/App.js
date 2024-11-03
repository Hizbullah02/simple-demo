import BlogIntro from "./components/BlogIntro";
import BusinessReinvent from "./components/BusinessReinvent";
import Community from "./components/Community";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import MeetCutomers from "./components/MeetCutomers";
import Navbar from "./components/Navbar";
import OurClients from "./components/OurClients";
import SiteFooterGuide from "./components/SiteFooterGuide";
import FringillaText from "./components/FringillaText";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurClients />
      <Community />
      <Experience />
      <BusinessReinvent />
      <SiteFooterGuide />
      <MeetCutomers />
      <BlogIntro />
      <FringillaText/>
      <Footer/>
    </>
  );
}

export default App;
