import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loader from '../Components/Loader/Loader';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loader />
    }
    if (user) {

        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivetRoute;