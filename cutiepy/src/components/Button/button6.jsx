import React, { useState } from 'react'
import defaultHelper from '../defaultHelper';


const Button6 = ({ color1, color2, value, Link, Target, size }) => {

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
        position:'relative',
        margin: (size / 10) + 'px',
        zIndex: '100',
    }
    const styleButton6A = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: (size / 8) + 'px',
        width: size + 'px',
        height: (size / 3) + 'px',
        color: aColorBtn6,
        backgroundColor: 'transparent',
        textDecoration: 'none',
        textTransform: 'uppercase',
        textAlign: 'center',
        transition: 'all 0.5s',
        position: 'relative',
        transitionDelay: aTransitionDelayBtn6,
        zIndex: '1',
    }
    const styleButton6ABefore = {
        position: 'absolute',
        top: '50%',
        height: (size / 10) + 'px',
        width: (size / 10) + 'px',
        borderRadius: '50%',
        backgroundColor: color1,
        transform: aBeforeTransformBtn6,
        transition: 'all 0.3s',
        zIndex: '-1',
        opacity: aOpacityBtn6,
        left: aBeforeLeftBtn6,
        boxShadow: aBeforeBoxShadowBtn6,
    }
    const styleButton6AAfter = {
        position: 'absolute',
        top: '50%',
        height: (size / 10) + 'px',
        width: (size / 10) + 'px',
        borderRadius: '50%',
        backgroundColor: color1,
        transform: aAfterTransformBtn6,
        transition: 'all 0.3s',
        zIndex: '-1',
        opacity: aOpacityBtn6,
        right: aAfterRightBtn6,
        boxShadow: aAfterBoxShadowBtn6,
    }

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
        transitionDelay: aSpanTransitionDelayBtn6,
    }

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
    }
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
    }

    return (
        <div
            className="button6"
            style={styleButton6}
        >            <a
            href={Link}
            target={Target}
            style={styleButton6A}
            onMouseEnter={MouseEnterBtn6}
            onMouseLeave={MouseLeaveBtn6}
        >
                <span style={styleButton6Span} />
                <div style={styleButton6ABefore} />
                {value}
                <div style={styleButton6AAfter} />
            </a>
        </div>
    )
}

Button6.defaultProps = {
    color1: defaultHelper.colorBlack,
    color2: defaultHelper.colorWhite,
    size: defaultHelper.size,
    value: defaultHelper.value,
    Link: defaultHelper.Link,
    Target: defaultHelper.Target,
};

export default Button6;