import React, { useState } from 'react'
import defaultHelper from '../defaultHelper';
const Button4 = (props) => {

  const { color1, color2, value, Link, Target, size } = props;

  const [aTransformBtn4, setATransformBtn4] = useState('');
  const [aBoxShadowBtn4, setABoxShadowBtn4] = useState('');
  const [aBeforeTransformBtn4, setABeforeTransformBtn4] = useState('');
  const [aBeforeOpacityBtn4, setABeforeOpacityBtn4] = useState('1');


  const styleButton4 = {
    display: 'flex',
    flexWrap: 'wrap',
  }

  const styleButton4ASmall = {
    margin:'10px',
    position: 'relative',
    textDecoration: 'none',
    padding: '25px 50px',
    backgroundColor: color1,
    color: color2,
    borderRadius: '100px',
    fontSize: '24px',
    transition: 'all 0.2s',
    transform: aTransformBtn4,
    boxShadow: aBoxShadowBtn4,
  }
  const styleButton4AMedium = {
    margin:'15px',
    position: 'relative',
    textDecoration: 'none',
    padding: '37.5px 75px',
    backgroundColor: color1,
    color: color2,
    borderRadius: '100px',
    fontSize: '36px',
    transition: 'all 0.2s',
    transform: aTransformBtn4,
    boxShadow: aBoxShadowBtn4,
  }
  const styleButton4ALarge = {
    margin:'20px',
    position: 'relative',
    textDecoration: 'none',
    padding: '50px 100px',
    backgroundColor: color1,
    color: color2,
    borderRadius: '100px',
    fontSize: '48px',
    transition: 'all 0.2s',
    transform: aTransformBtn4,
    boxShadow: aBoxShadowBtn4,
  }
  
  const styleButton4ABefore = {
    position: 'absolute',
    top: '0%',
    left: '0%',
    width: '100%',
    height: '100%',
    backgroundColor: color1,
    borderRadius: '100px',
    transition: 'all 0.4s',
    zIndex: '-1',
    transform: aBeforeTransformBtn4,
    opacity: aBeforeOpacityBtn4,
  }

  const MouseEnterBtn4 = () => {
    setATransformBtn4('translateY(-3px)');
    setABeforeTransformBtn4('scaleX(1.4) scaleX(1.6)');
    setABeforeOpacityBtn4('0');
    setABoxShadowBtn4('0 10px 20px rgba(0,0,0,0.2)');
  }
  const MouseLeaveBtn4 = () => {
    setATransformBtn4(' ');
    setABeforeTransformBtn4(' ');
    setABeforeOpacityBtn4('1');
    setABoxShadowBtn4(' ');
  }

  return (
    <div
      className="button4"
      style={styleButton4}
    >
      {
        size === "small" ? (
          <a
            href={Link}
            target={Target}
            style={styleButton4ASmall}
            onMouseEnter={MouseEnterBtn4}
            onMouseLeave={MouseLeaveBtn4}
          >
            <div style={styleButton4ABefore} />
            {value}
          </a>
        ) : (
          size === "medium" ? (
            <a
              href={Link}
              target={Target}
              style={styleButton4AMedium}
              onMouseEnter={MouseEnterBtn4}
              onMouseLeave={MouseLeaveBtn4}
            >
              <div style={styleButton4ABefore} />
              {value}
            </a>
          ) : (
            <a
              href={Link}
              target={Target}
              style={styleButton4ALarge}
              onMouseEnter={MouseEnterBtn4}
              onMouseLeave={MouseLeaveBtn4}
            >
              <div style={styleButton4ABefore} />
              {value}
            </a>
          )
        )
      }
    </div>
  )
}

Button4.defaultProps = {
  color1: defaultHelper.colorB,
  color2: defaultHelper.colorW,
  size: defaultHelper.size,
  value: defaultHelper.value,
  Link: defaultHelper.Link,
  Target: defaultHelper.Target,
};

export default Button4;