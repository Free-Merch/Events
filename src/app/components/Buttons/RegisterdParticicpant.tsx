"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const RegisterdParticicpant = () => {
  const [hmm, setHmmm] = useState<Record<string, User>>({});

  const url = `https://freemerch-a8b7d-default-rtdb.firebaseio.com/registered_users.json`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log("FireBase Successfully Fetched Success:", data);
        setHmmm(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <Link
      href="/registration"
      className=" max-w-[300px] tablet:max-w-[400px] w-full min-h-[64px] mx-auto flex-grow bg-[#2EC866] p-1 rounded-xl flex gap-4 justify-between items-center relative"
    >
      <motion.button
        type="submit"
        className={` bg-[#0B1237] text-white text-base font-normal font-ppneue rounded-xl w-full py-4 flex justify-center items-center `}
        initial={{ width: "100%" }}
        animate={{ width: "100%" }}
        whileHover={{
          width: "calc(100% - 8px)",
          position: "absolute",
          left: "4px",
        }}
        transition={{ type: "tween", duration: 0.15 }}
      >
        Register Now
      </motion.button>
      <span className=" font-ppneue text-base text-white font-normal flex gap-1 pr-3 justify-end ">
        <span className=" font-extrabold">
          {hmm && Object.keys(hmm).length > 0 ? Object.keys(hmm).length : 0}
        </span>{" "}
        Registered
      </span>
    </Link>
  );
};
