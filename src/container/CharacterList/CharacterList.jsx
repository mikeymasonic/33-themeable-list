import React, { useState, useEffect } from 'react';
import List from '../../components/List/List';
import { fetchList } from '../../services/rickAndMortyAPI';
import { useParams, useHistory } from 'react-router-dom';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  let { page } = useParams();
  let history = useHistory();

  if(!page) page = 1;

  useEffect(() => {
    fetchList(page)
      .then(apiCharacters => setCharacters(apiCharacters));
  }, [page]);

  const nextPage = () => {
    const newNum = Number(page) + Number(event.target.value);  
    if(newNum > 0) {
      page = newNum;
      history.push(`/${page}`);
    }
  };

  const characterNodes = characters.map(character => {
    return <List key={character.id} {...character} />;
  });
  
  return (
    <>
      {characterNodes}
      <div>
        <button value={-1} onClick={nextPage}>Back</button>
        <button value={1} onClick={nextPage}>Next</button>
      </div>
    </>
  );
};

export default CharacterList;
