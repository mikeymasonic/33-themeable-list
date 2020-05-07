import React, { useState, useEffect } from 'react';
import Details from '../../components/Details/Details';
import { fetchDetail } from '../../services/rickAndMortyAPI';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const [character, setCharacter] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetchDetail(id)
      .then(character => setCharacter(character));
  }, []);

  return (
    <>
      <Details {...character} />
    </>
  );
};

export default CharacterDetail;
