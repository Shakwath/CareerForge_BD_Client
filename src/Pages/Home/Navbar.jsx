import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      setIsProfileOpen(false);
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="bg-slate-950 text-white border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">
                CareerForge <span className="text-indigo-500">BD</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-4 ml-10">
              <Link to="/" className="text-slate-300 hover:text-white px-3 py-2 text-sm">
                Home
              </Link>
              <Link to="/about" className="text-slate-300 hover:text-white px-3 py-2 text-sm">
                About
              </Link>

              {user && (
                <>
                  <Link to="/dashboard" className="text-slate-300 hover:text-white px-3 py-2 text-sm">
                    Dashboard
                  </Link>
                  <Link to="/roadmap" className="text-slate-300 hover:text-white px-3 py-2 text-sm">
                    Roadmap
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center">
            {!user ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/SignIn"
                  className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Get Started
                </Link>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg border border-slate-700"
                >
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white">
                      {user?.displayName?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}

                  <div className="text-left">
                    <p className="text-sm font-semibold max-w-[140px] truncate">
                      {user?.displayName || "User"}
                    </p>
                    <p className="text-xs text-slate-400">My Profile</p>
                  </div>
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-lg py-2 z-50">
                    <div className="px-4 py-3 border-b border-slate-800">
                      <p className="text-sm font-semibold text-white truncate">
                        {user?.displayName || "User"}
                      </p>
                      <p className="text-xs text-slate-400 truncate">
                        {user?.email}
                      </p>
                    </div>

                    <Link
                      to="/updateprofile"
                      onClick={() => setIsProfileOpen(false)}
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                    >
                      My Profile
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-800"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Btn */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-slate-950 border-t border-slate-800">
          {!user ? (
            <div className="flex flex-col gap-2 pt-3">
              <Link to="/signin" className="text-slate-300 py-2">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-indigo-600 text-white py-2 rounded-md text-center"
              >
                Get Started
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-2 pt-3">
              <div className="py-2 border-b border-slate-800 mb-2">
                <p className="font-semibold">{user?.displayName}</p>
                <p className="text-sm text-slate-400">{user?.email}</p>
              </div>

              <Link to="/profile" className="text-slate-300 py-2">
                My Profile
              </Link>
              <Link to="/dashboard" className="text-slate-300 py-2">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="text-left text-red-400 py-2">
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;