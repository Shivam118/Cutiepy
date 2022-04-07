import React, { useState } from 'react'
import defaultHelper from '../defaultHelper';

const Button3 = ({ color1, color2, value, Link, Target, size }) => {

  const [aColorBtn3, setAColorBtn3] = useState(color2);
  const [aBeforeTransformBtn3, setABeforeTransformBtn3] = useState('translateX(-100%)');

  const styleButton3 = {
    display: 'flex',
    margin: (size / 10) + 'px',
  }
  const styleButton3A = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: (size / 8) + 'px',
    width: size + 'px',
    height: (size / 3) + 'px',
    border: (size / 95) + 'px solid ' + color2,
    textDecoration: 'none',
    color: aColorBtn3,
    transition: 'all 1s',
    position: 'relative',
    overflow: 'hidden',
    zIndex: '99',
  }
  const styleButton3ABefore = {
    display: 'flex',
    position: 'absolute',
    left: '0%',
    top: '0%',
    height: '100%',
    width: '100%',
    backgroundColor: color2,
    transform: aBeforeTransformBtn3,
    transition: 'all 1s',
    zIndex: '98',
  }

  const MouseEnterBtn3 = () => {
    setAColorBtn3(color1);
    setABeforeTransformBtn3('translateX(0)');
  }
  const MouseLeaveBtn3 = () => {
    setAColorBtn3(color2);
    setABeforeTransformBtn3('translateX(-100%)');
  }
  return (
    <div
      className="button3"
      style={styleButton3}
    >
      <a
        href={Link}
        target={Target}
        style={styleButton3A}
        onMouseEnter={MouseEnterBtn3}
        onMouseLeave={MouseLeaveBtn3}
      >
        <div style={styleButton3ABefore} />
        {value}
      </a>
    </div>
  )
}

Button3.defaultProps = {
  color1: defaultHelper.colorW,
  color2: defaultHelper.colorB,
  size: defaultHelper.size,
  value: defaultHelper.value,
  Link: defaultHelper.Link,
  Target: defaultHelper.Target,
};

export default Button3;