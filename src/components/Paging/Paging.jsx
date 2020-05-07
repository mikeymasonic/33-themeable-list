import React from 'react';
import { usePage, useHandlePage, useCharacters, useTheme } from '../../hooks/CharacterProvider';
import stylesLight from './pagingLight.css';
import stylesDark from './pagingDark.css';

const Paging = () => {
  const page = usePage();
  const handlePage = useHandlePage();
  const characters = useCharacters();
  const theme = useTheme();
  const styles = theme === 'light' ? stylesLight : stylesDark;

  return (
    <section className={styles.Paging}>
      <button onClick={() => handlePage(-1)} disabled={page === 1}>&#8678;</button>
        <button onClick={() => handlePage(1)} disabled={characters.length < 20}>&#8680;</button>
    </section>
  );
};

export default Paging;