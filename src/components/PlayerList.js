import Player from './Player';

function PlayerList(props) {
  const {parsedPlayerData} = props;
  const playerList = parsedPlayerData.map(player => <Player key={player.gamerTag} {...player} />)
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {/* Players will be shown here */}
      {playerList}
    </section>
  );
}

export default PlayerList;
