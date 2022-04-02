import React, { useState } from 'react';

const defaultHelper = {
  colorW: "white",
  colorB: "black",
  colorR: "red",
  colorP: "rgb(255, 0, 234)",
  colorA: "rgb(aqua)",
  size: "medium",
  value: "Button",
  Link: "https://Google.com/",
  Target: "_blank"
};

const Button1 = ({
  color1,
  color2,
  value,
  size,
  Link,
  Target
}) => {
  const [aColorBtn1, setAColorBtn1] = useState(color2);
  const [aTransitionBtn1, setATransitionBtn1] = useState('1.75s');
  const [aBeforeTransformBtn1, setABeforeTransformBtn1] = useState('scale(5)');
  const [aBeforeTransitionBtn1, setABeforeTransitionBtn1] = useState('1s');
  const [aBeforeOpacityBtn1, setABeforeOpacityBtn1] = useState('0');
  const styleButton1 = {
    display: 'flex'
  };
  const styleButton1ASmall = {
    margin: '10px',
    textDecoration: 'none',
    color: aColorBtn1,
    fontSize: '20px',
    border: '2px solid ' + color2,
    padding: '20px 40px',
    transition: aTransitionBtn1,
    position: 'relative',
    overflow: 'hidden'
  };
  const styleButton1AMedium = {
    margin: '15px',
    textDecoration: 'none',
    color: aColorBtn1,
    fontSize: '30px',
    border: '3px solid ' + color2,
    padding: '30px 60px',
    transition: aTransitionBtn1,
    position: 'relative',
    overflow: 'hidden'
  };
  const styleButton1ALarge = {
    margin: '20px',
    textDecoration: 'none',
    color: aColorBtn1,
    fontSize: '40px',
    border: '4px solid ' + color2,
    padding: '40px 80px',
    transition: aTransitionBtn1,
    position: 'relative',
    overflow: 'hidden'
  };
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
  };

  const MouseEnterBtn1 = () => {
    setAColorBtn1("transparent");
    setATransitionBtn1("0.75s");
    setABeforeOpacityBtn1("1");
    setABeforeTransformBtn1("scale(1)");
    setABeforeTransitionBtn1("0.75s");
  };

  const MouseLeaveBtn1 = () => {
    setAColorBtn1(color2);
    setATransitionBtn1("1.75s");
    setABeforeOpacityBtn1("0");
    setABeforeTransformBtn1("scale(5)");
    setABeforeTransitionBtn1("1s");
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "button1",
    style: styleButton1
  }, size === "small" ? /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton1ASmall,
    onMouseEnter: MouseEnterBtn1,
    onMouseLeave: MouseLeaveBtn1
  }, /*#__PURE__*/React.createElement("span", {
    style: styleButton1ABefore
  }, value), value) : size === "medium" ? /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton1AMedium,
    onMouseEnter: MouseEnterBtn1,
    onMouseLeave: MouseLeaveBtn1
  }, /*#__PURE__*/React.createElement("span", {
    style: styleButton1ABefore
  }, value), value) : /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton1ALarge,
    onMouseEnter: MouseEnterBtn1,
    onMouseLeave: MouseLeaveBtn1
  }, /*#__PURE__*/React.createElement("span", {
    style: styleButton1ABefore
  }, value), value));
};

Button1.defaultProps = {
  color1: defaultHelper.colorW,
  color2: defaultHelper.colorB,
  size: defaultHelper.size,
  value: defaultHelper.value,
  Link: defaultHelper.Link,
  Target: defaultHelper.Target
};

