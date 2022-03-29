import React from 'react'
import Button1 from './components/button1';
import Button2 from './components/button2';
import Button3 from './components/button3';
import './App.css';

const App = () => {
  return (
    <div>
      <Button2 />
      <Button1 size="large" color1="white" color2="black" value="Button" Link="https://google.com/"/>
      <Button3 />
    </div>
  )
}

export default App