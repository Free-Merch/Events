"use client";
import React, { forwardRef } from "react";

type InputProps = {
  label: string;
  Errorlabel: string | React.ReactNode;
  Icon: React.ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, Icon, Errorlabel, ...props }, ref) => {
    return (
      <div className=" font-ppneue text-base font-normal">
        <label>{Errorlabel ? Errorlabel : label}</label>
        <div className=" mt-2 relative">
          <span className=" absolute top-[50%] left-[14px] translate-y-[-50%]">
            {Icon}
          </span>
          <input
            ref={ref}
            {...props}
            className=" pl-[46px] border-[1.5px] border-[#D0D5DD] rounded-lg h-[50px] w-full"
            placeholder={label}
          />
        </div>
      </div>
    );
  }
);
