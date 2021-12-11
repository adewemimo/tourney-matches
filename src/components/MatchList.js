import Match from './Match';

function MatchList(props) {
  const { matchData } = props;
  const matchList = matchData.map(match => <Match key={match.matchNumber} {...match} />)
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {/* Matches will be shown here */}
      {matchList}
    </section>
  );
}

export default MatchList;
