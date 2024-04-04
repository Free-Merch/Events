"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LogoIcon } from "../Icons/Custom";
import { DiscoverBos } from "../Icons/Custom/DiscoverBos";

export const Navbar: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollTop = 0;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      let scrollTop = window.pageYOffset;
      if (scrollTop > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log("*****************", window.location.pathname);

  return (
    <div
      className={` py-4 pl-[10%] tablet:pl-[100px] sticky top-0 z-[9999] backdrop-blur-sm w-full transition-transform duration-500 ease-in-out ${
        isHidden ? "transform -translate-y-full" : " bg-white"
      } `}
    >
      <Link href="/" className=" hidden tablet:block">
        {isClient && (
          <img
            src={
              window.location.pathname === "/hackaton"
                ? "/images/disvcover.svg"
                : "/fullLogo.svg"
            }
            className=" max-w-[140px] ipad:w-32"
          />
        )}
      </Link>
      <Link href="/" className=" tablet:hidden">
        {isClient &&
          (window.location.pathname === "/hackaton" ? (
            <DiscoverBos />
          ) : (
            <LogoIcon />
          ))}
      </Link>
    </div>
  );
};
