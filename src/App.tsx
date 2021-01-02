import React from 'react';
import logo from './logo.svg';
import './App.css';

// アノーテーション：型指定
const name: string = "hoge" // 文字列リテラル
const item: number = 12

function App() {
  return (<div className="App">
    <div>{name}を{item}こ</div>
  </div>);
}

export default App;
