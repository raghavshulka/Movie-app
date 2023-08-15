import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Recently_Added from "./Components/Recently_Added";
import My_List from "./Components/My_List";
import Tv_Shows from "./Components/Tv_Shows";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Tv_Shows" element={<Tv_Shows />} />
          <Route path="/My_List" element={<My_List />} />
          <Route path="/Recently_Added" element={<Recently_Added />} />
        </Routes>
       <Footer/>
      </Router>
    </div>
  );
};

export default App;
