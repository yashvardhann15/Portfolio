// import React, { useState , useRef } from 'react'
// import './Navbar.css'
// import logo from '../../assets/logo.png'
// import underline from '../../assets/nav_underline.svg'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import menu_open from '../../assets/menu_open.svg'
// import menu_close from '../../assets/menu_close.svg'


// const Navbar = () => {

//     const [menu , setMenu] = useState("home");
//     const menuRef = useRef();

//     const openMenu = () => {
//         menuRef.current.style.right = '0';
//     }

//     const closeMenu = () => {
//         menuRef.current.style.right = '-350px';
//     }

//     return (
//         <div className="navbar">
//             <img src={logo} alt="" />
//             <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
//             <ul  ref={menuRef} className='nav-menu'>
//                 <img onClick={closeMenu} src={menu_close} alt="" className="nav-mob-close" />
//                 <li> <AnchorLink className='anchor-link' href = '#home'><p onClick={()=>setMenu("home")}>  Home</p></AnchorLink> {menu==="home"?<img src={underline} alt="" /> : <>  </>} </li>
//                 <li> <AnchorLink className='anchor-link' offset = {50} href = '#about'><p onClick={()=>setMenu("about")}>  About</p></AnchorLink>{menu==="about"?<img src={underline} alt="" /> : <>  </>} </li>
//                 <li> <AnchorLink className='anchor-link' offset = {50} href = '#work'><p onClick={()=>setMenu("work")}>  Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt="" /> : <>  </>} </li>
//                 <li> <AnchorLink className='anchor-link' offset = {50} href = '#contact'><p onClick={()=>setMenu("contact")}>  contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt="" /> : <>  </>} </li>
//             </ul>
//             <div className='nav-connect'><AnchorLink className='anchor-link' href = '#contact'>Connect With Me</AnchorLink></div>
//         </div>
//     )
// }

// export default Navbar

import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import { NavLink } from 'react-router-dom'; // Import NavLink
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = '0';
    };

    const closeMenu = () => {
        menuRef.current.style.right = '-350px';
    };

    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
            <ul ref={menuRef} className='nav-menu'>
                <img onClick={closeMenu} src={menu_close} alt="" className="nav-mob-close" />
                {/* Use NavLink instead of AnchorLink */}
                <li>
                    <NavLink to="/home" id='anchor-link' className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <p onClick={() => setMenu("home")}>Home</p>
                    </NavLink>
                    {menu === "home" ? <img src={underline} alt="" /> : <></>}
                </li>
                <li>
                    <NavLink to="/about" id='anchor-link' className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <p onClick={() => setMenu("about")}>About</p>
                    </NavLink>
                    {menu === "about" ? <img src={underline} alt="" /> : <></>}
                </li>
                <li>
                    <NavLink to="/portfolio" id='anchor-link' className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <p onClick={() => setMenu("portfolio")}>Portfolio</p>
                    </NavLink>
                    {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}
                </li>
                <li>
                    <NavLink to="/contact" id='anchor-link' className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <p onClick={() => setMenu("contact")}>Contact</p>
                    </NavLink>
                    {menu === "contact" ? <img src={underline} alt="" /> : <></>}
                </li>
            </ul>
            <div className='nav-connect' >
                <NavLink to="/contact" id='anchor-link' className={({ isActive }) => isActive ? 'nav-connect' : ''}>Connect With Me</NavLink>
            </div>
        </div>
    );
};

export default Navbar;