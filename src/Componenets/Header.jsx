import { useEffect, useState } from "react";
import {
  FaAddressCard,
  FaCode,
  FaEnvelope,
  FaFolderOpen,
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { NavLink } from "react-router";

// --- 1. CONFIGURATION ARRAYS ---
const navItems = [
  { to: "/homepage", icon: FaHouse, label: "Home" },
  { to: "/about", icon: FaAddressCard, label: "About" },
  { to: "/projects", icon: FaFolderOpen, label: "Projects" },
  { to: "/services", icon: FaCode, label: "Services" },
  { to: "/contact", icon: FaEnvelope, label: "Contact" },
];

// --- 2. CLASS UTILITY FUNCTION ---
// Function to handle NavLink active/inactive styles (cleaner logic)
const getNavLinkClasses = (isActive) => {
  const baseClasses =
    "flex flex-col items-center justify-center p-1 text-xs transition font-montserrat " +
    // Responsive desktop styles (sm: and up)
    "sm:flex-row sm:gap-2 sm:rounded-full sm:px-4 sm:py-2 sm:text-base";

  const activeClasses = "bg-black text-white rounded-lg sm:rounded-full";
  const inactiveClasses =
    "text-gray-600 hover:bg-gray-100 rounded-lg sm:hover:bg-gray-200 sm:rounded-full";

  return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
};

const Header = () => {
  // State for the scroll-blur effect
  const [scrolled, setScrolled] = useState(false);

  // Effect to manage the scroll listener
  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is more than 10px
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Class for the container that gets the blur effect
  const blurContainerClasses = `
    flex justify-center p-2 md:p-5 transition-all duration-300 
    ${scrolled ? "bg-white/90 backdrop-blur-sm shadow-lg" : ""}
  `;

  // Class for the <ul> navigation list
  const ulClasses =
    "flex w-full justify-around gap-1 " 
    // Responsive desktop styles (sm: and up)
    "sm:w-auto sm:justify-center sm:gap-6 md:gap-12 sm:rounded-full sm:p-3";

  return (
    <header className="fixed  top-0 left-0 w-full z-50">
      {/* Container where the blur and shadow are applied */}
      <div className={blurContainerClasses}>
        <ul className={ulClasses}>
          {navItems.map((item) => (
            <li key={item.to} className="flex-1 sm:flex-initial">
              <NavLink
                to={item.to}
                className={({ isActive }) => getNavLinkClasses(isActive)}
              >
                {/* Icon: always visible */}
                <item.icon className="text-xl sm:text-base" />

                {/* Text: Hidden on mobile, shown on tablet/desktop (sm:inline) */}
                <span className="hidden sm:inline">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
