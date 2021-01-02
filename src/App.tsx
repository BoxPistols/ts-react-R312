import { type } from 'os';
import React from 'react';
import './App.scss';

// アノーテーション： 型指定
const name: string = 'hoge' // 文字列リテラル
const item: number = 12
const bool: boolean = true
let arr1 = [true, 1, 'string']
interface NAME {
  first: string;
  last: string | null;
}
let nameObj: NAME = {
  first: 'yamashita',
  last: null
}

const func1 = (x: number, y: number): number => {
  return x + y
}
const instA = func1(12, 80)

// インターセクション Types
type LOGIN = {
  age: number
  city: string
}

type PROFILE = {
  username: string
  password: string
}

type USER = LOGIN & PROFILE


const userA: USER = {
  age: 30,
  city: 'Tokyo',
  username: 'Yoshii',
  password: 'hogepass'
}

function App() {
  return (
    <div >
      <div>
        <ul>
          <li>品名：{name}</li>
          <li>商品：{item}</li>
          <li>真偽：{bool}</li>
          <li>配列：{arr1[1]}</li>
          <li>名前：{nameObj.first}</li>
          <li>Func1: {func1}
            / {instA}</li>
          <li>名前：{userA.age}, {userA.city}</li>
        </ul>
      </div>
    </div>
  )
}

export default App;
