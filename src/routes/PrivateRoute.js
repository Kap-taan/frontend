import React, { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"

function RequireAuth({ children }) {
    let location = useLocation();
    if (!localStorage.getItem('user')) {
        return <Navigate to="/client/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;