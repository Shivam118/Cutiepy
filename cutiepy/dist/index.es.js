import React, { useState } from 'react';

const defaultHelper = {
  colorWhite: "white",
  colorBlack: "black",
  colorRed: "#f7564a",
  colorOrange: "#f79e4a",
  colorPink: "#f06ec5",
  colorGrey: "#333333",
  colorCyan: "#00FFFF",
  colorYellow: "#f0f06e",
  colorBlue: "#6e75f0",
  colorSkyblue: "#87CEEB",
  size: "300",
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
    // display: 'flex',
    position: 'relative',
    margin: size / 10 + 'px',
    zIndex: '100'
  };
  const styleButton1A = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: aColorBtn1,
    fontSize: size / 6 + 'px',
    border: size / 95 + 'px solid ' + color2,
    width: size + 'px',
    height: size / 3 + 'px',
    transition: aTransitionBtn1,
    position: 'relative',
    overflow: 'hidden',
    zIndex: '1'
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
    overflow: 'hidden',
    zIndex: '-1'
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
  }, /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton1A,
    onMouseEnter: MouseEnterBtn1,
    onMouseLeave: MouseLeaveBtn1
  }, /*#__PURE__*/React.createElement("span", {
    style: styleButton1ABefore
  }, value), value));
};

Button1.defaultProps = {
  color1: defaultHelper.colorWhite,
  color2: defaultHelper.colorBlack,
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
    // display: 'flex',
    position: 'relative',
    margin: size / 9 + 'px',
    zIndex: '100'
  };
  const styleButton2A = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: size / 8 + 'px',
    width: size + 'px',
    height: size / 3 + 'px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textDecoration: 'none',
    letterSpacing: '5px',
    position: 'relative',
    background: 'transparent',
    color: color1,
    zIndex: '1'
  };
  const styleButton2ABefore = {
    display: 'flex',
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
    display: 'flex',
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
  }, /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton2A,
    onMouseEnter: MouseEnterBtn2,
    onMouseLeave: MouseLeaveBtn2
  }, /*#__PURE__*/React.createElement("div", {
    style: styleButton2ABefore
  }), value, /*#__PURE__*/React.createElement("div", {
    style: styleButton2AAfter
  })));
};

Button2.defaultProps = {
  color1: defaultHelper.colorWhite,
  color2: defaultHelper.colorBlack,
  color3: defaultHelper.colorRed,
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
    // display: 'flex',
    position: 'relative',
    margin: size / 10 + 'px',
    zIndex: '100'
  };
  const styleButton3A = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: size / 8 + 'px',
    width: size + 'px',
    height: size / 3 + 'px',
    border: size / 95 + 'px solid ' + color2,
    textDecoration: 'none',
    color: aColorBtn3,
    transition: 'all 1s',
    position: 'relative',
    overflow: 'hidden',
    zIndex: '1'
  };
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
    zIndex: '-1'
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
  }, /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton3A,
    onMouseEnter: MouseEnterBtn3,
    onMouseLeave: MouseLeaveBtn3
  }, /*#__PURE__*/React.createElement("div", {
    style: styleButton3ABefore
  }), value));
};

Button3.defaultProps = {
  color1: defaultHelper.colorWhite,
  color2: defaultHelper.colorBlack,
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
    // display: 'flex',
    position: 'relative',
    margin: size / 10 + 'px',
    zIndex: '100'
  };
  const styleButton4A = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: size / 8 + 'px',
    width: size + 'px',
    height: size / 3 + 'px',
    border: size / 95 + 'px solid ' + color1,
    position: 'relative',
    textDecoration: 'none',
    backgroundColor: color1,
    color: color2,
    borderRadius: '100px',
    transition: 'all 0.2s',
    transform: aTransformBtn4,
    boxShadow: aBoxShadowBtn4,
    zIndex: '1'
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
  }, /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton4A,
    onMouseEnter: MouseEnterBtn4,
    onMouseLeave: MouseLeaveBtn4
  }, /*#__PURE__*/React.createElement("div", {
    style: styleButton4ABefore
  }), value));
};

