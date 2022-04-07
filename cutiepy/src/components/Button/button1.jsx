import React, { useState } from 'react'
import defaultHelper from '../defaultHelper';

const Button1 = ({ color1, color2, value, size, Link, Target }) => {

  const [aColorBtn1, setAColorBtn1] = useState(color2);
  const [aTransitionBtn1, setATransitionBtn1] = useState('1.75s');
  const [aBeforeTransformBtn1, setABeforeTransformBtn1] = useState('scale(5)');
  const [aBeforeTransitionBtn1, setABeforeTransitionBtn1] = useState('1s');
  const [aBeforeOpacityBtn1, setABeforeOpacityBtn1] = useState('0');

  const styleButton1 = {
    display: 'flex',
    position: 'relative',
    margin: (size / 10) + 'px',
  }
  const styleButton1A = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: aColorBtn1,
    fontSize: (size / 6) + 'px',
    border: (size / 95) + 'px solid ' + color2,
    width: size + 'px',
    height: (size / 3) + 'px',
    transition: aTransitionBtn1,
    position: 'relative',
    overflow: 'hidden',
  }
  const styleButton1ABefore = {
    position: 'absolute',
    top: '0%',
    left: '0%',
    height: '100%',
    width: '100%',
    backgroundColor: color2,
    color: color1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: aBeforeTransformBtn1,
    opacity: aBeforeOpacityBtn1,
    transition: aBeforeTransitionBtn1,
    overflow: 'hidden'
  }
  const MouseEnterBtn1 = () => {
    setAColorBtn1("transparent");
    setATransitionBtn1("0.75s");
    setABeforeOpacityBtn1("1");
    setABeforeTransformBtn1("scale(1)");
    setABeforeTransitionBtn1("0.75s");
  }
  const MouseLeaveBtn1 = () => {
    setAColorBtn1(color2);
    setATransitionBtn1("1.75s");
    setABeforeOpacityBtn1("0");
    setABeforeTransformBtn1("scale(5)");
    setABeforeTransitionBtn1("1s");
  }
  return (
    <div className="button1"
      style={styleButton1}
    >
      <a href={Link}
        target={Target}
        style={styleButton1A}
        onMouseEnter={MouseEnterBtn1}
        onMouseLeave={MouseLeaveBtn1}
      >
        <span style={styleButton1ABefore}>{value}</span>
        {value}
      </a>
    </div>
  )
}

Button1.defaultProps = {
  color1: defaultHelper.colorW,
  color2: defaultHelper.colorB,
  size: defaultHelper.size,
  value: defaultHelper.value,
  Link: defaultHelper.Link,
  Target: defaultHelper.Target,
};

export default Button1;