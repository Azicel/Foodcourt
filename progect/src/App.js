import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import User from "./User";
import Employee from "./Employee";
import Form from "./Form";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Homepage from "./Homepage";
import Descriptionpage from "./Descriptionpage";
import Dishdescriptionpage from "./Dishdescriptionpage";
import Basket from "./Basket";
import Ofz from "./Ofz";
import Zs from "./Zs";
import Bz from "./Bz";
import Dan from "./Dan";
import Zak from "./Zak";
import Cart from "./Cart";
import Like from "./Like";
import Bn from "./Bn";
import Tx from "./Tx";
import Dcart from "./Dcart";
import Dbn from "./Dbn";
import Prof from "./Prof";




function App() {
  return (
    <div className="App">
            <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/User" element={<User />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Form4" element={<Form4 />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Form2" element={<Form2 />} />
          <Route path="/Form3" element={<Form3 />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Descriptionpage" element={<Descriptionpage />} />
          <Route path="/Dishdescriptionpage" element={<Dishdescriptionpage />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="/Ofz" element={<Ofz />} />
          <Route path="/Zs" element={<Zs />} />
          <Route path="/Bz" element={<Bz />} />
          <Route path="/Dan" element={<Dan />} />
          <Route path="/Zak" element={<Zak />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Like" element={<Like />} />
          <Route path="/Bn" element={<Bn />} />
          <Route path="/Tx" element={<Tx />} />
          <Route path="/Dcart" element={<Dcart />} />
          <Route path="/Dbn" element={<Dbn />} />
          <Route path="/Prof" element={<Prof />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

