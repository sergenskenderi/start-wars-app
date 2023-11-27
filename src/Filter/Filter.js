import { useAuth } from "../Authentication/AuthContext";
import { deleteCookie } from "../helper";
import "./filter.css"

const Filter = (props) => {
    const { searchName, handleSearchByName } = props;
    const { setIsAuthenticated } = useAuth();

    const handleSearch = (event) => {
        const value = event.target.value;
        handleSearchByName(value);
    }

    const handleLogout = () => {
        deleteCookie('starWarsUser');
        setIsAuthenticated(false);
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
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
} 

export default Filter;