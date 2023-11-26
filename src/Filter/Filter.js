import "./filter.css"

const Filter = (pros) => {

    return (
        <div className="filters-container">
            <input placeholder="Input the name of the character" />
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