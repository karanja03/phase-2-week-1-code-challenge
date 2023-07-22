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
    const [transactions, setTransactions] = useState([]); 
    const handleDropDown=(e)=>{
        setSelectCategory(e.target.value)
    }
     
    const handleSearch=(category)=>{

        if (category.trim() === "") {
            setSelectCategory("All");
            setTransactions(transactions);
          } else {
      //   const filteredTransactions =
      // category === "" ? transactions : transactions.filter((transaction) => transaction.category === category.trim());
      setSelectCategory(category.trim())
    // setTransactions(filteredTransactions);
  };
}
        
        
       
    
    return(
         <div className="wholeapp">
            <div className="bgimage"></div>
           
        <NavBar navBarElements={navbars}/>
        <div className="headingdiv">
        <h1 className="mainheading">DOLLAR DETECTIVE</h1>
        <h2 className="nextheading">Unlock Your Financial Journey: See Your Money in Motion</h2> 
        </div>
        <SearchForm  handleSearch={handleSearch}/>
        <SortForm
        categories={categories}
        selectedCategory={selectCategory}
        onChange={handleDropDown}
        />

        <TransactionList selectedCategory={selectCategory} transactions={transactions}/>
        
        </div>
    )
    
}

export default App;
