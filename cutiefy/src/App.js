import React from 'react'
import Button1 from './Lib/Buttons/components/button1'
import Button2 from './Lib/Buttons/components/button2'
import Button3 from './Lib/Buttons/components/button3'
import Button4 from './Lib/Buttons/components/button4'
import Button5 from './Lib/Buttons/components/button5'
import Button6 from './Lib/Buttons/components/button6'
import Button7 from './Lib/Buttons/components/button7'
import './App.css';

const App = () => {
  return (
    <div>
      <Button7 size="small"/>
      <Button6 />
      {/* <Button5 /> */}
      <Button4 />
      <Button3 />
      <Button2 />
      <Button1 />
    </div>
  )
}

export default App