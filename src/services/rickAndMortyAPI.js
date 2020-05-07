// export const fetchList = (page) => {
//   return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
//     .then(res => res.json())
//     .then(json=> json.results);
// };

export const fetchList = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(res => res.results.map(json => ({
      id: json.id,
      name: json.name,
      image: json.image,
      species: json.species,
      status: json.status
    })));
};

export const fetchDetail = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(res => res.results.map(json => ({
      id: json.id,
      name: json.name,
      image: json.image,
      species: json.species,
      status: json.status,
      origin: json.origin.name,
      location: json.location.name
    })));
};
