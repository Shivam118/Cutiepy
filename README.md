# CUTIEPY :blush:

**Cutiepy** is a Javascript Library which provides you Animatable and Creative components. These components are designed using creative and Advanced Concepts of CSS (Cascading Style Sheet). 
<div align="center">

</div>

## Installation  
Cutiepy is available as an [npm package](https://www.npmjs.com/package/cutiepy).

```sh
// with npm
npm install cutiepy

//latest release
npm install cutiepy@0.1.6

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
    <Button1 color1="black" color2="white" value="Submit" Link="#" size="150" />
    <Button2 color1="black" color2="blue" color3="red" value="Submit" Link="#" size="225" />
    <Button3 color1="yellow" color2="orange" value="Submit" Link="#" size="300" />
  );
}

export default App();
```

Yes, it's really all you need to get started as you can see in this live and interactive demo:

This Library currently isn't available by default in ./node_modules . So first, you need to install the library using command given in Installation Section.
Then, import it in your ```.js  or .jsx``` file.

## Features
> - Provides Animatable and Creative Components.
> - Responsive Designs.
> - User can provide the button value using `value` attribute.
```
<Button8 value="Submit" />
<Button7 value="Contact Me" />
<Button6 value="Create an Account" />
```
> - User can set width using `size` attribute according to their need.
```
 <Button1 size="98" />
 <Button2 size="200" />
 <Button3 size="400" />
 <Button4 size="1500" />
```
> - User Friendly Designs.
> - User can Change the color using `color$` according to their design pattern.
```
<Button1 color1="red" color2="yellow" />
<Button2 color1="blue" color2="pink" color3="orange" />
<Button3 color1="red" color2="brown" />
```
> - User can Provide their Link using `Link` attribute according to their usability.
```
<Button5 Link="https://Facebook.com" />
<Button6 Link="/Home" />
<Button7 Link="https://localhost:8000/Contacts/Web.html" />
```
<hr>
You can refer to [Github Page](https://github.com/Shivam118/Cutiepy.git) for more Information.
