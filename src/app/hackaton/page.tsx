"use client";
import React, { useState } from "react";
import { Input, RadioGroup } from "../components/Input";
import { FullWidthButton } from "../components/Buttons";
import {
  AtIcon,
  MailIcon,
  ProfileIcon,
  Registertext,
} from "../components/Icons/Custom";
import { ModalWImage } from "../components/Modal";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterMobile } from "../components/Icons/Custom/RegisterMobile";
import Loading from "../loading";
import Link from "next/link";
import { Discovertwo } from "../components/Icons/Custom/Discovertwo";
import { type } from "os";

type User2 = {
  fullname: string;
  email: string;
  xName: string;
  telegramName: string;
  role: string;
  gender: string;
};

const Hackaton = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleRegister = () => {
    setIsOpen(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User2>();

  const Required = ({ thisField }: { thisField: string }) => (
    <span className=" text-red-500 font-normal text-base">
      {thisField} is required
    </span>
  );

  const url = `https://freemerch-a8b7d-default-rtdb.firebaseio.com/hackaton.json`;

  const [successful, setSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const onSubmit: SubmitHandler<User2> = (data: any) => {
    setIsLoading(true);
    console.log(data);
    const UserData = {
      name: data.fullname,
      email: data.email,
      xName: data.xName,
      telegramName: data.telegramName,
      role: data.role,
      gender: data.gender,
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(UserData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("FireBase Successfully Connected Success:", data);
        setSuccessful(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsError(error);
        setSuccessful(false);
        setIsLoading(false);
      });
  };

  return (
    <div className="mb-[10vh] min-h-[90svh] ipad:min-h-[90svh] grid place-items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" shadow-xl rounded-xl p-4 tablet:p-10 max-w-[300px] tablet:max-w-[593px] w-full min-h-[609px]"
      >
        <div className=" place-items-center cursor-not-allowed font-extrabold text-3xl text-black text-center hidden tablet:grid">
          <Discovertwo />
        </div>
        <div className=" font-semibold text-xl text-center justify-center items-center flex-wrap cursor-not-allowed flex tablet:hidden">
          Register for <br /> DISCOVER BOS & NEAR HACKATHON
        </div>

        <div className=" my-11 flex flex-col gap-4 font-ppneue">
          {InputsArr.map((input, index) => (
            <React.Fragment key={index}>
              <Input
                label={input.label}
                Errorlabel={
                  errors[input.name] && <Required thisField={input.label} />
                }
                Icon={input.Icon}
                {...register(input.name, { required: true })}
              />
            </React.Fragment>
          ))}

          {InputsArr2.map((input, index) => (
            <React.Fragment key={index}>
              <Input
                label={input.label}
                label2={input.label2}
                Errorlabel={
                  errors[input.name] && <Required thisField={input.label2} />
                }
                Icon={input.Icon}
                {...register(input.name, { required: true })}
              />
            </React.Fragment>
          ))}

          <RadioGroup
            label="Choose your role or skill?"
            additional=" flex flex-col gap-[10px]"
            options={[
              "Founder",
              "Developer",
              "Product Designer",
              "Technical Writer",
            ]}
            name="role"
            register={register}
            error={errors.role && <Required thisField="role" />}
          />

          <RadioGroup
            label="Select your Gender"
            options={["Male", "Female"]}
            name="gender"
            register={register}
            error={errors.gender && <Required thisField="gender" />}
          />
        </div>

        <FullWidthButton
          color="bg-[#00C663]"
          onclick={handleRegister}
          label={isLoading ? <Loading /> : "Register Now"}
        />
        {isError && (
          <p className=" text-red-500 font-normal text-base">{isError}</p>
        )}
      </form>

      {successful && (
        <ModalWImage
          closeAction={() => router.push("/")}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          Image={<img src="/empty_file.svg" className=" cursor-not-allowed" />}
          label="Registration successful!"
          Text={
            <div className=" flex flex-col gap-6">
              <p className=" text-center font-normal text-base text-black font-ppneue">
                Your registration has been completed. Look forward to e-mails
                and update about the event in your inbox shortly.
              </p>
              {/* <a
                target="_blank"
                href="https://getdp.co/oW6"
                className="  text-green-400 text-base font-normal text-center"
              >
                Click here to get a customized DP
              </a> */}
            </div>
          }
          ButtonLabel="Done"
        />
      )}
    </div>
  );
};

export default Hackaton;

type InputName =
  | "fullname"
  | "email"
  | "xName"
  | "telegramName"
  | "role"
  | "gender";

const InputsArr = [
  { label: "Your name", Icon: <ProfileIcon />, name: "fullname" as InputName },
  { label: "Email Address", Icon: <MailIcon />, name: "email" as InputName },
  //   { label: "Social media", Icon: <AtIcon />, name: "socials" as InputName },
  //   { label: "Social media", Icon: <AtIcon />, name: "socials" as InputName },
];

const InputsArr2 = [
  {
    label: "Follow @discoverBOS on X and input your X username below",
    label2: "X Username",
    Icon: <AtIcon />,
    name: "xName" as InputName,
  },
  {
    label: (
      <span>
        Join{" "}
        <Link
          className=" text-[#008B46] font-normal"
          href="https://discoverBOSHackathon"
          target="_blank"
        >
          https://discoverBOSHackathon
        </Link>{" "}
        on telegram and input your telegram Username below
      </span>
    ),
    label2: "Telegram Username",
    Icon: <AtIcon />,
    name: "telegramName" as InputName,
  },
];
