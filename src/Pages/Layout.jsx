import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout(params) {
    
    return(
        <div>
            <div className="flex border-b-2">
                <NavLink to="/" className={({isActive}) => (isActive ? "font-semibold border-blue-600 " : "border-gray-600 ") + "p-3 border-b-4"}>
                    Home
                </NavLink>
                <NavLink to="/clock" className={({isActive}) => (isActive ? "font-semibold border-blue-600 " : "border-gray-600 ") + "p-3 border-b-4"}>
                    Clock
                </NavLink>
                <NavLink to="/timer" className={({isActive}) => (isActive ? "font-semibold border-blue-600 " : "border-gray-600 ") + "p-3 border-b-4"}>
                    Timer
                </NavLink>
            </div>

            <Outlet></Outlet>
        </div>
    )
};

