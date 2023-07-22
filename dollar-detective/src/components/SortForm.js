import React from "react";



function SortForm({categories,selectedCategory, onChange}){
    // const handleSelectChange = (e) => {
    //     const selectedCategory = e.target.value;
    //     onChange(selectedCategory);
// };
    return(
        <select value={selectedCategory} onChange={onChange} className="selectSort">
            {categories.map((category)=>(
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
    )


    
}
export default SortForm;