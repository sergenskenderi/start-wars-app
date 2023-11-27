import Filter from "../Filter/Filter";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import Pagination from "../Pagination/Pagination";
import CharactersCard from "./CharacterCard";
import "./characters.css";

const CharactersPage = (props) => {
    const { characters, 
            error, 
            currentPage, 
            handlePageChange, 
            loading, 
            totalPages, 
            handleSearchByName, 
            searchName, 
            handleCharacterDetails, 
            openModal, 
            setOpenModal,
            characterDetails,
            detailsLoading
         } = props;
    console.log(characterDetails);
    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
      
        return `${day}-${month}-${year}`;
      }

    return (
        error ? <div className="error-container">Something went wrong. Please refresh the page or contact with support.</div> :
          <div className="characters-container">
            <Filter handleSearchByName={handleSearchByName} searchName={searchName} />
            {loading ? <div className="loading-container"><Loading /></div> : characters && characters.length ? <>
            <div className="characters-grid-container">
                {characters.map((character,index) => <CharactersCard key={index} name={character.name} handleCharacterDetails={() => handleCharacterDetails(character.url)} />)}
            </div>
            <Pagination totalPages={totalPages} onPageChange={handlePageChange} currentPage={currentPage} />
            </> : <div className="error-container">No results found</div>}
            <Modal isOpen={openModal} loading={detailsLoading} onClose={() => setOpenModal(false)} title={characterDetails?.name || ""}>
                <h6 className="personal-data-title">Personal data :</h6>
                <div className="personal-data-container">
                    <p>Height: <span>{(characterDetails?.height / 100)} m</span></p>
                    <p>Mass: <span>{characterDetails?.mass} kg</span></p>
                    <p>Date created: <span>{formatDate(characterDetails?.created) || "-"}</span></p>
                    <p>Films (Part of): <span>{characterDetails?.films?.length || "-"}</span></p>
                    <p>Born: <span>{characterDetails?.birth_year || "-"}</span></p>
                </div>
                {
                    characterDetails?.homeworldData && <div className="homeworld-data-container">
                        <h6 className="personal-data-title">Homeworld data :</h6>
                        <div className="personal-data-container">
                            <p>Name: <span>{characterDetails?.homeworldData?.name || "-"}</span></p>
                            <p>Terrain: <span>{characterDetails?.homeworldData?.terrain || "-"}</span></p>
                            <p>Climate: <span>{characterDetails?.homeworldData?.climate || "-"}</span></p>
                            <p>Nr. of Residents: <span>{characterDetails?.homeworldData?.residents || "-"}</span></p>
                        </div>
                    </div>
                }
            </Modal>
        </div>
    )
}

export default CharactersPage;