import logo from './money-graph-with-up-arrow.png';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import './cssFiles/App.css';
import AboutMe from './components/AboutMe.js';
import MainCalculator from "./components/MainCalculator";
import HouseVSPassive from "./components/HouseVSPassive";

function App() {

  return (
    <div className="app">

      <BrowserRouter>
        <header className="App-header">
          <div className='nav-links'>
            <div >
              <NavLink className='nav-link' to="/">מחשבון עיקרי</NavLink>
            </div>
            <div >
              <NavLink className='nav-link' to="/houseVSpassive">השקעה פסיבית VS. דירה להשקעה</NavLink>
            </div>
          </div>
          <p> תכנון הצעד הפסיבי </p>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="sidenav">
          <meta className='ads' name="google-adsense-account" content="ca-pub-5506831364779263"></meta>
          <AboutMe></AboutMe>
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={<MainCalculator />}
          />
          <Route
            exact
            path="/houseVSpassive"
            element={<HouseVSPassive />}
          />
        </Routes>
      </BrowserRouter>
      
    </div >
  );
}

export default App;
