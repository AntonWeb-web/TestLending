import { FC } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { routes } from './Routes'

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            {routes.map((route) => 
                route.path ? (
                    <Route path={route.path} element={route.component} key={route.path} />
                ) : null
            )}
        </Routes>
    )
}

export default AppRouter