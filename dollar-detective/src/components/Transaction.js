import React from "react";


function Transaction({ id,date, description, category, amount,handledeletebutton}) {

    
    return(
        <div >
          <table>
            <tbody>
          <tr key={id}>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
          </tr>
          </tbody>
          </table>
        
        
            <button className="deletebtn" onClick={()=>handledeletebutton(id)}>DELETE</button>
          

        </div>
       
    )
  
}

export default Transaction;