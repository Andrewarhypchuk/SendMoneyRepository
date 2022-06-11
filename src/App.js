
import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavContainer from "./components/Nav/NavContainer";
import HomeContainer from "./components/Home/HomeContainer";
import SendComponent from "./components/SendComponent/SendComponent";
const App = (props) => {
    const [currentValueToSend,setCurrentValueToSend] = useState("0.0 UAH")
  return (
  <BrowserRouter >
     <div className="app-wrapper">
     <NavContainer setValue={setCurrentValueToSend} />
     <div className='app-wrapper-content'>
     <Routes>
         <Route path="/home" element={ <HomeContainer  />}/>
         <Route path="/send" exact element={ <SendComponent />} />
    </Routes>
       </div>
    </div>
     </BrowserRouter>
  );
}
export default App;
