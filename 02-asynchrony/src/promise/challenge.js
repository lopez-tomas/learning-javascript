const fetchData = require('../utils/fetchData.js');
const API = 'https://rickandmortyapi.com/api/character';

fetchData(API)
  .then(data => {
    console.log(`Characters: ${data.info.count}`);
    return fetchData(`${API}/${data.results[0].id}`);
  })
  .then(data => {
    console.log(`1st character name: ${data.name}`);
    return fetchData(data.origin.url);
  })
  .then(data => {
    console.log(`Character dimension: ${data.dimension}`);
  })
  .catch(err => console.error(err));