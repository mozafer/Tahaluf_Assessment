import "./App.css";
import { Card } from "./components/Card";
import OrderBy from "./components/OrderBy";
import { useEffect, useState } from "react";
import UnivList from "./components/UnivList";
import { Outlet } from "react-router-dom";
import SearchTextbox from "./components/SearchTextbox";

function App() {
  


  return (
    <>
    
    <div className="card-container1">
    
    <div className="card" >
<Outlet />  
</div>

    </div>
    </>
  );
}

export default App;
