import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Button from './Button';
import FlexItems from './FlexItems';
import GridTailwind from './GridTailwind';
import Example from './HookState';
import Example2 from './HookEffect';
import Example3 from './HookContext';
import HookReducer from './HookReducer';
import HookCallback from './HookCallback';
import ItemList from './ItemList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title />
        <Button label="Hallooo" />
        <FlexItems />
        <GridTailwind />
        <Example />
        <Example2 />
        <Example3 />
        <HookReducer />
        <HookCallback />
        <ItemList />
      </header>
    </div>
  );
}

export default App;
