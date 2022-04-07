
import './App.css';
import {Button1,Button2,Button3,Button4,Button5,Button6,Button7,Button8} from './components/Button'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> */}
          <Button1 />
          <Button2 />
          <Button3 />
          <Button4 />
          <Button5 />
          <Button6 />
          <Button7 color1="black" color2="white" color3="orange" color4="skyblue"/>
          <Button8 />
      {/* </header> */}
    </div>
  );
}

export default App;
