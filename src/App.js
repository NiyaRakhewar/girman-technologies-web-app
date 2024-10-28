// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {SearchResults} from "./pages/SearchResults.jsx";
import {Main} from "./pages/Main.jsx";
import {Home} from "./pages/Home.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />  
          <Route path="results" element={<SearchResults />} /> 
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