const Button2 = ({
  color1,
  color2,
  color3,
  value,
  Link,
  Target,
  size
}) => {
  const [aTransitionBtn2, setATransitionBtn2] = useState('0.25s');
  const [aTransformBtn2, setATransformBtn2] = useState('30deg');
  const [aBeforeLeftBtn2, setABeforeLeftBtn2] = useState('-1%');
  const [aAfterLeftBtn2, setAAfterLeftBtn2] = useState('51%');
  const [aBeforeTopBtn2, setABeforeTopBtn2] = useState('-5px');
  const [aAfterTopBtn2, setAAfterTopBtn2] = useState('5px');
  const styleButton2 = {
    display: 'flex',
    flexWrap: 'wrap'
  };
  const styleButton2ASmall = {
    margin: '20px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textDecoration: 'none',
    letterSpacing: '5px',
    position: 'relative',
    padding: '18px 30px',
    background: 'transparent',
    color: color1,
    zIndex: '1'
  };
  const styleButton2AMedium = {
    margin: '25px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textDecoration: 'none',
    letterSpacing: '5px',
    position: 'relative',
    padding: '27px 45px',
    background: 'transparent',
    color: color1,
    zIndex: '1'
  };
  const styleButton2ALarge = {
    margin: '30px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textDecoration: 'none',
    letterSpacing: '5px',
    position: 'relative',
    padding: '36px 60px',
    background: 'transparent',
    color: color1,
    zIndex: '1'
  };
  const styleButton2ABefore = {
    position: 'absolute',
    height: '100%',
    width: '50%',
    left: aBeforeLeftBtn2,
    top: aBeforeTopBtn2,
    backgroundColor: color2,
    transform: aTransformBtn2,
    zIndex: '-1',
    transition: aTransitionBtn2
  };
  const styleButton2AAfter = {
    position: 'absolute',
    height: '100%',
    width: '50%',
    left: aAfterLeftBtn2,
    top: aAfterTopBtn2,
    backgroundColor: color3,
    transform: aTransformBtn2,
    zIndex: '-1',
    transition: aTransitionBtn2
  };

  const MouseEnterBtn2 = () => {
    setATransformBtn2('skewX(0deg)');
    setATransitionBtn2('0.5s');
    setABeforeLeftBtn2('50%');
    setABeforeTopBtn2('0%');
    setAAfterLeftBtn2('0%');
    setAAfterTopBtn2('0%');
  };

  const MouseLeaveBtn2 = () => {
    setATransformBtn2('skewX(30deg)');
    setATransitionBtn2('0.25s');
    setABeforeLeftBtn2('-1%');
    setABeforeTopBtn2('-5px');
    setAAfterLeftBtn2('51%');
    setAAfterTopBtn2('5px');
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "button2",
    style: styleButton2
  }, size === "small" ? /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton2ASmall,
    onMouseEnter: MouseEnterBtn2,
    onMouseLeave: MouseLeaveBtn2
  }, /*#__PURE__*/React.createElement("div", {
    style: styleButton2ABefore
  }), value, /*#__PURE__*/React.createElement("div", {
    style: styleButton2AAfter
  })) : size === "medium" ? /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton2AMedium,
    onMouseEnter: MouseEnterBtn2,
    onMouseLeave: MouseLeaveBtn2
  }, /*#__PURE__*/React.createElement("div", {
    style: styleButton2ABefore
  }), value, /*#__PURE__*/React.createElement("div", {
    style: styleButton2AAfter
  })) : /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton2ALarge,
    onMouseEnter: MouseEnterBtn2,
    onMouseLeave: MouseLeaveBtn2
  }, /*#__PURE__*/React.createElement("div", {
    style: styleButton2ABefore
  }), value, /*#__PURE__*/React.createElement("div", {
    style: styleButton2AAfter
  })));
};

Button2.defaultProps = {
  color1: defaultHelper.colorW,
  color2: defaultHelper.colorB,
  color3: defaultHelper.colorR,
  size: defaultHelper.size,
  value: defaultHelper.value,
  Link: defaultHelper.Link,
  Target: defaultHelper.Target
};

