import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from './components/services/Service';
const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Services />
      </section>
      <div id='Projects' >
      <Portfolio  />
      </div>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
