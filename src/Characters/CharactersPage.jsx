import Filter from "../Filter/Filter";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import CharactersCard from "./CharacterCard";
import "./characters.css";

const CharactersPage = (props) => {
    const { characters, error, currentPage, handlePageChange, loading } = props;
    
    return (
        error ? <div className="error-container">Something went wrong. Please refresh the page or contact with support.</div> :
         loading ? <div className="loading-container"><Loading /></div> : <div className="characters-container">
            <Filter />
            <div className="characters-grid-container">
                {characters.map((character,index) => <CharactersCard key={index} name={character.name} />)}
            </div>
            <Pagination totalPages={10} onPageChange={handlePageChange} currentPage={currentPage} />
        </div>
    )
}

export default CharactersPage;