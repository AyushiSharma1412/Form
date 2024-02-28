import React, { useState, useEffect } from 'react';
import './Navbar.css'; 

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };

    return (
        <nav className={isVisible ? "navbar" : "navbar hidden"}>
            <div className="navbar-toggle">
              
                {isVisible ? <>&#9776;</> : <>&#x2715;</>}
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
               
                <li className="dropdown">
                    <a href="#products" className="dropbtn">Products</a>
                    <div className="dropdown-content">
                        <a href="#product1">Product 1</a>
                        <a href="#product2">Product 2</a>
                        <a href="#product3">Product 3</a>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
