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

const Registration = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleRegister = () => {
    setIsOpen(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const Required = ({ thisField }: { thisField: string }) => (
    <span className=" text-red-500 font-normal text-base">
      {thisField} is required
    </span>
  );

  const url = `https://freemerch-a8b7d-default-rtdb.firebaseio.com/registered_users.json`;

  const [successful, setSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const onSubmit: SubmitHandler<User> = (data: any) => {
    setIsLoading(true);
    console.log(data);

    const UserData = {
      name: data.fullname,
      email: data.email,
      socials: data.socials,
      accomodation: data.Accomodation,
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
    <div className=" -mt-8 ipad:-mt-16  min-h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" shadow-xl rounded-xl p-4 tablet:p-10 max-w-[300px] tablet:max-w-[593px] w-full min-h-[609px]"
      >
        <div className="  place-items-center cursor-not-allowed hidden tablet:grid">
          <Registertext />
        </div>
        <div className="  place-items-center cursor-not-allowed grid tablet:hidden">
          <RegisterMobile />
        </div>

        <div className=" mt-11 mb-11 flex flex-col gap-4 font-ppneue">
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
          <RadioGroup
            label="Do you need accommodation?"
            options={["Yes", "No"]}
            name="Accomodation"
            register={register}
            error={errors.Accomodation && <Required thisField="Accomodation" />}
          />
        </div>

        <FullWidthButton
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
            <p className=" text-center font-normal text-base text-black font-ppneue">
              Your registration has been completed. Look forward to e-mails and
              update about the event in your inbox shortly. See you at
              BUIDLCON2.0
            </p>
          }
          ButtonLabel="Done"
        />
      )}
    </div>
  );
};

export default Registration;

type InputName = "fullname" | "email" | "Accomodation" | "socials";

const InputsArr = [
  { label: "Your name", Icon: <ProfileIcon />, name: "fullname" as InputName },
  { label: "Email Address", Icon: <MailIcon />, name: "email" as InputName },
  { label: "Social media", Icon: <AtIcon />, name: "socials" as InputName },
];
