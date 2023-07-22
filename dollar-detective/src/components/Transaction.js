import React from "react";


function Transaction({ date, description, category, amount}) {
    return(

        <div className="transactions">
            <button className="transactionButtondisplay">
            <p className="paragraphtrans"> Date : {date}</p>
            <p className="paragraphtrans">Description : {description}</p>
            <p className="paragraphtrans">Category : {category}</p>
            <p className="paragraphtrans">Amount : {amount}</p>
            <button className="deletebtn">DELETE</button>
            </button>
          

        </div>
       
    )
  
}

export default Transaction;