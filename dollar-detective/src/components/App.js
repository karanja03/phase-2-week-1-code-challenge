import React,{useState} from "react";
import NavBar from "./NavBar";
import navbars from "../data/navbars";
import "./App.css";
import SearchForm from "./SearchForm";
import categories from "../data/categories";
import SortForm from "./SortForm";
import TransactionList from "./TransactionList";



function App(){
    //handling the drop down change
    const[selectCategory, setSelectCategory]=useState("All");
    const handleDropDown=(e)=>{
        setSelectCategory(e.target.value)
    }
    return(
         <div className="wholeapp">
            <div className="bgimage"></div>
           
        <NavBar navBarElements={navbars}/>
        <div className="headingdiv">
        <h1 className="mainheading">DOLLAR DETECTIVE</h1>
        <h2 className="nextheading">Unlock Your Financial Journey: See Your Money in Motion</h2> 
        </div>
        <SearchForm/>
        <SortForm
        categories={categories}
        selectedCategory={selectCategory}
        onChange={handleDropDown}
        />

        <TransactionList/>
        
        </div>
    )
    
}
export default App;
