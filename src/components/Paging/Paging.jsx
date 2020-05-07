import React from 'react';
import { usePage, useHandlePage, useCharacters } from '../../hooks/CharacterProvider';

const Paging = () => {
  const page = usePage();
  const handlePage = useHandlePage();
  const characters = useCharacters();

  return (
    <section>
      <button onClick={() => handlePage(-1)} disabled={page === 1}>&#8678</button>
        <button onClick={() => handlePage(1)} disabled={characters.length < 20}>&#8680</button>
    </section>
  );
};

export default Paging;