import "./App.css";
import LeftbodyHead from "./components/leftbodyHead/leftbodyHead";
import Leftbodyimgs from "./components/leftbodyimgs/leftbodyimgs";
import RightBody from "./components/rightBody/rightBody";
import RightBodyFooter from "./components/rightBody/rightBodyFooter";
import About from "./components/About/About";
import Wait from "./components/WaitPeriod/Wait";
import HouseInfo from "./components/HouseInfo/HouseInfo";
import Support from "./components/Support/Support";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="home">
        <div className="left">
          <LeftbodyHead />
          <Leftbodyimgs />
        </div>

        <div className="right">
          <RightBody />
          <RightBodyFooter />
        </div>
      </div>

      <About />
      <Wait />
      <HouseInfo />
      <Support />

      <Footer />
    </div>
  );
}

export default App;
