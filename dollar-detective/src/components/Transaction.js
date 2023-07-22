import React from "react";


function Transaction({ id,date, description, category, amount,handledeletebutton}) {

    
    return(

        <div className="transactions">
            <button className="transactionButtondisplay">
            <p className="paragraphtrans"> Date : {date}</p>
            <p className="paragraphtrans">Description : {description}</p>
            <p className="paragraphtrans">Category : {category}</p>
            <p className="paragraphtrans">Amount : {amount}</p>
            
            </button>
            <button className="deletebtn" onClick={()=>handledeletebutton(id)}>DELETE</button>
          

        </div>
       
    )
  
}

export default Transaction;