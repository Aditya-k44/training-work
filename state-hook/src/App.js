import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/state/ClassCounter';
import HookCounter from './components/state/HookCounter';
import HookCounterTwo from './components/state/HookCounterTwo';
import HookCounterThree from './components/state/HookCounterThree';
import HookCounterFour from './components/state/HookCounterFour';
import DataFechting from './components/effect/DataFechting';
import ComponentC from './components/context/ComponentC'
import React from 'react';

export const UserContext = React.createContext()
export const StateContext = React.createContext()

function App() {

  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo />/ */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <DataFechting /> */}
      <UserContext.Provider  value={'Aditya'}>
        <StateContext.Provider value={'MH'}>
            <ComponentC />
        </StateContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
