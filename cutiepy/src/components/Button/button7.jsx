import React, { useState } from 'react'
import defaultHelper from '../defaultHelper';


const Button7 = ({ color1, color2, color3, color4, value, Link, Target, size }) => {

    const [aStyleColorBtn7, setAStyleColorBtn7] = useState(color2);
    const [aStyleBeforeTopBtn7, setAStyleBeforeTopBtn7] = useState(-1*(size/75) + 'px');
    const [aStyleBeforeTransformBtn7, setAStyleBeforeTransformBtn7] = useState('');
    const [aStyleBeforeLeftBtn7, setAStyleBeforeLeftBtn7] = useState(-1*(size/75) + 'px');
    const [aStyleAfterLeftBtn7, setAStyleAfterLeftBtn7] = useState((size/75) + 'px');
    const [aStyleAfterTopBtn7, setAStyleAfterTopBtn7] = useState((size/75) + 'px');
    const [aStyleAfterTransformBtn7, setAStyleAfterTransformBtn7] = useState('');


    const styleButton7 = {
        // display: 'flex',
        position:'relative',
        margin: (size / 10) + 'px',
        zIndex:'100',
    }
    const styleButton7A = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: (size / 8) + 'px',
        width: size + 'px',
        height: (size / 3) + 'px',
        textDecoration: 'none',
        textTransform: 'uppercase',
        lineHeight: '60px',
        fontWeight: 'bold',
        letterSpacing: '2px',
        position: 'relative',
        transition: 'all 0.2s',
        color: aStyleColorBtn7,
        zIndex: '1',
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
        setAStyleBeforeTopBtn7(-1*(size/37.5) + 'px');
        setAStyleAfterTopBtn7((size/37.5) + 'px');
        setAStyleBeforeLeftBtn7('0px');
        setAStyleAfterLeftBtn7('0px');
        setAStyleBeforeTransformBtn7('perspective(1000px) rotateX(75deg)');
        setAStyleAfterTransformBtn7('perspective(1000px) rotateX(-75deg)');
    }
    const MouseLeaveBtn7 = () => {
        setAStyleColorBtn7(color2);
        setAStyleBeforeTopBtn7(-1*(size/75) + 'px');
        setAStyleAfterTopBtn7((size/75) + 'px');
        setAStyleBeforeLeftBtn7(-1*(size/75) + 'px');
        setAStyleAfterLeftBtn7((size/75) + 'px');
        setAStyleBeforeTransformBtn7('');
        setAStyleAfterTransformBtn7('');
    }

    return (
        <div
            className="button7"
            style={styleButton7}
        >
            <a
                href={Link}
                target={Target}
                style={styleButton7A}
                onMouseEnter={MouseEnterBtn7}
                onMouseLeave={MouseLeaveBtn7}
            >
                <div style={styleButton7ABefore} />
                {value}
                <div style={styleButton7AAfter} />
            </a>
        </div>
    )
}

Button7.defaultProps = {
    color1: defaultHelper.colorBlack,
    color2: defaultHelper.colorWhite,
    color3: defaultHelper.colorRed,
    color4: defaultHelper.colorSkyblue,
    size: defaultHelper.size,
    value: defaultHelper.value,
    Link: defaultHelper.Link,
    Target: defaultHelper.Target,
};

export default Button7;