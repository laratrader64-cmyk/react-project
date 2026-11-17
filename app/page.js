// import Header from "./components/Header";
// import About from "./components/About";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Contact from "./components/Contact";
// import Services from "./components/Services";
// import Hero from "./components/Hero";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
      
      
      <h1>Welcome to my website</h1>
    </main>
  );
}
