import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Form from "./Form";
import Prof from "./Prof";
import Txt from "./Txt";
import Homepage from "./Homepage";
import Ctr from "./Ctr";
import Ctrb from "./Ctrb";
import Otv from "./Otv";
import Basket from "./Basket";
import Zakp from "./Zakp";
import Dbonuscart from "./Dbonuscart";
import Bonuscarts from "./Bonuscarts";
import Samv from "./Samv";
import Vvzal from "./Vvzal";
import Liker from "./Liker";
import Dbankcart from "./Dbankcart";
import Bonuscart from "./Bonuscart";
import Carts from "./Carts";
import Stravtor from "./Stravtor";
import Dostuporg from "./Dostuporg";
import Dannorg from "./Dannorg";
import Filials from "./Filials";
import Dobavfil from "./Dobavfil";
import Registrsot from "./Registrsot";
import Danvlad from "./Danvlad";
import Menu from "./Menu";
import Opisblud from "./Opisblud";
import Dobavblud from "./Dobavblud";
import Dostyp from "./Dostyp";
import Glavnaia from "./Glavnaia";
import Statistic from "./Statistic";
import Detzak from "./Detzak";
import Strazak from "./Strazak";
import Historyzak from "./Historyzak";
import Historyzac from "./Historyzac";
import Arxivzak from "./Arxivzak";
import Stoplist from "./Stoplist";
import Regimrab from "./Regimrab";
import Texpod from "./Texpod";
import Glavnastr from "./Glavnastr";
import Otvetotz from "./Otvetotz";

function App() {
  return (
    <div className="App">
            <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Prof" element={<Prof />} />
          <Route path="/Txt" element={<Txt />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Ctr" element={<Ctr />} />
          <Route path="/Ctrb" element={<Ctrb />} />
          <Route path="/Otv" element={<Otv />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="/Zakp" element={<Zakp />} />
          <Route path="/Dbonuscart" element={<Dbonuscart />} />
          <Route path="/Donuscarts" element={<Bonuscarts/>} />
          <Route path="/Samv" element={<Samv />} />
          <Route path="/Vvzal" element={<Vvzal />} />
          <Route path="/Liker" element={<Liker />} />
          <Route path="/Dbankcart" element={<Dbankcart />} />
          <Route path="/Bonuscart" element={<Bonuscart />} />
          <Route path="/Carts" element={<Carts />} />
          <Route path="/Stravtor" element={<Stravtor />} />
          <Route path="/Bonuscarts" element={<Bonuscarts />} />
          <Route path="/Dostuporg" element={<Dostuporg/>} />
          <Route path="/Glavnastr" element={<Glavnastr/>} />
          <Route path="/Dannorg" element={<Dannorg />} />
          <Route path="/Filials" element={<Filials />} />
          <Route path="/Dobavfil" element={<Dobavfil />} />
          <Route path="/Registrsot" element={<Registrsot />} />
          <Route path="/Danvlad" element={<Danvlad />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Opisblud" element={<Opisblud />} />
          <Route path="/Dobavblud" element={<Dobavblud />} />
          <Route path="/Dostyp" element={<Dostyp />} />
          <Route path="/Glavnaia" element={<Glavnaia />} />
          <Route path="/Statistic" element={<Statistic />} />
          <Route path="/Detzak" element={<Detzak />} />
          <Route path="/Otvetotz" element={<Otvetotz />} />
          <Route path="/Strazak" element={<Strazak />} />
          <Route path="/Historyzak" element={<Historyzak />} />
          <Route path="/Historyzac" element={<Historyzac />} />
          <Route path="/Arxivzak" element={<Arxivzak />} />
          <Route path="/Stoplist" element={<Stoplist />} />
          <Route path="/Regimrab" element={<Regimrab />} />
          <Route path="/Texpod" element={<Texpod />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;