
export const getData = () => JSON.parse(localStorage.getItem('GameID')) || {};

export const saveData = (data) => localStorage.setItem('GameID', JSON.stringify(data));