import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import WorldMap from "./Components/worldMap";
import FormInput from "./Components/FormInput";
import { useState } from "react";
import { useSelector } from "react-redux";
function App() {
  const darkMode = useSelector((state) => state.country.darkMode);
  return (
    <div className="App">
      <Navbar />
      <WorldMap />
      <div className="row">
        <div className="col-lg-4  offset-lg-4 col-md-6  offset-md-3 col-8 offset-2 my-5">
          <FormInput />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
