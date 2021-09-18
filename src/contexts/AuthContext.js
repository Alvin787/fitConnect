import React, { useContext, useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {auth} from '../components/firebase';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(() => {
            setUser(user);
            setLoading(false);
            history.push('/chats');


        })
    }, [user, history]);

    const value = { user };
    return (
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>

    );
    
}