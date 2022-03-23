import React from 'react'
import Button1 from './components/button1';
import Button2 from './components/button2';
import Button3 from './components/button3';

const App = () => {
  return (
    <div>
      <Button2 color1="white" color2="blue" color3="#bba528" value="Button"/>
      <Button1 size="large" color1="white" color2="black" value="Button"/>
      <Button3 />
    </div>
  )
}

export default App