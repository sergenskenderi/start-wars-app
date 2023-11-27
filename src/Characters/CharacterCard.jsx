const CharactersCard = (props) => {
    const { name, handleCharacterDetails } = props;
    return (
        <div className="characters-card" onClick={handleCharacterDetails}>
            <img src="https://pbs.twimg.com/profile_images/794107415876747264/g5fWe6Oh_400x400.jpg" />
            {name}
        </div>
    )
}

export default CharactersCard;