Button4.defaultProps = {
  color1: defaultHelper.colorBlack,
  color2: defaultHelper.colorWhite,
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
  const [aColorBtn5, setAColorBtn5] = useState(color1);
  const styleButton5 = {
    // display: 'flex',
    position: 'relative',
    margin: size / 10 + 'px',
    zIndex: '100'
  };
  const styleButton5A = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: size / 8 + 'px',
    width: size + 'px',
    height: size / 3 + 'px',
    border: size / 95 + 'px solid ' + color2,
    textDecoration: 'none',
    color: aColorBtn5,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    position: 'relative',
    zIndex: '1'
  };

  const MouseEnterBtn5 = () => {
    setAColorBtn5(color2);
  };

  const MouseLeaveBtn5 = () => {
    setAColorBtn5(color1);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "button5",
    style: styleButton5
  }, /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton5A,
    onMouseEnter: MouseEnterBtn5,
    onMouseLeave: MouseLeaveBtn5
  }, value));
};

Button5.defaultProps = {
  color1: defaultHelper.colorBlack,
  color2: defaultHelper.colorWhite,
  size: defaultHelper.size,
  value: defaultHelper.value,
  Link: defaultHelper.Link,
  Target: defaultHelper.Target
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
    // display: 'flex',
    position: 'relative',
    margin: size / 10 + 'px',
    zIndex: '100'
  };
  const styleButton6A = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: size / 8 + 'px',
    width: size + 'px',
    height: size / 3 + 'px',
    color: aColorBtn6,
    backgroundColor: 'transparent',
    textDecoration: 'none',
    textTransform: 'uppercase',
    textAlign: 'center',
    transition: 'all 0.5s',
    position: 'relative',
    transitionDelay: aTransitionDelayBtn6,
    zIndex: '1'
  };
  const styleButton6ABefore = {
    position: 'absolute',
    top: '50%',
    height: size / 10 + 'px',
    width: size / 10 + 'px',
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
    height: size / 10 + 'px',
    width: size / 10 + 'px',
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
  }, "            ", /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton6A,
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
  color1: defaultHelper.colorBlack,
  color2: defaultHelper.colorWhite,
  size: defaultHelper.size,
  value: defaultHelper.value,
  Link: defaultHelper.Link,
  Target: defaultHelper.Target
};

const Button7 = ({
  color1,
  color2,
  color3,
  color4,
  value,
  Link,
  Target,
  size
}) => {
  const [aStyleColorBtn7, setAStyleColorBtn7] = useState(color2);
  const [aStyleBeforeTopBtn7, setAStyleBeforeTopBtn7] = useState(-1 * (size / 75) + 'px');
  const [aStyleBeforeTransformBtn7, setAStyleBeforeTransformBtn7] = useState('');
  const [aStyleBeforeLeftBtn7, setAStyleBeforeLeftBtn7] = useState(-1 * (size / 75) + 'px');
  const [aStyleAfterLeftBtn7, setAStyleAfterLeftBtn7] = useState(size / 75 + 'px');
  const [aStyleAfterTopBtn7, setAStyleAfterTopBtn7] = useState(size / 75 + 'px');
  const [aStyleAfterTransformBtn7, setAStyleAfterTransformBtn7] = useState('');
  const styleButton7 = {
    // display: 'flex',
    position: 'relative',
    margin: size / 10 + 'px',
    zIndex: '100'
  };
  const styleButton7A = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: size / 8 + 'px',
    width: size + 'px',
    height: size / 3 + 'px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    lineHeight: '60px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    position: 'relative',
    transition: 'all 0.2s',
    color: aStyleColorBtn7,
    zIndex: '1'
  };
  const styleButton7ABefore = {
    position: 'absolute',
    top: aStyleBeforeTopBtn7,
    left: aStyleBeforeLeftBtn7,
    width: '100%',
    height: '100%',
    backgroundColor: color4,
    zIndex: '-1',
    mixBlendMode: 'multiply',
    transition: 'all 0.2s',
    transformOrigin: 'top',
    transform: aStyleBeforeTransformBtn7
  };
  const styleButton7AAfter = {
    position: 'absolute',
    top: aStyleAfterTopBtn7,
    left: aStyleAfterLeftBtn7,
    width: '100%',
    height: '100%',
    backgroundColor: color3,
    zIndex: '-1',
    mixBlendMode: 'multiply',
    transition: 'all 0.2s',
    transformOrigin: 'bottom',
    transform: aStyleAfterTransformBtn7
  };

  const MouseEnterBtn7 = () => {
    setAStyleColorBtn7(color1);
    setAStyleBeforeTopBtn7(-1 * (size / 37.5) + 'px');
    setAStyleAfterTopBtn7(size / 37.5 + 'px');
    setAStyleBeforeLeftBtn7('0px');
    setAStyleAfterLeftBtn7('0px');
    setAStyleBeforeTransformBtn7('perspective(1000px) rotateX(75deg)');
    setAStyleAfterTransformBtn7('perspective(1000px) rotateX(-75deg)');
  };

  const MouseLeaveBtn7 = () => {
    setAStyleColorBtn7(color2);
    setAStyleBeforeTopBtn7(-1 * (size / 75) + 'px');
    setAStyleAfterTopBtn7(size / 75 + 'px');
    setAStyleBeforeLeftBtn7(-1 * (size / 75) + 'px');
    setAStyleAfterLeftBtn7(size / 75 + 'px');
    setAStyleBeforeTransformBtn7('');
    setAStyleAfterTransformBtn7('');
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "button7",
    style: styleButton7
  }, /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton7A,
    onMouseEnter: MouseEnterBtn7,
    onMouseLeave: MouseLeaveBtn7
  }, /*#__PURE__*/React.createElement("div", {
    style: styleButton7ABefore
  }), value, /*#__PURE__*/React.createElement("div", {
    style: styleButton7AAfter
  })));
};

