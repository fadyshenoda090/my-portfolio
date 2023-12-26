import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section><Parallax type="services"/></section>
    <section id="Services"><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact"><Contact/></section>
    </>
  )
}

export default App;
