import { Navigate, Outlet } from 'react-router-dom'
import react ,{useState,useEffect ,useContext} from 'react';
import { LoginContext } from '../Context/LoginContext';
import { useAuth0 } from '@auth0/auth0-react';

function PrivateRoutes() {
    const {
        isAuthenticated
    } = useContext(LoginContext);

 

    useEffect(() => {
        console.log("isAuthenticated PrivateRoutes", isAuthenticated);
    }, [isAuthenticated])

    console.log("isAuthenticated",isAuthenticated)
    return (
        isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />
    )
}

export default PrivateRoutes