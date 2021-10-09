const gameId = 'auGrJbH48EOT7bxQ3VSK'
const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api'

export const getScores = async () => {
  const response = await fetch(`${BASE_URL}/games/${gameId}/scores`)
    .then((response) => response.json())
    .then((json) => json);
  return response
};

export const addScore = async (name, score) => {
  const response = await fetch(`${BASE_URL}/games/${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  })
    .then((response) => response.json())
    .then((json) => json)
  return response
};
