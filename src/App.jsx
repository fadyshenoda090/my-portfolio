import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="services"><Parallax type="services"/></section>
    <section>Services</section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section id="Contact">Contact</section>
    </>
  )
}

export default App;
