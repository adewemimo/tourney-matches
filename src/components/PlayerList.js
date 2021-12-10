import Player from './Player';

function PlayerList(props) {
  const {parsedPlayerData} = props;
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
