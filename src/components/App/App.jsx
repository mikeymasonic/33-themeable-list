import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../Header/Header';
import CharacterList from '../../container/CharacterList/CharacterList';
import CharacterDetail from '../../container/CharacterDetail/CharacterDetail';
import { CharacterProvider } from '../../hooks/CharacterProvider';

export default function App() {
  return (
    <CharacterProvider>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/detail/:id?" component={CharacterDetail} />
        <Route exact path="/:page?" component={CharacterList} />
      </Switch>
    </Router>
    </CharacterProvider>
  );
}
