import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';
   

const Chats = () => {
    const history = useHistory();


    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }


    return(
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    fitConnect
                </div>
                <div onClick={handleLogout}className="logout-tab">
                    Logout
                </div>
            </div>
            <ChatEngine 
                height="calc(100vh - 66px)"
                projectID="9aa17841-5b1f-49be-a917-661f27db005e"
                userName="."
                userSecret="."
            />


        </div>
    );
}

export default Chats;