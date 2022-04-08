import React, { useState } from 'react'
import defaultHelper from '../defaultHelper';

const Button8 = ({ color1, color2, value, Link, Target, size }) => {

    const [aStyleColorBtn8, setAStyleColorBtn8] = useState(color1);
    const [aStyleBeforeOpacityBtn8, setAStyleBeforeOpacityBtn8] = useState('0');
    const [aStyleBeforeTransformBtn8, setAStyleBeforeTransformBtn8] = useState('');
    const [aStyleBeforeSpanFontSizeBtn8, setAStyleBeforeSpanFontSizeBtn8] = useState((size / 8) + 'px');
    const [aStyleBeforeSpanTransformBtn8, setAStyleBeforeSpanTransformBtn8] = useState('');

    const styleButton8 = {
        // display: 'flex',
        position:'relative',
        margin: (size / 10) + 'px',
        zIndex:'100',
    }
    const styleButton8A = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: (size / 8) + 'px',
        width: size + 'px',
        height: (size / 3) + 'px',
        border: (size / 95) + 'px solid ' + color1,
        textDecoration: 'none',
        color: aStyleColorBtn8,
        position: 'relative',
        transition: 'all 0.2s',
        textTransform: 'uppercase',
        zIndex:'1',
    }

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
        zIndex: '-1',
    }
    const styleButton8ASpan = {
        position: 'relative',
        zIndex:'1',
        fontSize: aStyleBeforeSpanFontSizeBtn8,
        color: aStyleColorBtn8,
        transition: 'all 0.2s',
        transform: aStyleBeforeSpanTransformBtn8,
    }

    const MouseEnterBtn8 = () => {
        setAStyleColorBtn8(color2);
        setAStyleBeforeTransformBtn8('rotate(10deg)');
        setAStyleBeforeOpacityBtn8('1');
        setAStyleBeforeSpanFontSizeBtn8((size / 4) + 'px');
        setAStyleBeforeSpanTransformBtn8('translateY(-'+ (size/75) +'px) rotate(360deg)');
    }
    const MouseLeaveBtn8 = () => {
        setAStyleColorBtn8(color1);
        setAStyleBeforeTransformBtn8('');
        setAStyleBeforeOpacityBtn8('0');
        setAStyleBeforeSpanFontSizeBtn8((size / 8) + 'px');
        setAStyleBeforeSpanTransformBtn8('');

    }

    return (
        <div
            className="button8"
            style={styleButton8}
        >
            <a
                href={Link}
                target={Target}
                style={styleButton8A}
                onMouseEnter={MouseEnterBtn8}
                onMouseLeave={MouseLeaveBtn8}
            >
                <span style={styleButton8ASpan}>
                    B
                </span>
                <span style={styleButton8ABefore} />
                {value}
            </a>
        </div>
    )
}
Button8.defaultProps = {
    color1: defaultHelper.colorBlack,
    color2: defaultHelper.colorWhite,
    size: defaultHelper.size,
    value: 'utton',
    Link: defaultHelper.Link,
    Target: defaultHelper.Target,
};

export default Button8;