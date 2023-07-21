import React from "react";

function Search ({ handleSearch }) {
    return (
        <div className="search m-5">
            <form onSubmit = {handleSearch} className="search-form">
                <input type="text" className="searchTerm rounded border p-2" name = "searchTerm" placeholder="" />
            <button type="submit" className="searchButton p-2 rounded text-white bg-slate-500">
                <i className="material-icons">search</i>
            </button>
            </form>
        </div>
    )
}

export default Search;
