import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import { ErrorBoundary } from './ErrorBoundary';
import { Input } from './Input';
import { CardList } from './CardList';
import { SingleCity } from './SingleCity';
import { useCitiesList } from './hooks/useCitiesList.js';
import { NavBar } from './NavBar';

export const GlobalContext = React.createContext();

function App () {
  const [state, dispatch] = useCitiesList();

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <NavBar />
      <Route path='/home'>
        <div className='Main'>
          <Input />
          <ErrorBoundary>
            <CardList />
          </ErrorBoundary>
        </div>
      </Route>
      <Route path='/city/:city' component={SingleCity} />
    </GlobalContext.Provider>
  );
}

export default App;
