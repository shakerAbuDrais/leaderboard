async function newGame() {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'MyGame',
    }),
  });
  const data = await res.json();
  localStorage.setItem('GameID', data.result.split(' ')[3]);
}

// function to post score to the API
const addScore = async (user, score, gameID) => {
  const data = {
    user,
    score,
  };
  await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  return (user, score);
};

// function to get score from the API and display as DOM element
export { newGame, addScore };