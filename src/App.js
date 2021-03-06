import { Fragment } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from './components/Footer';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Work from "./components/Work";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="app-page">
        <Footer />
        <span>
          <Hero />
          <About />
          <Portfolio />
          <Work />
        </span>
 
      
      </div>

    </Fragment>
  );
}

export default App;
