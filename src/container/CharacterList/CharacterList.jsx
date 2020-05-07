import React, { useState, useEffect } from 'react';
import List from '../../components/List/List';
import { useCharacters } from '../../hooks/CharacterProvider';

const CharacterList = () => {
  const characters = useCharacters();

  const characterNodes = characters.map(character => {
    return <List key={character.id} {...character} />;
  });
  
  return (
    <>
      {characterNodes}
    </>
  );
};

export default CharacterList;
