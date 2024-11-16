import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    const isHomeActive = location.pathname === "/";

    return (
        <div className="flex justify-around pt-[32px] pb-[32px] items-center">
            <h3 className={isHomeActive
                ? "text-white font-sora text-[20px] font-bold"
                : "text-[#9538E2] font-sora text-[20px] font-bold"
            }>Gadget Heaven</h3>
            <ul className="flex gap-6 font-sora text-[16px] font-medium">
                {/* Home Link */}
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isHomeActive
                            ? "text-white underline font-sora text-[20px] font-bold"
                            : isActive
                                ? "text-[#9538E2] underline font-sora text-[20px] font-bold"
                                : "text-[#9538E2] font-sora text-[20px] font-bold"
                    }
                >
                    Home
                </NavLink>


                <NavLink
                    to="/statictics"
                    className={({ isActive }) =>
                        isHomeActive
                            ? "text-white font-sora text-[20px] font-bold"
                            : isActive
                                ? "text-[#9538E2] underline font-sora text-[20px] font-bold"
                                : "text-[#9538E2] font-sora text-[20px] font-bold"
                    }
                >
                    Statistics
                </NavLink>


                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isHomeActive
                            ? "text-white font-sora text-[20px] font-bold"
                            : isActive
                                ? "text-[#9538E2] underline font-sora text-[20px] font-bold"
                                : "text-[#9538E2] font-sora text-[20px] font-bold"
                    }
                >
                    Dashboard
                </NavLink>
            </ul>
            <div className="flex gap-2">
                <NavLink to="/cartlist">
                    <button className="btn h-[48px] w-[48px] rounded-full text-[18px] text-center relative">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            3</span>
                    </button>
                </NavLink>
                <NavLink to="/wishlist">
                    <button className="btn h-[48px] w-[48px] rounded-full text-center text-[18px] relative">
                        <i className="fa-regular fa-heart"></i>
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            1</span>
                    </button>
                </NavLink>

            </div>
        </div>
    );
};

export default NavBar;