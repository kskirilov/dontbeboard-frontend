import React from "react";
import Card from './card'

function AllGames(props) {

    const listGames = props.games.map((game) => {
    return <Card name={game.gameName} image={game.gamePhoto} releaseDate={game.releaseDate} minPlayers={game.minPlayers} maxPlayers={game.maxPlayers} time={game.avgDuration} gameType={game.gameKind} mood={game.gameMood} ageGroup={game.ageGroup} description={game.gameDescription} />
    });
    return(
        <>
            {listGames}
        </>
    )

}

export default AllGames;