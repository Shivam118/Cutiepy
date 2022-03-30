import React, { useState } from 'react'
// import './css/button1.css';

const Button1 = (props) => {

  const { color1, color2, value, size, Link, Target } = props;

  const [fontSizeBtn1, setFontSizeBtn1] = useState('20px');
  const [borderWidthBtn1, setBorderWidthBtn1] = useState('2px');
  const [paddingBtn1, setPaddingBtn1] = useState('20px 40px');
  const [aColorBtn1, setAColorBtn1] = useState(color2);
  const [aTransitionBtn1, setATransitionBtn1] = useState('1.75s');
  const [aBeforeTransformBtn1, setABeforeTransformBtn1] = useState('scale(5)');
  const [aBeforeTransitionBtn1, setABeforeTransitionBtn1] = useState('1s');
  const [aBeforeOpacityBtn1, setABeforeOpacityBtn1] = useState('0');

  const styleButton1 = {
    display: 'flex',
    margin: '20px',
  }
  const styleButton1A = {
    textDecoration: 'none',
    color: aColorBtn1,
    fontSize: fontSizeBtn1,
    border: borderWidthBtn1 + ' solid ' + color2,
    padding: paddingBtn1,
    transition: aTransitionBtn1,
    position: 'relative',
    overflow: 'hidden'
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
      <a
        href={Link}
        target={Target}
        style={styleButton1A}
        onMouseEnter={MouseEnterBtn1}
        onMouseLeave={MouseLeaveBtn1}
      >
        <div style={styleButton1ABefore}>{value}</div>
        {value}
      </a>
    </div>
  )
}

Button1.defaultProps = {
  color1:"white",
  color2:"red",
  size:"medium",
  value:"Button",
  Link:"https://Google.com/",
  Target:"_blank",
};

export default Button1;