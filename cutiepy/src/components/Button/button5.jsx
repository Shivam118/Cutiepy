import React, { useState } from 'react'
import defaultHelper from '../defaultHelper';

const Button5 = ({ color1, color2, value, Link, Target, size }) => {

    const [aColorBtn5, setAColorBtn5] = useState(color1);


    const styleButton5 = {
        display: 'flex',
    }

    const styleButton5ASmall = {
        textDecoration: 'none',
        padding: '15px 30px',
        color: aColorBtn5,
        fontSize: '18px',
        letterSpacing: '2px',
        border: '3px solid aqua',
        textTransform: 'uppercase',
        position: 'relative',
    }
    const styleButton5AMedium= {
        textDecoration: 'none',
        padding: '15px 30px',
        color: aColorBtn5,
        fontSize: '18px',
        letterSpacing: '2px',
        border: '3px solid aqua',
        textTransform: 'uppercase',
        position: 'relative',
    }
    const styleButton5ALarge = {
        textDecoration: 'none',
        padding: '15px 30px',
        color: aColorBtn5,
        fontSize: '18px',
        letterSpacing: '2px',
        border: '3px solid aqua',
        textTransform: 'uppercase',
        position: 'relative',
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
            {
                size === "small" ? (
                    <a
                        href={Link}
                        target={Target}
                        style={styleButton5ASmall}
                        onMouseEnter={MouseEnterBtn5}
                        onMouseLeave={MouseLeaveBtn5}
                    >
                        {value}
                    </a>
                ) : (
                    size === "medium" ? (
                        <a
                            href={Link}
                            target={Target}
                            style={styleButton5AMedium}
                            onMouseEnter={MouseEnterBtn5}
                            onMouseLeave={MouseLeaveBtn5}
                        >
                            {value}
                        </a>
                    ) : (
                        <a
                            href={Link}
                            target={Target}
                            style={styleButton5ALarge}
                            onMouseEnter={MouseEnterBtn5}
                            onMouseLeave={MouseLeaveBtn5}
                        >
                            {value}
                        </a>
                    )
                )
            }
        </div>
    );
}

Button5.defaultProps = {
    color1: defaultHelper.colorB,
    color2: defaultHelper.colorW,
    color3: defaultHelper.colorP,
    color4: defaultHelper.colorCyan,
    size: defaultHelper.size,
    value: defaultHelper.value,
    Link: defaultHelper.Link,
    Target: defaultHelper.Target,
};

export default Button5;