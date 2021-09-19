import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';


const Home = () => {
/*     const history = useHistory();

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    } */
    return(
        <div /* className="chats-page" */>
            <div className="nav-bar">
                <div className="logo-tab">
                    fitConnect
                </div>
{/*                 <div onClick={handleLogout}className="logout-tab">
                    Logout
                </div> */}
            </div>
        </div>
    )
};

export default Home;