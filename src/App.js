import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Page2 from './components/Page2';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { useState } from 'react';
import About from './components/About';
import Man1 from './components/manuscripts/Man1';
import Man2 from './components/manuscripts/Man2';
import Man3 from './components/manuscripts/Man3';
import Man4 from './components/manuscripts/Man4';
import Man5 from './components/manuscripts/Man5';
import Man6 from './components/manuscripts/Man6';
import Man7 from './components/manuscripts/Man7';
import Man8 from './components/manuscripts/Man8';
import Man9 from './components/manuscripts/Man9';
import Man10 from './components/manuscripts/Man10';
import Man11 from './components/manuscripts/Man11';
import FAQ from './components/FAQ';
import Open from './components/Open';
import Survey from './components/Survey';

function App() {
  const [search,setSearch]=useState("/");
 
   
    const [name,setName]=useState("");
    const [year,setYear]=useState("");
    const [description,setDescription]=useState("");
    const [dynNum,setDynNum]=useState(1);
    const handleChange=(e)=> {
      console.log(e.target.value);
      setSearch(e.target.value.toLowerCase());
  }
  return (
   <>
<Router>


<Routes>
  <Route path="/search"  element={<Home name={name} setName={setName} year={year} search={search} setSearch={setSearch} setYear={setYear} description={description} setDescription={setDescription} handleChange={handleChange}  dynNum={dynNum} setDynNum={setDynNum} />}></Route>
  <Route path="/page2"  element={<Page2 name={name} search={search} setSearch={setSearch} setName={setName} year={year} setYear={setYear} description={description} setDescription={setDescription} handleChange={handleChange}  dynNum={dynNum} setDynNum={setDynNum} />}></Route>
  <Route path="/about"  element={<About/>}></Route>
  <Route path="/"  element={<Open  name={name} setName={setName}  search={search} setSearch={setSearch} year={year}  setYear={setYear} description={description} setDescription={setDescription} handleChange={handleChange}  dynNum={dynNum} setDynNum={setDynNum}  />}></Route>
  <Route path="/man1"  element={<Man1/>}></Route>
  <Route path="/man2"  element={<Man2/>}></Route>
  <Route path="/man3"  element={<Man3/> }></Route>
  <Route path="/man4"  element={<Man4/> }></Route>
  <Route path="/man5"  element={<Man5/> }></Route>
  <Route path="/man6"  element={<Man6/> }></Route>
  <Route path="/man7"  element={<Man7/> }></Route>
  <Route path="/man8"  element={<Man8/> }></Route>
  <Route path="/man9"  element={<Man9/> }></Route>
  <Route path="/man10"  element={<Man10/> }></Route>
  <Route path="/man11"  element={<Man11/> }></Route>
  <Route path="/faq"  element={<FAQ/>}></Route>
  <Route path="/open"  element={<Open/>}></Route>
  <Route path="/survey"  element={<Survey/>}></Route>
  
</Routes>

</Router>


   </>
  );
}

export default App;
