import React from "react";
import Card from './card'

function AllGames(props) {

    const listGames = props.games.map((game) => {
    return <Card name={game.gameName} minPlayers={game.minPlayers} maxPlayers={game.maxPlayers} time={game.avgDuration} gameType={game.gameKind} mood={game.gameMood} ageGroup={game.ageGroup}/>
    });
    return(
        <>
            {listGames}
        </>
    )

}

export default AllGames;