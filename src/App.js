import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions';
import Label from './components/Label'
import Header from './components/Header';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Header />
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {
        isLogged ? <h3>Logged In</h3> : <h3>Logged Out</h3>
      }
    </div>
  );
}

export default App;
