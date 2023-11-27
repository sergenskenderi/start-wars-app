import Filter from "../Filter/Filter";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import CharactersCard from "./CharacterCard";
import "./characters.css";

const CharactersPage = (props) => {
    const { characters, error, currentPage, handlePageChange, loading, totalPages } = props;
    
    return (
        error ? <div className="error-container">Something went wrong. Please refresh the page or contact with support.</div> :
          <div className="characters-container">
            <Filter />
            {loading ? <div className="loading-container"><Loading /></div> : characters && characters.length ? <>
            <div className="characters-grid-container">
                {characters.map((character,index) => <CharactersCard key={index} name={character.name} />)}
            </div>
            <Pagination totalPages={totalPages} onPageChange={handlePageChange} currentPage={currentPage} />
            </> : <div className="error-container">No results found</div>}
        </div>
    )
}

export default CharactersPage;