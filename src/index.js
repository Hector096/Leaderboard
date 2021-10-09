import { getScores, addScore } from './apiHandler';
import './styles.css';

const listBox = document.getElementById('listbox');
const form = document.getElementById('form');
const name = document.getElementById('name');
const score = document.getElementById('score');
const refresh = document.getElementById('refresh');
const alertBox = document.getElementById('alert-box');
const alertBox2 = document.getElementById('alert-box2');
const loader = document.getElementById('loader');
const listBoxDiv = document.getElementById('list-box-div');

const fetchScores = async () => {
  const resp = await getScores();
  resp.result.sort((a, b) => b.score - a.score);
  if (resp.result.length !== 0) {
    resp.result.forEach((i) => {
      const li = document.createElement('li');
      const h3 = document.createElement('h4');
      const h5 = document.createElement('h4');
      h3.innerText = `${i.user}: `;
      h5.innerText = `${i.score}`;
      li.appendChild(h3);
      li.appendChild(h5);
      h5.classList.add('pe-4');
      li.classList.add('d-flex');
      listBox.appendChild(li);
      loader.classList.add('d-none');
      listBox.classList.remove('d-none');
      listBoxDiv.classList.remove('justify-content-center');
      listBoxDiv.classList.remove('align-items-center');
      listBoxDiv.classList.remove('d-flex');
    });
  } else {
    const text = document.createElement('p');
    text.innerText = 'No Score found!';
    text.classList.add('text-center');
    text.classList.add('text-dark');
    listBox.appendChild(text);
  }
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  loader.classList.remove('d-none');
  listBox.classList.add('d-none');
  listBoxDiv.classList.add('justify-content-center');
  listBoxDiv.classList.add('align-items-center');
  listBoxDiv.classList.add('d-flex');
  const resp = await addScore(name.value, score.value);
  if (resp.result === 'Leaderboard score created correctly.') {
    listBox.innerHTML = '';
    name.value = '';
    score.value = '';

    fetchScores();
    alertBox.classList.remove('d-none');
    setTimeout(() => {
      alertBox.classList.add('d-none');
    }, 3000);
  } else {
    alertBox2.classList.remove('d-none');
    setTimeout(() => {
      alertBox2.classList.add('d-none');
    }, 3000);
  }
});

refresh.addEventListener('click', () => {
  listBox.innerHTML = '';
  loader.classList.remove('d-none');
  listBox.classList.add('d-none');
  listBoxDiv.classList.add('justify-content-center');
  listBoxDiv.classList.add('align-items-center');
  listBoxDiv.classList.add('d-flex');
  fetchScores();
});

fetchScores();
