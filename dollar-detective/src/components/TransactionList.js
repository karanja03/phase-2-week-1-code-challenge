import React,{useState, useEffect} from "react";
import Transaction from "./Transaction";
import NewTransaction from "./NewTransaction";

function TransactionList(){
    const[transactions, setTransactions]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8001/transactions")
        .then((response)=>response.json())
        .then((data)=>setTransactions(data))
    }, []);

    const handleAddTransaction = (newTransaction) => {
        // Add the new transaction to the transactions array
        setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
      };
    

    return(
        <div className="allTransactions">
            
             {transactions.map((transaction)=>(
                <Transaction 
                key={transaction.id}
                
                date={transaction.date}
                description={transaction.description}
                category={transaction.category}
                amount={transaction.amount}
                />
                
             ))}
             <NewTransaction onAddTransaction={handleAddTransaction} />
             

        </div>
    )
} 
export default TransactionList;