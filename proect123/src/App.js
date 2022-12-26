import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import Cont from "./Cont";
import Form from "./Form";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";



const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cont" element={<Cont />} />
          <Route path="/Form4" element={<Form4 />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Form2" element={<Form2 />} />
          <Route path="/Form3" element={<Form3 />} />
         
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const styles = {
  app: {
    padding: 50,
  },
};