Button7.defaultProps = {
  color1: defaultHelper.colorBlack,
  color2: defaultHelper.colorWhite,
  color3: defaultHelper.colorRed,
  color4: defaultHelper.colorSkyblue,
  size: defaultHelper.size,
  value: defaultHelper.value,
  Link: defaultHelper.Link,
  Target: defaultHelper.Target
};

const Button8 = ({
  color1,
  color2,
  value,
  Link,
  Target,
  size
}) => {
  const [aStyleColorBtn8, setAStyleColorBtn8] = useState(color1);
  const [aStyleBeforeOpacityBtn8, setAStyleBeforeOpacityBtn8] = useState('0');
  const [aStyleBeforeTransformBtn8, setAStyleBeforeTransformBtn8] = useState('');
  const [aStyleBeforeSpanFontSizeBtn8, setAStyleBeforeSpanFontSizeBtn8] = useState(size / 8 + 'px');
  const [aStyleBeforeSpanTransformBtn8, setAStyleBeforeSpanTransformBtn8] = useState('');
  const styleButton8 = {
    // display: 'flex',
    position: 'relative',
    margin: size / 10 + 'px',
    zIndex: '100'
  };
  const styleButton8A = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: size / 8 + 'px',
    width: size + 'px',
    height: size / 3 + 'px',
    border: size / 95 + 'px solid ' + color1,
    textDecoration: 'none',
    color: aStyleColorBtn8,
    position: 'relative',
    transition: 'all 0.2s',
    textTransform: 'uppercase',
    zIndex: '1'
  };
  const styleButton8ABefore = {
    position: 'absolute',
    top: '0%',
    left: '0%',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: aStyleBeforeOpacityBtn8,
    transition: 'all 0.8s',
    transform: aStyleBeforeTransformBtn8,
    zIndex: '-1'
  };
  const styleButton8ASpan = {
    position: 'relative',
    zIndex: '1',
    fontSize: aStyleBeforeSpanFontSizeBtn8,
    color: aStyleColorBtn8,
    transition: 'all 0.2s',
    transform: aStyleBeforeSpanTransformBtn8
  };

  const MouseEnterBtn8 = () => {
    setAStyleColorBtn8(color2);
    setAStyleBeforeTransformBtn8('rotate(10deg)');
    setAStyleBeforeOpacityBtn8('1');
    setAStyleBeforeSpanFontSizeBtn8(size / 4 + 'px');
    setAStyleBeforeSpanTransformBtn8('translateY(-' + size / 75 + 'px) rotate(360deg)');
  };

  const MouseLeaveBtn8 = () => {
    setAStyleColorBtn8(color1);
    setAStyleBeforeTransformBtn8('');
    setAStyleBeforeOpacityBtn8('0');
    setAStyleBeforeSpanFontSizeBtn8(size / 8 + 'px');
    setAStyleBeforeSpanTransformBtn8('');
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "button8",
    style: styleButton8
  }, /*#__PURE__*/React.createElement("a", {
    href: Link,
    target: Target,
    style: styleButton8A,
    onMouseEnter: MouseEnterBtn8,
    onMouseLeave: MouseLeaveBtn8
  }, /*#__PURE__*/React.createElement("span", {
    style: styleButton8ASpan
  }, "B"), /*#__PURE__*/React.createElement("span", {
    style: styleButton8ABefore
  }), value));
};

Button8.defaultProps = {
  color1: defaultHelper.colorBlack,
  color2: defaultHelper.colorWhite,
  size: defaultHelper.size,
  value: 'utton',
  Link: defaultHelper.Link,
  Target: defaultHelper.Target
};

export { Button1, Button2, Button3, Button4, Button5, Button6, Button7, Button8 };
