import React,{useState, useEffect} from "react";
import Transaction from "./Transaction";

function TransactionList(){
    const[transactions, setTransactions]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8001/transactions")
        .then((response)=>response.json())
        .then((data)=>setTransactions(data))
    }, []);

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
             

        </div>
    )
} 
export default TransactionList;