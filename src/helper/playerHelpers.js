//we need to convert player object to array of objects since there is no direct update to be done on this data.
export const preparePlayerData = (playerData) => {
    return Object.values(playerData);

}

//Wins key needs to be added to each player object
export const addWinsToPlayers = (matchData, playerDataArray) => {
    playerDataArray.map((player) => {

        const playerTotalWin = matchData.reduce((accumulator, currentValue) => {
            if (currentValue.winner === player.gamerTag) {
                accumulator++;
            }
            return accumulator;
        }, 0);
        player.wins = playerTotalWin;
    })
    return playerDataArray;
    }

