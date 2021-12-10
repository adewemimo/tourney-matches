import Player from './Player';
import { preparePlayerData, addWinsToPlayers } from '../helper/playerHelpers';

function PlayerList(props) {
  const {matchData, playerData} = props;
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(matchData, playerDataArray);
  const onePlayer = parsedPlayerData[0];
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {/* Players will be shown here */}
      <Player {...onePlayer} />
    </section>
  );
}

export default PlayerList;
