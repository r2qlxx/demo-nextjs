"use client"
import Link from "next/link"
import { BsList } from "react-icons/bs";
import CustomIcon from "./CustomIcon";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const navLinks = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "about",
      path: "/about",
    },
    {
      name: "skill",
      path: "/skill",
    },
    {
      name: "news",
      path: "/news",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];

  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavLink = (path: string) => {
    router.push(path);
    setIsMobileMenuOpen(prev => !prev);
  }

  const isLinkActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    } else {
      return pathname.startsWith(path);
    }
  }

  return (
    <div className="relative w-full h-20">
      {/* Mobile */}
      <div className="w-full h-full flex justify-end items-center md:hidden">
        <CustomIcon Icon={BsList} style="cursor-pointer text-4xl mr-4 rounded-full p-2 hover:bg-gray-50 transition-all" event={() => setIsMobileMenuOpen(prev => !prev)} />
        {isMobileMenuOpen &&
          <div className="absolute top-0 left-0 w-full h-[calc(100vh-5rem)] mt-20 z-10 text-white bg-black flex flex-col justify-center items-center gap-8">
            {navLinks.map(navLink =>
              <Link key={navLink.name} href={navLink.path} className="p-2 hover:scale-110 transition-all" onClick={() => handleNavLink(navLink.path)}>
                {navLink.name.toLocaleUpperCase()}
              </Link>
            )}
          </div>
        }
      </div>
      {/* Tablet and Desktop */}
      <div className="hidden relative w-full h-full md:flex justify-center items-center gap-12">
        <div className="hidden absolute top-0 left-0 h-full xl:flex justify-center items-center">
          <Link href="/" className="ml-4 p-2">R2QLXX</Link>
        </div>
        {navLinks.map(navLink =>
          <Link key={navLink.name} href={navLink.path} className={`p-2 ${isLinkActive(navLink.path) && "border-b-4 border-blue-500"} hover:border-b-4 hover:border-orange-500 hover:scale-110 transition-all`} onClick={() => handleNavLink(navLink.path)}>
            {navLink.name.toLocaleUpperCase()}
          </Link>
        )}
      </div>
    </div>
  )
}
export default Navbar