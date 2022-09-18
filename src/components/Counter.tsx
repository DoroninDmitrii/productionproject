import { useState } from "react"
import React from "react";
import './Counter.scss'


export const Counter = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      {count}
      <button onClick={increment}>increment</button>
    </div>
  )
}
