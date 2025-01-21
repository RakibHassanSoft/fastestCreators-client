import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useAuth = () => {
    const authenticaion = useContext(AuthContext)
    return authenticaion;
        
};

export default useAuth;

