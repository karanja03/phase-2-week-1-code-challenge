import React from "react";
import NavBar from "./NavBar";
import navbars from "./data/navbars";

function App(){
    return(
         <div>
           
        <NavBar navBarElements={navbars}/>
        <div className="headingdiv">
        <h1 className="mainheading">DOLLAR DETECTIVE</h1>
        <h2 className="nextheading">Unlock Your Financial Journey: See Your Money in Motion</h2> 
        </div>
        </div>
    )
    
}
export default App;
