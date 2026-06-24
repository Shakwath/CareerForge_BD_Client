import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import {
  Menu,
  X,
  ChevronDown,
  User,
  LayoutDashboard,
  LogOut,
  Map,
  Info,
  Home,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

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

  // outside click close for profile dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-3 z-50 px-3 sm:px-4">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-slate-950/70 shadow-2xl shadow-black/20 backdrop-blur-2xl supports-[backdrop-filter]:bg-slate-950/55">

        {/* decorative glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_28%)]" />

        <div className="relative flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* LEFT */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/25 transition duration-300 group-hover:scale-105">
                <span className="text-sm font-extrabold tracking-wide">CF</span>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20" />
              </div>

              <div className="leading-tight">
                <h1 className="text-base sm:text-lg font-bold tracking-tight text-white">
                  CareerForge <span className="text-indigo-400">BD</span>
                </h1>
                <p className="text-[11px] text-slate-400 -mt-0.5">
                  Build smarter careers
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">
              <DesktopNavItem to="/" icon={<Home size={16} />}>
                Home
              </DesktopNavItem>

              <DesktopNavItem to="/about" icon={<Info size={16} />}>
                About
              </DesktopNavItem>

              {user && (
                <>
                  <DesktopNavItem
                    to="/dashboard"
                    icon={<LayoutDashboard size={16} />}
                  >
                    Dashboard
                  </DesktopNavItem>

                  <DesktopNavItem to="/roadmap" icon={<Map size={16} />}>
                    Roadmap
                  </DesktopNavItem>
                </>
              )}
            </div>
          </div>

          {/* RIGHT DESKTOP */}
          <div className="hidden md:flex items-center gap-3">
            {!user ? (
              <>
                <Link
                  to="/signin"
                  className="rounded-full border border-transparent px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/40"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen((prev) => !prev)}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-2 transition duration-300 hover:bg-white/[0.08]"
                >
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user?.displayName || "User"}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-indigo-500/25"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white ring-2 ring-indigo-500/25">
                      {user?.displayName?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}

                  <div className="text-left">
                    <p className="max-w-[140px] truncate text-sm font-semibold text-white">
                      {user?.displayName || "User"}
                    </p>
                    <p className="text-xs text-slate-400">Personal Account</p>
                  </div>

                  <ChevronDown
                    size={16}
                    className={`text-slate-400 transition duration-200 ${
                      isProfileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 shadow-2xl shadow-black/30 backdrop-blur-2xl">
                    {/* top profile section */}
                    <div className="relative overflow-hidden border-b border-white/10 px-4 py-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10" />
                      <div className="relative flex items-center gap-3">
                        {user?.photoURL ? (
                          <img
                            src={user.photoURL}
                            alt={user?.displayName || "User"}
                            className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-500/25"
                          />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-base font-bold text-white">
                            {user?.displayName?.charAt(0)?.toUpperCase() || "U"}
                          </div>
                        )}

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-white">
                            {user?.displayName || "User"}
                          </p>
                          <p className="truncate text-xs text-slate-400">
                            {user?.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* menu */}
                    <div className="p-2">
                      <DropdownLink
                        to="/updateprofile"
                        icon={<User size={16} />}
                        onClick={() => setIsProfileOpen(false)}
                      >
                        My Profile
                      </DropdownLink>

                      <DropdownLink
                        to="/dashboard"
                        icon={<LayoutDashboard size={16} />}
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Dashboard
                      </DropdownLink>

                      <DropdownLink
                        to="/roadmap"
                        icon={<Map size={16} />}
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Roadmap
                      </DropdownLink>

                      <div className="my-2 h-px bg-white/10" />

                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-medium text-red-400 transition hover:bg-red-500/10"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[650px] border-t border-white/10" : "max-h-0"
          }`}
        >
          <div className="bg-slate-950/85 px-4 py-4 backdrop-blur-2xl">
            <div className="flex flex-col gap-2">
              {user && (
                <div className="mb-2 rounded-3xl border border-white/10 bg-white/[0.05] p-4">
                  <div className="flex items-center gap-3">
                    {user?.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user?.displayName || "User"}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-500/25"
                      />
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 font-bold text-white">
                        {user?.displayName?.charAt(0)?.toUpperCase() || "U"}
                      </div>
                    )}

                    <div className="min-w-0">
                      <p className="truncate font-semibold text-white">
                        {user?.displayName || "User"}
                      </p>
                      <p className="truncate text-sm text-slate-400">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <MobileNavLink
                to="/"
                icon={<Home size={16} />}
                onClick={() => setIsOpen(false)}
              >
                Home
              </MobileNavLink>

              <MobileNavLink
                to="/about"
                icon={<Info size={16} />}
                onClick={() => setIsOpen(false)}
              >
                About
              </MobileNavLink>

              {user ? (
                <>
                  <MobileNavLink
                    to="/dashboard"
                    icon={<LayoutDashboard size={16} />}
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </MobileNavLink>

                  <MobileNavLink
                    to="/roadmap"
                    icon={<Map size={16} />}
                    onClick={() => setIsOpen(false)}
                  >
                    Roadmap
                  </MobileNavLink>

                  <MobileNavLink
                    to="/updateprofile"
                    icon={<User size={16} />}
                    onClick={() => setIsOpen(false)}
                  >
                    My Profile
                  </MobileNavLink>

                  <button
                    onClick={handleLogout}
                    className="mt-2 flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium text-red-400 transition hover:bg-red-500/10"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <MobileNavLink
                    to="/signin"
                    icon={<User size={16} />}
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </MobileNavLink>

                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="mt-2 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-500/25"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

function DesktopNavItem({ to, children, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
          isActive
            ? "bg-white/10 text-white shadow-inner"
            : "text-slate-300 hover:bg-white/5 hover:text-white"
        }`
      }
    >
      {icon}
      <span>{children}</span>
    </NavLink>
  );
}

function DropdownLink({ to, children, icon, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}

function MobileNavLink({ to, children, icon, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
          isActive
            ? "border border-indigo-500/20 bg-indigo-500/15 text-white"
            : "text-slate-300 hover:bg-white/5 hover:text-white"
        }`
      }
    >
      {icon}
      <span>{children}</span>
    </NavLink>
  );
}

export default Navbar;