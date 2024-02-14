import Accordion from "./components/Accordion";
import "./App.css";
import womanOnlineDesktop from "/images/illustration-woman-online-desktop.svg";
import womanOnlineMobile from "/images/illustration-woman-online-mobile.svg";
import box from "/images/illustration-box-desktop.svg";

const App = () => {
  return (
    <main className="app">
      <img className="app__box" src={box} alt="box with a @ sign" />
      <div className="app__image">
        <img
          className="app__image--mobile"
          src={womanOnlineMobile}
          alt="woman browsing the web online illustration"
        />

        <img
          className="app__image--desktop"
          src={womanOnlineDesktop}
          alt="woman browsing the web online illustration"
        />
      </div>
      <div className="app__accordion">
        <Accordion />
      </div>
    </main>
  );
};
export default App;
