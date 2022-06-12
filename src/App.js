import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarsList from "./components/Cars/CarsList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <CarsList />
      {/* <Footer/> */}
    </BrowserRouter>
   
  );
}

export default App;
