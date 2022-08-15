import "./index.css";
import About from "./About";
import HomeHeader from "./Header";
import MainSection from "./mainSection";
import Features from "./features";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () => {
  return (
      <div className="home_container">
        <HomeHeader />
        <MainSection />
        <About />
        <Features />
        <Pricing />
        <Contact />
        <Footer />
      </div>
  );
};

export default Home;
