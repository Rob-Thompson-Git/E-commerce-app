import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoutes = () => {
    const auth = false

    return auth ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes;