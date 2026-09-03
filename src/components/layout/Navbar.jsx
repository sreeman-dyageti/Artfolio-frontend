import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
    const { user, isLoading, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
    };

    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link
                    to="/"
                    className="text-2xl font-bold tracking-tight"
                >
                    Artfolio
                </Link>

                <nav className="flex items-center gap-6">
                    <Link
                        to="/"
                        className="text-sm font-medium text-gray-700 hover:text-black"
                    >
                        Home
                    </Link>

                    <Link
                        to="/artworks"
                        className="text-sm font-medium text-gray-700 hover:text-black"
                    >
                        Explore
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    {isLoading ? null : user ? (
                        <>
                            <span className="text-sm font-medium">
                                {user.profile?.displayName ||
                                    user.profile?.username}
                            </span>

                            <button
                                onClick={handleLogout}
                                className="text-sm font-medium text-gray-700 hover:text-black"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="text-sm font-medium text-gray-700 hover:text-black"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;