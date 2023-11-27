import { useState } from "react";
import "./filter.css"

const Filter = (props) => {
    const { searchName, handleSearchByName } = props;

    const handleSearch = (event) => {
        const value = event.target.value;
        handleSearchByName(value);
    }

    return (
        <div className="filters-container">
            <input type="text" value={searchName} onChange={handleSearch} placeholder="Input the name of the character" />
            <select>
                <option>Homeworld</option>
            </select>
            <select>
                <option>Film</option>
            </select>
            <select>
                <option>Specie</option>
            </select>
        </div>
    )
} 

export default Filter;