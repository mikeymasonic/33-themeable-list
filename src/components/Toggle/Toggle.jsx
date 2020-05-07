import React from 'react';
import { useTheme, useToggle } from '../../hooks/CharacterProvider';

const Toggle = () => {
  const theme = useTheme();
  const toggle = useToggle();

  return (
    <section className={theme.Toggle}>
      <input id="toggle" type="checkbox" checked={theme === 'light'} onChange={toggle} />
      <label htmlFor="toggle"></label>
    </section>
  );
};
export default Toggle;