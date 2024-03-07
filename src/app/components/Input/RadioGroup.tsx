import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";

type RadioGroupProps = {
  options: string[];
  name: string;
  register: UseFormRegister<any>;
  label: string;
  error?: React.ReactNode;
};

export const RadioGroup: FC<RadioGroupProps> = ({
  options,
  name,
  register,
  label,
  error,
}) => {
  return (
    <>
      <label className=" font-ppneue font-normal text-base">
        {error ? error : label}
      </label>
      <div className=" flex gap-10">
        {options.map((option, index) => (
          <label key={index} className=" flex gap-2">
            <input
              type="radio"
              {...register(name, { required: true })}
              value={option}
              className=" w-[22px] h-[22px]"
            />
            {option}
          </label>
        ))}
      </div>
    </>
  );
};
