import React from 'react';
import Toggle from '../Toggle/Toggle';
import { useTheme } from '../../hooks/CharacterProvider';
import stylesLight from './headerLight.css';
import stylesDark from './headerDark.css';

const Header = () => {
  const theme = useTheme();
  const styles = theme === 'light' ? stylesLight : stylesDark;

  return (
    <section className={styles.Header}>
      <h1>Rick and Morty API Viewer</h1>
      <Toggle />
    </section>
  );
};

export default Header;