const Button3 = ({
  color1,
  color2,
  value,
  Link,
  Target,
  size
}) => {
  const [aColorBtn3, setAColorBtn3] = useState(color2);
  const [aBeforeTransformBtn3, setABeforeTransformBtn3] = useState('translateX(-100%)');
  const styleButton3 = {
    display: 'flex',
    flexWrap: 'wrap'
  };
  const styleButton3ASmall = {
    margin: '10px',
    textDecoration: 'none',
    padding: '20px 40px',
    color: aColorBtn3,
    fontSize: '20px',
    border: '2px solid ' + color2,
    transition: 'all 1s',
    position: 'relative',
    overflow: 'hidden'
  };
  const styleButton3AMedium = {
    margin: '10px',
    textDecoration: 'none',
    padding: '30px 60px',
    color: aColorBtn3,
    fontSize: '30px',
    border: '3px solid ' + color2,
    transition: 'all 1s',
    position: 'relative',
    overflow: 'hidden'
  };
  const styleButton3ALarge = {
    margin: '10px',
    textDecoration: 'none',
    padding: '40px 80px',
    color: aColorBtn3,
    fontSize: '40px',
    border: '4px solid ' + color2,
    transition: 'all 1s',
    position: 'relative',
    overflow: 'hidden'
  };
  const styleButton3ABefore = {
    position: 'absolute',
    left: '0%',
    top: '0%',
    height: '100%',
    width: '100%',
    backgroundColor: color2,
    transform: aBeforeTransformBtn3,
    transition: 'all 1s',
    zIndex: '-10'
  };

  const MouseEnterBtn3 = () => {
    setAColorBtn3(color1);
    setABeforeTransformBtn3('translateX(0)');
  };

  const MouseLeaveBtn3 = () => {
    setAColorBtn3(color2);
    setABeforeTransformBtn3('translateX(-100%)');
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "button3",
    style: styleButton3
  }, size === "small" ? /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton3ASmall,
    onMouseEnter: MouseEnterBtn3,
    onMouseLeave: MouseLeaveBtn3
  }, /*#__PURE__*/React.createElement("div", {
    style: styleButton3ABefore
  }), value) : size === "medium" ? /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton3AMedium,
    onMouseEnter: MouseEnterBtn3,
    onMouseLeave: MouseLeaveBtn3
  }, /*#__PURE__*/React.createElement("div", {
    style: styleButton3ABefore
  }), value) : /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton3ALarge,
    onMouseEnter: MouseEnterBtn3,
    onMouseLeave: MouseLeaveBtn3
  }, /*#__PURE__*/React.createElement("div", {
    style: styleButton3ABefore
  }), value));
};

Button3.defaultProps = {
  color1: defaultHelper.colorW,
  color2: defaultHelper.colorB,
  size: defaultHelper.size,
  value: defaultHelper.value,
  Link: defaultHelper.Link,
  Target: defaultHelper.Target
};

const Button4 = ({
  color1,
  color2,
  value,
  Link,
  Target,
  size
}) => {
  const [aTransformBtn4, setATransformBtn4] = useState('');
  const [aBoxShadowBtn4, setABoxShadowBtn4] = useState('');
  const [aBeforeTransformBtn4, setABeforeTransformBtn4] = useState('');
  const [aBeforeOpacityBtn4, setABeforeOpacityBtn4] = useState('1');
  const styleButton4 = {
    display: 'flex',
    flexWrap: 'wrap'
  };
  const styleButton4ASmall = {
    margin: '10px',
    position: 'relative',
    textDecoration: 'none',
    padding: '25px 50px',
    backgroundColor: color1,
    color: color2,
    borderRadius: '100px',
    fontSize: '24px',
    transition: 'all 0.2s',
    transform: aTransformBtn4,
    boxShadow: aBoxShadowBtn4
  };
  const styleButton4AMedium = {
    margin: '15px',
    position: 'relative',
    textDecoration: 'none',
    padding: '37.5px 75px',
    backgroundColor: color1,
    color: color2,
    borderRadius: '100px',
    fontSize: '36px',
    transition: 'all 0.2s',
    transform: aTransformBtn4,
    boxShadow: aBoxShadowBtn4
  };
  const styleButton4ALarge = {
    margin: '20px',
    position: 'relative',
    textDecoration: 'none',
    padding: '50px 100px',
    backgroundColor: color1,
    color: color2,
    borderRadius: '100px',
    fontSize: '48px',
    transition: 'all 0.2s',
    transform: aTransformBtn4,
    boxShadow: aBoxShadowBtn4
  };
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
    opacity: aBeforeOpacityBtn4
  };

  const MouseEnterBtn4 = () => {
    setATransformBtn4('translateY(-3px)');
    setABeforeTransformBtn4('scaleX(1.4) scaleX(1.6)');
    setABeforeOpacityBtn4('0');
    setABoxShadowBtn4('0 10px 20px rgba(0,0,0,0.2)');
  };

  const MouseLeaveBtn4 = () => {
    setATransformBtn4(' ');
    setABeforeTransformBtn4(' ');
    setABeforeOpacityBtn4('1');
    setABoxShadowBtn4(' ');
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "button4",
    style: styleButton4
  }, size === "small" ? /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton4ASmall,
    onMouseEnter: MouseEnterBtn4,
    onMouseLeave: MouseLeaveBtn4
  }, /*#__PURE__*/React.createElement("div", {
    style: styleButton4ABefore
  }), value) : size === "medium" ? /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton4AMedium,
    onMouseEnter: MouseEnterBtn4,
    onMouseLeave: MouseLeaveBtn4
  }, /*#__PURE__*/React.createElement("div", {
    style: styleButton4ABefore
  }), value) : /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton4ALarge,
    onMouseEnter: MouseEnterBtn4,
    onMouseLeave: MouseLeaveBtn4
  }, /*#__PURE__*/React.createElement("div", {
    style: styleButton4ABefore
  }), value));
};

