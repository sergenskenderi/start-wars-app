import { useEffect, useState } from "react";
import CharactersPage from "./CharactersPage";
import { fetchData } from "../api";


const CharactersController = () => {
    const [characters,setCharacters] = useState();
    const [characterDetails, setCharacterDetails] = useState();
    const [error,setError] = useState();
    const [loading, setLoading] = useState(false);
    const [detailsLoading, setDetailLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchName, setSearchName] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        setLoading(true);
        fetchData(`/people/?page=${pageNumber}&search=${searchName}`).then((response) => {
            setCharacters(response.data.results);
            setTotalPages(Math.ceil(response.data.count/10));
            setLoading(false);
        }).catch((error) => {
            setError(error);
            setLoading(false);
        });
    };

    const handleCharacterDetails = (url) => {
        setOpenModal(true);
        setDetailLoading(true);
        const urlPieces = url.split("/");
        const getIdFormUrl = urlPieces[urlPieces.length - 2];

        fetchData(`/people/${getIdFormUrl}`).then((response) => {
            setCharacterDetails(response.data);

            if(response.data.homeworld) {
                const homeworldPieces = url.split("/");
                const getIdFormHomeworld = homeworldPieces[homeworldPieces.length - 2];
                fetchData(`/planets/${getIdFormHomeworld}`).then((res) => {
                    let homeworldData = {
                        name: res.data.name,
                        terrain: res.data.terrain,
                        climate: res.data.climate,
                        residents: res.data.residents.length
                    }

                    response.data.homeworldData = homeworldData;
                    setCharacterDetails(response.data);
                    setDetailLoading(false);
                }).catch((error) => {
                    setError(error);
                    setDetailLoading(false);
                })
            }
        
        }).catch((error) => {
            setError(error);
            setDetailLoading(false);
        });
    }

    let timeout = null;

    const fetchDataWithDelay = (value) => {
        fetchData(`/people/?search=${value}`)
            .then((response) => {
                setCharacters(response.data.results);
                setTotalPages(Math.ceil(response.data.count / 10));
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            setLoading(true);
            fetchDataWithDelay(searchName);
        }, 500);

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [searchName]);

    const handleSearchByName = (value) => {
        setSearchName(value);
        setCurrentPage(1);
    };

    
    useEffect( () => {
        setLoading(true);
        fetchData(`/people`).then((response) => {
            setCharacters(response.data.results);
            setTotalPages(Math.ceil(response.data.count/10));
            setLoading(false);
        }).catch((error) => {
            setError(error);
            setLoading(false);
        });
    },[]);


    return <CharactersPage characters={characters} 
                            error={error} 
                            currentPage={currentPage} 
                            handlePageChange={handlePageChange} 
                            loading={loading} 
                            totalPages={totalPages}
                            handleSearchByName={handleSearchByName}
                            searchName={searchName}
                            handleCharacterDetails={handleCharacterDetails}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                            characterDetails={characterDetails}
                            detailsLoading={detailsLoading}
            />
}

export default CharactersController;