const table = document.querySelector('.table');
const displayPlayer = async () => {
  const gameID = localStorage.getItem('GameID');
  const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const result = await res.json();
  table.innerHTML = '<tr><th>Player Name</th><th>Player Score</th></tr>';
  result.result.forEach((player) => {
    table.innerHTML += ` <tr class = "row"> <td>${player.user}</td> 
    <td>${player.score}</td>
    </tr>`;
  });
};

export default displayPlayer;