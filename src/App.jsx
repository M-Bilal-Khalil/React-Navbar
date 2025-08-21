import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import "./App.css"


function App() {
  const [currentPage, setCurrentPage] = useState ("home");

  return (
    <>
    <Header setCurrentPage={setCurrentPage} />
    <div className="app-content">
    {currentPage === "home" && <Home />}
    {currentPage === "services" && <Services />}
    {currentPage === "contact" && <Contact />}
    {currentPage === "about" && <About />}
    </div>
    </>
  )

}

export default App;
