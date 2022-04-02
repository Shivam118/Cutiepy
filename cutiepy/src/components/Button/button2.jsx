import React, { useState } from 'react'
import defaultHelper from '../defaultHelper';

const Button2 = ({ color1, color2, color3, value, Link, Target, size }) => {

  const [aTransitionBtn2, setATransitionBtn2] = useState('0.25s');
  const [aTransformBtn2, setATransformBtn2] = useState('30deg');
  const [aBeforeLeftBtn2, setABeforeLeftBtn2] = useState('-1%');
  const [aAfterLeftBtn2, setAAfterLeftBtn2] = useState('51%');
  const [aBeforeTopBtn2, setABeforeTopBtn2] = useState('-5px');
  const [aAfterTopBtn2, setAAfterTopBtn2] = useState('5px');



  const styleButton2 = {
    display: 'flex',
    flexWrap: 'wrap',
  }

  const styleButton2ASmall = {
    margin:'20px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textDecoration: 'none',
    letterSpacing: '5px',
    position: 'relative',
    padding: '18px 30px',
    background: 'transparent',
    color: color1,
    zIndex: '1',
  }
  const styleButton2AMedium = {
    margin:'25px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textDecoration: 'none',
    letterSpacing: '5px',
    position: 'relative',
    padding: '27px 45px',
    background: 'transparent',
    color: color1,
    zIndex: '1',
  }
  const styleButton2ALarge = {
    margin:'30px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textDecoration: 'none',
    letterSpacing: '5px',
    position: 'relative',
    padding: '36px 60px',
    background: 'transparent',
    color: color1,
    zIndex: '1',
  }

  const styleButton2ABefore = {
    position: 'absolute',
    height: '100%',
    width: '50%',
    left: aBeforeLeftBtn2,
    top: aBeforeTopBtn2,
    backgroundColor: color2,
    transform: aTransformBtn2,
    zIndex: '-1',
    transition: aTransitionBtn2,
  }

  const styleButton2AAfter = {
    position: 'absolute',
    height: '100%',
    width: '50%',
    left: aAfterLeftBtn2,
    top: aAfterTopBtn2,
    backgroundColor: color3,
    transform: aTransformBtn2,
    zIndex: '-1',
    transition: aTransitionBtn2,
  }

  const MouseEnterBtn2 = () => {
    setATransformBtn2('skewX(0deg)');
    setATransitionBtn2('0.5s');
    setABeforeLeftBtn2('50%');
    setABeforeTopBtn2('0%');
    setAAfterLeftBtn2('0%');
    setAAfterTopBtn2('0%');
  }
  const MouseLeaveBtn2 = () => {
    setATransformBtn2('skewX(30deg)');
    setATransitionBtn2('0.25s');
    setABeforeLeftBtn2('-1%');
    setABeforeTopBtn2('-5px');
    setAAfterLeftBtn2('51%');
    setAAfterTopBtn2('5px');

  }
  return (
    <div
      className="button2"
      style={styleButton2}
    >
      {
        size === "small" ? (
          <a
            href={Link}
            target={Target}
            style={styleButton2ASmall}
            onMouseEnter={MouseEnterBtn2}
            onMouseLeave={MouseLeaveBtn2}
          >
            <div style={styleButton2ABefore} />
            {value}
            <div style={styleButton2AAfter} />
          </a>
        ) : (
          size === "medium" ? (
            <a
              href={Link}
              target={Target}
              style={styleButton2AMedium}
              onMouseEnter={MouseEnterBtn2}
              onMouseLeave={MouseLeaveBtn2}
            >
              <div style={styleButton2ABefore} />
              {value}
              <div style={styleButton2AAfter} />
            </a>
          ) : (
            <a
              href={Link}
              target={Target}
              style={styleButton2ALarge}
              onMouseEnter={MouseEnterBtn2}
              onMouseLeave={MouseLeaveBtn2}
            >
              <div style={styleButton2ABefore} />
              {value}
              <div style={styleButton2AAfter} />
            </a>
          )
        )
      }
    </div>
  )
}

Button2.defaultProps = {
  color1: defaultHelper.colorW,
  color2: defaultHelper.colorB,
  color3: defaultHelper.colorR,
  size: defaultHelper.size,
  value: defaultHelper.value,
  Link: defaultHelper.Link,
  Target: defaultHelper.Target,
};

export default Button2;
