import React, { useState } from 'react'

const Button3 = (props) => {

  const { color1, color2, value, Link, Target, size } = props;

  const [aColorBtn3, setAColorBtn3] = useState(color2);
  const [aBeforeTransformBtn3, setABeforeTransformBtn3] = useState('translateX(-100%)');

// .button3 a {
    // text-decoration: none;
    // padding: 40px 80px;
    // color: var(--b3color1);
    // font-size: 40px;
    // border: 4px solid var(--b3color1);
    // transition: all 1s;
    // position: relative;
    // overflow: hidden;
// }
// .button3 a:before {
    // content: '';
    // position: absolute;
    // left: 0%;
    // top: 0%;
    // height: 100%;
    // width: 100%;
    // background-color: var(--b3color1);
    // transform: translateX(-100%);
    // transition: all 1s;
    // z-index: -10;
// }
// .button3 a:hover:before {
//     transform: translateX(0);
// }
// .button3 a:hover {
//     color: var(--b3color2);
// }

  const styleButton3 = {
    display: 'flex',
    flexWrap: 'wrap',
  }

  const styleButton3ASmall = {
    margin:'10px',
    textDecoration: 'none',
    padding: '20px 40px',
    color: aColorBtn3,
    fontSize: '20px',
    border: '2px solid ' + color2,
    transition: 'all 1s',
    position: 'relative',
    overflow: 'hidden'
  }
  const styleButton3AMedium = {
    margin:'10px',
    textDecoration: 'none',
    padding: '30px 60px',
    color: aColorBtn3,
    fontSize: '30px',
    border: '3px solid ' + color2,
    transition: 'all 1s',
    position: 'relative',
    overflow: 'hidden'
  }
  const styleButton3ALarge = {
    margin:'10px',
    textDecoration: 'none',
    padding: '40px 80px',
    color: aColorBtn3,
    fontSize: '40px',
    border: '4px solid ' + color2,
    transition: 'all 1s',
    position: 'relative',
    overflow: 'hidden'
  }

  const styleButton3ABefore = {
    position: 'absolute',
    left: '0%',
    top: '0%',
    height: '100%',
    width: '100%',
    backgroundColor: color2,
    transform: aBeforeTransformBtn3,
    transition: 'all 1s',
    zIndex: '-10',
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
      {
        size === "small" ? (
          <a
            href={Link}
            target={Target}
            style={styleButton3ASmall}
            onMouseEnter={MouseEnterBtn3}
            onMouseLeave={MouseLeaveBtn3}
          >
            <div style={styleButton3ABefore} />
            {value}
          </a>
        ) : (
          size === "medium" ? (
            <a
              href={Link}
              target={Target}
              style={styleButton3AMedium}
              onMouseEnter={MouseEnterBtn3}
              onMouseLeave={MouseLeaveBtn3}
            >
              <div style={styleButton3ABefore} />
              {value}
            </a>
          ) : (
            <a
              href={Link}
              target={Target}
              style={styleButton3ALarge}
              onMouseEnter={MouseEnterBtn3}
              onMouseLeave={MouseLeaveBtn3}
            >
              <div style={styleButton3ABefore} />
              {value}
            </a>
          )
        )
      }
    </div>
  )
}

Button3.defaultProps = {
  color1: "white",
  color2: "black",
  size: "medium",
  value: "Button",
  Link: "https://Google.com/",
  Target: "_blank",
};

export default Button3;