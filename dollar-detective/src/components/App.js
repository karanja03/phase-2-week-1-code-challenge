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
    const [sortCategory, setSortCategory] = useState("All");
    const handleDropDown=(e)=>{
      if(e&&e.target&& e.target.value){
        setSortCategory(e.target.value)
      }
    }
     
    const handleSearch=(category)=>{

        if (category === "") {
            setSelectCategory("All");
            setTransactions(transactions);
          } else {
        const filteredTransactions = transactions.filter((transaction) => transaction.category === category);
       setSelectCategory(category)
    setTransactions(filteredTransactions);
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
        selectedCategory={sortCategory}
        onChange={handleDropDown}
        />

        <TransactionList selectedCategory={selectCategory} transactions={transactions} sortCategory={sortCategory}/>
        
        </div>
    )
    
}

export default App;
