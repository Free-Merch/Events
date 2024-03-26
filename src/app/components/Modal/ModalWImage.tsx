"use client";
import { FullWidthButton } from "../Buttons";

type ModalWImageProps = {
  Image: React.ReactNode;
  Text: React.ReactNode;
  anythingelse?: React.ReactNode;
  ButtonLabel?: string;
  label: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  closeAction?: () => void;
};

export const ModalWImage = ({
  Image,
  Text,
  anythingelse,
  ButtonLabel,
  label,
  isOpen,
  setIsOpen,
  closeAction,
}: ModalWImageProps) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <div
          onClick={closeModal}
          className=" bg-black/70 backdrop-blur-lg fixed left-0 top-0 w-screen h-screen grid place-items-center z-[999995]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" relative z-[999999] bg-white w-full max-w-[593px] min-h-[487px] rounded-xl shadow-xl p-5 tablet:p-10 grid place-items-center gap-6 text-center font-ppneue"
          >
            {Image}
            <h1 className=" font-extrabold text-lg tablet:text-[28px] text-black font-ppneue">
              {label}
            </h1>
            {Text}
            {anythingelse}
            <FullWidthButton
              label={ButtonLabel ? ButtonLabel : "Close"}
              onclick={() => {
                closeModal();
                closeAction && closeAction();
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};
