import React,{useState, useEffect} from "react";
import Transaction from "./Transaction";
import NewTransaction from "./NewTransaction";

function TransactionList({selectedCategory}){
    const[transactions, setTransactions]=useState([])
    const [sortedTransactions, setSortedTransactions] = useState([])
    
    useEffect(() => {
      const sortTransactionsByCategory = (category) => {
        if (category === "All") {
          return [...transactions];
        } else {
          return transactions.filter((transaction) => transaction.category === category);
        }
      };
  
      setSortedTransactions(sortTransactionsByCategory(selectedCategory));
    }, [selectedCategory, transactions]);
  

    useEffect(()=>{
        fetch("http://localhost:8001/transactions")
        .then((response)=>response.json())
        .then((data)=>setTransactions(data))
    }, []);

    //  const filteredTransactions=selectedCategory==="All"?transactions:transactions.filter((transaction)=> transaction.category===selectedCategory)

    const handleAddTransaction = (newTransaction) => {
        // Add the new transaction to the transactions array
        setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);

      };
      const handleClick=((id)=>{
        const remainingTransactions=transactions.filter((transaction)=>transaction.id !==id);
        setTransactions(remainingTransactions)

      })
    

    return(
        <div className="allTransactions">
            
             {/* {transactions.map((transaction)=>(
                <Transaction 
                key={transaction.id}
                id={transaction.id}
                
                date={transaction.date}
                description={transaction.description}
                category={transaction.category}
                amount={transaction.amount}
                handledeletebutton={handleClick}
                />
                
             ))} */}
             {selectedCategory === "All"
        ? transactions.map((transaction) => (
            <Transaction
              key={transaction.id}
              id={transaction.id}
              date={transaction.date}
              description={transaction.description}
              category={transaction.category}
              amount={transaction.amount}
              handledeletebutton={handleClick}
            />
          ))
        : sortedTransactions.map((transaction) => (
            <Transaction
              key={transaction.id}
              id={transaction.id}
              date={transaction.date}
              description={transaction.description}
              category={transaction.category}
              amount={transaction.amount}
              handledeletebutton={handleClick}
            />
          ))}
             <NewTransaction onAddTransaction={handleAddTransaction}  />
             

        </div>
    )
} 
export default TransactionList;