import React from 'react';
import Header from '../Header/Header';
import CharacterList from '../../container/CharacterList/CharacterList';
import { CharacterProvider } from '../../hooks/CharacterProvider';
import Paging from '../Paging/Paging';

export default function App() {
  return (
    <CharacterProvider>
      <Header />
      <Paging />
      <CharacterList />
    </CharacterProvider>
  );
}
