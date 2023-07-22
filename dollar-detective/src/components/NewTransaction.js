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
    <div className="bottompart">
      <div className="formpart">
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
      <button className="addtransactiontbtn" type="submit">Add Transaction</button>
    </form>
    </div>
    <div className="motivation">
      <h3>Empower Your Finances: Unleash the Dollar Detective Within You!</h3>
      <p>Discover the power of your money with our Dollar Detective transaction app!<br/>Take control of your financial journey and make informed decisions with every transaction.<br/> Track, categorize, and analyze your spending to unlock the secrets of your financial habits.<br/> Empower yourself to use your money wisely, invest in your future,<br/> and achieve your dreams.</p>
    </div>
    </div>
  );
}

export default NewTransaction;