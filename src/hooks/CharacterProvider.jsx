import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchList } from '../services/rickAndMortyAPI';

const CharacterContext = createContext();

// const factoryMethod = {
//   light: lightMode,
//   dark: darkMode
// };

export const CharacterProvider = ({ children }) => {
  const [character, setCharacter] = useState({});
  const [characters, setCharacters] = useState([]);
  const [theme, setTheme] = useState('light')
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchList(page)
      .then(json => setCharacters(json));
  }, []);

  const toggle = ({ target }) => {
    if(target.checked) setTheme('light');
    if(!target.checked) setTheme('dark');
  };

  return (
    <CharacterContext.Provider value={{ character, characters, theme, page, toggle }}>
      {children}
    </CharacterContext.Provider>
  )
};

CharacterProvider.propTypes = {
  children: PropTypes.node
};

export const useCharacter = () => {
  const { character } = useContext(CharacterContext);
  return character;
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};

export const useTheme = () => {
  const { theme } = useContext(CharacterContext);
  return theme;
};

export const usePage = () => {
  const { page } = useContext(CharacterContext);
  return page;
};

export const useToggle = () => {
  const { toggle } = useContext(CharacterContext);
  return toggle;
};
