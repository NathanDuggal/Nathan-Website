import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import AboutMe from "./AboutMe.js"

// functions cannot have state
// function App() {
class App extends React.Component {
  render() {
    return (
      <BrowserRouter  basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="about" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
