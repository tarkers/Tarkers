import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators,State} from './redux/index'
import background from '../public/image/maplesand.jpg'
function App() {
  const state = useSelector((state:State) => state.user)
  const dispatch =useDispatch();
  const AC = bindActionCreators(actionCreators,dispatch)
  console.log(AC,"----")
  useEffect(() => {
    // console.log(state)
  }, [])
  const test = async () => {
    const response = await fetch("/api")
    const data = await response.json()
    console.log(data)
  }
  return (
    <div className="App">
468848<img src={background}></img>
    </div>
  );
}

export default App;
