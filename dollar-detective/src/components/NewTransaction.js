import React, { useState } from "react";

function NewTransaction({ onAddTransaction }) {
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleChangeForm = (event) => {
    //adding individuals values to the keys(date,category)
    const { name, value } = event.target;
    setNewTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // Check if any of the input fields are empty before adding the new transaction
    if (newTransaction.date && newTransaction.description && newTransaction.category && newTransaction.amount) {

        fetch("http://localhost:8001/transactions",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newTransaction),
        })
        .then((response)=>response.json())
        .then((data)=>{
     // to add the new transaction to the list
         onAddTransaction(data);
        })
     
      

      // Reset the form after successful submission
      setNewTransaction({
        date: "",
        description: "",
        category: "",
        amount: "",
      });
    } else {
      alert("PLEASE COMPLETELY FILL IN THE FORM")
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className="fillinform">
      <label htmlFor="dateinput">DATE:</label>
      <input
        type="text"
        id="dateinput"
        name="date"
        value={newTransaction.date}
        onChange={handleChangeForm}
        placeholder="Please Enter Date"
      />
      <label htmlFor="descriptioninput">DESCRIPTION:</label>
      <input
        type="text"
        id="descriptioninput"
        name="description"
        value={newTransaction.description}
        onChange={handleChangeForm}
        placeholder="Please Enter Description"
      />
      <label htmlFor="categoryinput">CATEGORY:</label>
      <input
        type="text"
        id="categoryinput"
        name="category"
        value={newTransaction.category}
        onChange={handleChangeForm}
        placeholder="Please Enter Category"
      />
      <label htmlFor="amountinput">AMOUNT:</label>
      <input
        type="text"
        id="amountinput"
        name="amount"
        value={newTransaction.amount}
        onChange={handleChangeForm}
        placeholder="Please Enter Amount"
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default NewTransaction;