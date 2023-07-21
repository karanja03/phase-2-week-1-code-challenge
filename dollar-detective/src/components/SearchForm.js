import React from "react";


function SearchForm(){
    return(
        <div className="searchSort">
            <div className="search">
               <form className="formSearch">
                {/* dont forget to add value */}
                <input type="text"  placeholder="Search By Category"/>
                <button className="searchButton">SEARCH</button>
                
                </form> 
            </div>
            
 
        </div>
    )
}
export default SearchForm;