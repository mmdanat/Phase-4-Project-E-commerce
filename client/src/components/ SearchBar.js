import React from "react";

function SearchBar ({ handleSearch }) {
    return (
        <div className="search">
            
                <input type="text" className="searchTerm" name = "searchTerm" placeholder="Search Water" onChange={handleSearch} />
            
                <i className="material-icons">search</i>
           
           
        </div>
    )
}
 
export default SearchBar;
