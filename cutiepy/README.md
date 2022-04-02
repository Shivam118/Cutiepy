# CUTIEPY :blush:

**Cutiepy** is a Javascript Library which provides you Animatable and Creative components. These components are designed using creative and Advanced Concepts of CSS (Cascading Style Sheet). 
<div align="center">

</div>

## Installation  
Cutiepy is available as an [npm package](https://www.npmjs.com/package/cutiepy).

```sh
// with npm
npm install cutiepy

//specific version
npm install cutiepy@0.1.1

```

Please note that, To get the latest stable release use `@latest` instead.

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button1, Button2, Button3 } from 'cutiepy'; //Specific for Button1, Button2, Button3 

function App() {
  return (
    <Button1 color1="black" color2="white" value="Submit" Link="#" size="small" />
    <Button2 color1="black" color2="blue" color3="red" value="Submit" Link="#" size="medium" />
    <Button3 color1="yellow" color2="orange" value="Submit" Link="#" size="large" />
  );
}

export default App();
```

Yes, it's really all you need to get started as you can see in this live and interactive demo:

This Library currently isn't available by default in ./node_modules . So first, you need to install the library using command given in Installation Section.
Then, import it in your ```.js  or .jsx``` file,