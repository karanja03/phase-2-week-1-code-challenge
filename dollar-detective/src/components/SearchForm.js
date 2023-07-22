import React ,{useState}from "react";



function SearchForm({handleSearch}){
    const [searchCategory, setSearchCategory] = useState("");
    const handleChange = (e) => {
        setSearchCategory(e.target.value);
        
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchCategory.trim()); // Call the handleSearch function from the parent component with the input value
      };
    return(
        <div className="searchSort">
            <div className="search">
               <form className="formSearch" onSubmit={handleSubmit} >
                {/* dont forget to add value */}
                <input type="text"  placeholder="Search By Category" value={searchCategory} onChange={handleChange}/>
                <button className="searchButton" type="submit">SEARCH</button>
                
                </form> 
            </div>
            
 
        </div>
    )
}
export default SearchForm;