import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';


const Navbar = () => {
    const history = useHistory();

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }
    return(
        <>
            <Nav>
                <h1>fitConnect</h1>

                <Bars />

                <NavMenu>
                    <NavLink to='/Connect' activeStyle>
                        Connect
                    </NavLink>
                    <NavLink to='/Chats' activeStyle>
                        Chats
                    </NavLink>
                    <NavLink to='/Profile' activeStyle>
                        Profile
                    </NavLink>
                </NavMenu>
                <NavBtn onClick={handleLogout}className="logout-tab">
                    Logout
                </NavBtn>
            </Nav>
        </>
        
/*             <div className="logo-tab">
                fitConnect
            </div>
            <div onClick={handleLogout}className="logout-tab">
                Logout
            </div>
            <ul>
                <li>
                    <NavLink to="/Home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Chats">Chats</NavLink>
                </li>
            </ul> */


/*         <div className="nav-bar">
            <div className="logo-tab">
                fitConnect
            </div>
            <div onClick={handleLogout}className="logout-tab">
                Logout
            </div>
        </div> */
    )
};

export default Navbar;