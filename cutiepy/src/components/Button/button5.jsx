import React, { useState } from 'react'
import defaultHelper from '../defaultHelper';

const Button5 = ({ color1, color2, value, Link, Target, size }) => {

    const [aColorBtn5, setAColorBtn5] = useState(color1);


    const styleButton5 = {
        // display: 'flex',
        position:'relative',
        margin: (size / 10) + 'px',
        zIndex:'100',
    }
    const styleButton5A = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: (size / 8) + 'px',
        width: size + 'px',
        height: (size / 3) + 'px',
        border: (size / 95) + 'px solid ' + color2,
        textDecoration: 'none',
        color: aColorBtn5,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        position: 'relative',
        zIndex:'1',
    }

    const MouseEnterBtn5 = () => {
        setAColorBtn5(color2);
    }
    const MouseLeaveBtn5 = () => {
        setAColorBtn5(color1);
    }
    return (
        <div
            className="button5"
            style={styleButton5}
        >
            <a
                href={Link}
                target={Target}
                style={styleButton5A}
                onMouseEnter={MouseEnterBtn5}
                onMouseLeave={MouseLeaveBtn5}
            >
                {value}
            </a>
        </div>
    );
}

Button5.defaultProps = {
    color1: defaultHelper.colorBlack,
    color2: defaultHelper.colorWhite,
    size: defaultHelper.size,
    value: defaultHelper.value,
    Link: defaultHelper.Link,
    Target: defaultHelper.Target,
};

export default Button5;