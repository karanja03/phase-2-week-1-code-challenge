import React from "react";

function NavBar({navBarElements}){
    return(
    
    <nav className="navbar">
     {navBarElements.map((navBarElement)=> (
        <li key={navBarElement}>{navBarElement}</li>
     ))}
    </nav>
    );
    

}

export default NavBar