Button4.defaultProps = {
  color1: defaultHelper.colorB,
  color2: defaultHelper.colorW,
  size: defaultHelper.size,
  value: defaultHelper.value,
  Link: defaultHelper.Link,
  Target: defaultHelper.Target
};

const Button5 = ({
  color1,
  color2,
  value,
  Link,
  Target,
  size
}) => {
  useState(color1);
};

const Button6 = ({
  color1,
  color2,
  value,
  Link,
  Target,
  size
}) => {
  const [aColorBtn6, setAColorBtn6] = useState(color1);
  const [aTransitionDelayBtn6, setATransitionDelayBtn6] = useState('0s');
  const [aBeforeLeftBtn6, setABeforeLeftBtn6] = useState('0%');
  const [aBeforeBoxShadowBtn6, setABeforeBoxShadowBtn6] = useState('-100px 0 0 ' + color1);
  const [aBeforeTransformBtn6, setABeforeTransformBtn6] = useState('translateY(-50%)');
  const [aOpacityBtn6, setAOpacityBtn6] = useState('0');
  const [aAfterRightBtn6, setAAfterRightBtn6] = useState('0%');
  const [aAfterBoxShadowBtn6, setAAfterBoxShadowBtn6] = useState('100px 0 0 ' + color1);
  const [aAfterTransformBtn6, setAAfterTransformBtn6] = useState('translateY(-50%)');
  const [aSpanTransitionDelayBtn6, setASpanTransitionDelayBtn6] = useState('0s');
  const [aSpanTransformBtn6, setASpanTransformBtn6] = useState('scale(0)');
  const styleButton6 = {
    display: 'flex'
  };
  const styleButton6ASmall = {
    margin: '10px',
    width: '170px',
    height: '60px',
    color: aColorBtn6,
    backgroundColor: 'transparent',
    fontSize: '20px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.5s',
    position: 'relative',
    transitionDelay: aTransitionDelayBtn6
  };
  const styleButton6AMedium = {
    margin: '10px',
    width: '220px',
    height: '80px',
    color: aColorBtn6,
    backgroundColor: 'transparent',
    fontSize: '26px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.5s',
    position: 'relative',
    transitionDelay: aTransitionDelayBtn6
  };
  const styleButton6ALarge = {
    margin: '20px',
    width: '280px',
    height: '110px',
    color: aColorBtn6,
    backgroundColor: 'transparent',
    fontSize: '32px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.5s',
    position: 'relative',
    transitionDelay: aTransitionDelayBtn6
  };
  const styleButton6ABefore = {
    position: 'absolute',
    top: '50%',
    height: '20px',
    width: '20px',
    borderRadius: '50%',
    backgroundColor: color1,
    transform: aBeforeTransformBtn6,
    transition: 'all 0.3s',
    zIndex: '-1',
    opacity: aOpacityBtn6,
    left: aBeforeLeftBtn6,
    boxShadow: aBeforeBoxShadowBtn6
  };
  const styleButton6AAfter = {
    position: 'absolute',
    top: '50%',
    height: '20px',
    width: '20px',
    borderRadius: '50%',
    backgroundColor: color1,
    transform: aAfterTransformBtn6,
    transition: 'all 0.3s',
    zIndex: '-1',
    opacity: aOpacityBtn6,
    right: aAfterRightBtn6,
    boxShadow: aAfterBoxShadowBtn6
  };
  const styleButton6Span = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: color1,
    borderRadius: '8px',
    transform: aSpanTransformBtn6,
    transition: 'all 0.3s',
    zIndex: '-1',
    transitionDelay: aSpanTransitionDelayBtn6
  };

  const MouseEnterBtn6 = () => {
    setAColorBtn6(color2);
    setATransitionDelayBtn6('0.4s');
    setABeforeLeftBtn6('50%');
    setABeforeBoxShadowBtn6('30px 0 0 ' + color1);
    setABeforeTransformBtn6('translateX(-50%) translateY(-50%)');
    setAAfterRightBtn6('50%');
    setAAfterBoxShadowBtn6('30px 0 0 ' + color1);
    setAAfterTransformBtn6('translateX(-50%) translateY(-50%)');
    setAOpacityBtn6('1');
    setASpanTransitionDelayBtn6('0.4s');
    setASpanTransformBtn6('scale(1)');
  };

  const MouseLeaveBtn6 = () => {
    setAColorBtn6(color1);
    setATransitionDelayBtn6('0s');
    setABeforeLeftBtn6('0%');
    setABeforeBoxShadowBtn6('-100px 0 0 ' + color1);
    setABeforeTransformBtn6('translateY(-50%)');
    setAAfterRightBtn6('0%');
    setAAfterBoxShadowBtn6('100px 0 0 ' + color1);
    setAAfterTransformBtn6('translateY(-50%)');
    setAOpacityBtn6('0');
    setASpanTransitionDelayBtn6('0s');
    setASpanTransformBtn6('scale(0)');
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "button6",
    style: styleButton6
  }, size === "small" ? /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton6ASmall,
    onMouseEnter: MouseEnterBtn6,
    onMouseLeave: MouseLeaveBtn6
  }, /*#__PURE__*/React.createElement("span", {
    style: styleButton6Span
  }), /*#__PURE__*/React.createElement("div", {
    style: styleButton6ABefore
  }), value, /*#__PURE__*/React.createElement("div", {
    style: styleButton6AAfter
  })) : size === "medium" ? /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton6AMedium,
    onMouseEnter: MouseEnterBtn6,
    onMouseLeave: MouseLeaveBtn6
  }, /*#__PURE__*/React.createElement("span", {
    style: styleButton6Span
  }), /*#__PURE__*/React.createElement("div", {
    style: styleButton6ABefore
  }), value, /*#__PURE__*/React.createElement("div", {
    style: styleButton6AAfter
  })) : /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton6ALarge,
    onMouseEnter: MouseEnterBtn6,
    onMouseLeave: MouseLeaveBtn6
  }, /*#__PURE__*/React.createElement("span", {
    style: styleButton6Span
  }), /*#__PURE__*/React.createElement("div", {
    style: styleButton6ABefore
  }), value, /*#__PURE__*/React.createElement("div", {
    style: styleButton6AAfter
  })));
};

Button6.defaultProps = {
  color1: defaultHelper.colorB,
  color2: defaultHelper.colorW,
  size: defaultHelper.size,
  value: defaultHelper.value,
  Link: defaultHelper.Link,
  Target: defaultHelper.Target
};

export { Button1, Button2, Button3, Button4, Button5, Button6 };
