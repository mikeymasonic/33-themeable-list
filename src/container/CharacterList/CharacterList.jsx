import React from 'react';
import List from '../../components/List/List';
import { useCharacters, useTheme } from '../../hooks/CharacterProvider';
import stylesLight from './characterListLight.css';
import stylesDark from './characterListDark.css';

const CharacterList = () => {
  const characters = useCharacters();
  const theme = useTheme();
  const styles = theme === 'light' ? stylesLight : stylesDark;

  const characterNodes = characters.map(character => {
    return <List key={character.id} {...character} />;
  });
  
  return (
    <section className={styles.CharacterList}>
      {characterNodes}
    </section>
  );
};

export default CharacterList;
