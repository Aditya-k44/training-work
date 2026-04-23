import logo from './logo.svg';
import React from 'react';
import './App.css';
import ClassCounter from './components/state/ClassCounter';
import HookCounter from './components/state/HookCounter';
import HookCounterTwo from './components/state/HookCounterTwo';
import HookCounterThree from './components/state/HookCounterThree';
import HookCounterFour from './components/state/HookCounterFour';
import DataFechting from './components/effect/DataFechting';
// import ComponentC from './components/context/ComponentC'
import { useReducer } from 'react';
import CounterOne from './components/reducer/CounterOne';
import CounterTwo from './components/reducer/CounterTwo';
import Counterthree from './components/reducer/Counterthree';
import ComponentA from './components/reducer/ComponentA'
import ComponentB from './components/reducer/ComponentB'
import ComponentC from './components/reducer/ComponentC'
import DataFetchingOne from './components/reducer/DataFetchingOne';
import DataFechtinfTwo from './components/reducer/DataFechtinfTwo';
import ParentComponent from './components/callback/ParentComponent';

export const UserContext = React.createContext()
export const StateContext = React.createContext()

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return initialState;
    
        default:
            return state;
    }
}

export const CounterContext = React.createContext()

function App() {

  const[count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo />/ */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <DataFechting /> */}
      {/* <UserContext.Provider  value={'Aditya'}>
        <StateContext.Provider value={'MH'}>
            <ComponentC />
        </StateContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <Counterthree /> */}
      {/* <CounterContext.Provider value={{countState: count, countDispatch: dispatch}}>
        Global Count: {count}
        <ComponentA />
        <ComponentB />
        <ComponentC /> 
      </CounterContext.Provider>
       */}
      {/* <DataFetchingOne /> */}
      {/* <DataFechtinfTwo /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
