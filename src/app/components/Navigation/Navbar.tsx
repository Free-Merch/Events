"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
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

  return (
    <div
      className={` py-4 ipad:py-8 pl-[10%] tablet:pl-[100px] sticky top-0 z-[999999] backdrop-blur-sm w-full transition-transform duration-500 ease-in-out ${
        isHidden ? "transform -translate-y-full" : " bg-white"
      } `}
    >
      <Link href="/">
        <img src="/fullLogo.svg" alt="" />
      </Link>
    </div>
  );
};
