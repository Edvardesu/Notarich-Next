import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";

const Navbar = () => {
  // const location = useLocation();
  // const [isScrolled, setIsScrolled] = useState(false);

  // const handleScroll = () => {
  //   if (window.scrollY > 0) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const getTextColor = () => {
  //   if (location.pathname === "/") {
  //     return "text-white";
  //   }
  //   return "text-black";
  // };

  // const getBackgroundColor = () => {
  //   if (isScrolled) {
  //     if (location.pathname === "/") {
  //       return "text-white bg-black bg-opacity-80";
  //     } else {
  //       return "text-black bg-white bg-opacity-80";
  //     }
  //   }
  //   return "bg-transparent";
  // };
  const user = false;
  return (
    <nav
      className={`flex flex-row z-10 w-full h-32 items-center p-6 sticky top-0 transition-colors duration-300`}
    >
      <div className={`w-1/2 items-center flex-shrink-0`}>
        <span className="font-bruno_ace text-3xl tracking-tight ml-20">
          Notarich Cafe
        </span>
      </div>
      <div className={`w-1/2`}>
        <div className="text-2xl font-normal text-end">
          <Link href="/" className={`hover:text-yellow-300 mr-20 `}>
            About us
          </Link>
          <Link href="/menu/all" className={`hover:text-yellow-300 mr-20 `}>
            Menu
          </Link>
          <Link href="/booking" className={`hover:text-yellow-300 mr-20 `}>
            Booking
          </Link>
          <UserLinks />
          <CartIcon />
          {/* <Link
            href="/login"
            className={`hover:text-yellow-300 mr-20 `}
          >
            Register
          </Link> */}
          {/* <Link
            href="/userPesanan"
            className={`hover:text-yellow-300 mr-20 `}
          >
            Orders
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
