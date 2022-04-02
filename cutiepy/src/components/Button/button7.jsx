import React, { useState } from 'react'
import defaultHelper from '../defaultHelper';


const Button7 = ({ color1, color2, color3, color4, value, Link, Target, size }) => {

    const [aStyleColorBtn7, setAStyleColorBtn7] = useState(color2);
    const [aStyleBeforeTopBtn7, setAStyleBeforeTopBtn7] = useState('-3px');
    const [aStyleBeforeTransformBtn7, setAStyleBeforeTransformBtn7] = useState('');
    const [aStyleBeforeLeftBtn7, setAStyleBeforeLeftBtn7] = useState('-3px');
    const [aStyleAfterLeftBtn7, setAStyleAfterLeftBtn7] = useState('3px');
    const [aStyleAfterTopBtn7, setAStyleAfterTopBtn7] = useState('3px');
    const [aStyleAfterTransformBtn7, setAStyleAfterTransformBtn7] = useState('');


    const styleButton7 = {
        display: 'flex',
    }

    const styleButton7ASmall = {
        margin:'10px',
        width: '300px',
        height: '60px',
        textDecoration: 'none',
        textTransform: 'uppercase',
        textAlign: 'center',
        lineHeight: '60px',
        fontWeight: 'bold',
        letterSpacing: '2px',
        position: 'relative',
        transition: 'all 0.2s',
        color: aStyleColorBtn7,
    }
    const styleButton7AMedium = {
        margin:'15px',
        width: '300px',
        height: '60px',
        textDecoration: 'none',
        textTransform: 'uppercase',
        textAlign: 'center',
        lineHeight: '60px',
        fontWeight: 'bold',
        letterSpacing: '2px',
        position: 'relative',
        transition: 'all 0.2s',
        color: aStyleColorBtn7,
    }
    const styleButton7ALarge = {
        margin:'20px',
        width: '300px',
        height: '60px',
        textDecoration: 'none',
        textTransform: 'uppercase',
        textAlign: 'center',
        lineHeight: '60px',
        fontWeight: 'bold',
        letterSpacing: '2px',
        position: 'relative',
        transition: 'all 0.2s',
        color: aStyleColorBtn7,
    }

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
        transform: aStyleBeforeTransformBtn7,
    }
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
        transform: aStyleAfterTransformBtn7,
    }

    const MouseEnterBtn7 = () => {
        setAStyleColorBtn7(color1);
        setAStyleBeforeTopBtn7('-6px');
        setAStyleAfterTopBtn7('6px');
        setAStyleBeforeLeftBtn7('0px');
        setAStyleAfterLeftBtn7('0px');
        setAStyleBeforeTransformBtn7('perspective(1000px) rotateX(75deg)');
        setAStyleAfterTransformBtn7('perspective(1000px) rotateX(-75deg)');
    }
    const MouseLeaveBtn7 = () => {
        setAStyleColorBtn7(color2);
        setAStyleBeforeTopBtn7('-3px');
        setAStyleAfterTopBtn7('3px');
        setAStyleBeforeLeftBtn7('-3px');
        setAStyleAfterLeftBtn7('3px');
        setAStyleBeforeTransformBtn7('');
        setAStyleAfterTransformBtn7('');
    }

    return (
        <div
            className="button7"
            style={styleButton7}
        >
            {
                size === "small" ? (
                    <a
                        href={Link}
                        target={Target}
                        style={styleButton7ASmall}
                        onMouseEnter={MouseEnterBtn7}
                        onMouseLeave={MouseLeaveBtn7}
                    >
                        <div style={styleButton7ABefore} />
                        {value}
                        <div style={styleButton7AAfter} />
                    </a>
                ) : (
                    size === "medium" ? (
                        <a
                            href={Link}
                            target={Target}
                            style={styleButton7AMedium}
                            onMouseEnter={MouseEnterBtn7}
                            onMouseLeave={MouseLeaveBtn7}
                        >
                            <div style={styleButton7ABefore} />
                            {value}
                            <div style={styleButton7AAfter} />
                        </a>
                    ) : (
                        <a
                            href={Link}
                            target={Target}
                            style={styleButton7ALarge}
                            onMouseEnter={MouseEnterBtn7}
                            onMouseLeave={MouseLeaveBtn7}
                        >
                            <div style={styleButton7ABefore} />
                            {value}
                            <div style={styleButton7AAfter} />
                        </a>
                    )
                )
            }
        </div>
    )
}

Button7.defaultProps = {
    color1: defaultHelper.colorB,
    color2: defaultHelper.colorW,
    color3: defaultHelper.colorP,
    color4: defaultHelper.colorCyan,
    size: defaultHelper.size,
    value: defaultHelper.value,
    Link: defaultHelper.Link,
    Target: defaultHelper.Target,
};

export default Button7;