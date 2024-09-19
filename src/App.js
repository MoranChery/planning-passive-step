import logo from './money-graph-with-up-arrow.png';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import MainCalculator from "./components/MainCalculator";
import './cssFiles/App.css';
import AboutMe from './components/AboutMe.js';


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
              <NavLink className='nav-link' to="/about">השקעה פסיבית VS. דירה להשקעה</NavLink>
            </div>
          </div>
          <p> תכנון הצעד הפסיבי </p>
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <div class="sidenav">
          <AboutMe></AboutMe>
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={<MainCalculator />}
          />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
