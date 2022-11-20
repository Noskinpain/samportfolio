import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import UseLoop from "./components/UseLoop";
import BackTop from "./components/BackTop"


function App() {
  return (
    <>
      <Router>
      {/* <NavBar/> */}
    
       <Home/>
        <About/>
        <SignIn/>
        <Portfolio/>
        <Services/>
        <UseLoop/>
        <Contact/>
        
      </Router>
      <BackTop/>
    </>
  );
}

export default App;
