import React from 'react';
import './App.scss';

// アノーテーション：型指定
const name: string = 'hoge' // 文字列リテラル
const item: number = 12

console.log(name)


function App() {
  return (
    <div>
      <div>
        {name},{item}
      </div>
    </div>
  )
}

export default App;
