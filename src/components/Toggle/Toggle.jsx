import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, useToggle } from '../../hooks/CharacterProvider';
import styles from './Toggle.css';

const Toggle = () => {
  const theme = useTheme();
  const toggle = useToggle();

  return (
    <section className={styles.Toggle}>
      <input id="toggle" type="checkbox" checked={theme === 'light'} onChange={toggle} />
      <label htmlFor="toggle"></label>
    </section>
  );
};

Toggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  theme: PropTypes.bool.isRequired
};

export default Toggle;