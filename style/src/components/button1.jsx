import React, { useState } from 'react'

const Button1 = (props) => {

  const { color1, color2, value, size, Link, Target } = props;
  const [aColorBtn1, setAColorBtn1] = useState(color2);
  const [aTransitionBtn1, setATransitionBtn1] = useState('1.75s');
  const [aBeforeTransformBtn1, setABeforeTransformBtn1] = useState('scale(5)');
  const [aBeforeTransitionBtn1, setABeforeTransitionBtn1] = useState('1s');
  const [aBeforeOpacityBtn1, setABeforeOpacityBtn1] = useState('0');

  const styleButton1 = {
    display: 'flex'
  }
  const styleButton1ASmall = {
    margin:'10px',
    textDecoration: 'none',
    color: aColorBtn1,
    fontSize: '20px',
    border: '2px solid ' + color2,
    padding: '20px 40px',
    transition: aTransitionBtn1,
    position: 'relative',
    overflow: 'hidden',
  }
  const styleButton1AMedium = {
    margin:'15px',
    textDecoration: 'none',
    color: aColorBtn1,
    fontSize: '30px',
    border: '3px solid ' + color2,
    padding: '30px 60px',
    transition: aTransitionBtn1,
    position: 'relative',
    overflow: 'hidden',
  }
  const styleButton1ALarge = {
    margin:'20px',
    textDecoration: 'none',
    color: aColorBtn1,
    fontSize: '40px',
    border: '4px solid ' + color2,
    padding: '40px 80px',
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
      {
        size === "small" ? (
          <a href={Link}
            target={Target}
            style={styleButton1ASmall}
            onMouseEnter={MouseEnterBtn1}
            onMouseLeave={MouseLeaveBtn1}
          >
            <span style={styleButton1ABefore}>{value}</span>
            {value}
          </a>
        ) : (
          size === "medium" ? (
          <a href={Link}
            target={Target}
            style={styleButton1AMedium}
            onMouseEnter={MouseEnterBtn1}
            onMouseLeave={MouseLeaveBtn1}
          >
            <span style={styleButton1ABefore}>{value}</span>
            {value}
          </a>
        ) : (
          <a href={Link}
            target={Target}
            style={styleButton1ALarge}
            onMouseEnter={MouseEnterBtn1}
            onMouseLeave={MouseLeaveBtn1}
          >
            <span style={styleButton1ABefore}>{value}</span>
            {value}
          </a>
        )
        )
      }
    </div>
  )
}

Button1.defaultProps = {
  color1:"white",
  color2:"black",
  size:"medium",
  value:"Button",
  Link:"https://Google.com/",
  Target:"_blank",
};

export default Button1;