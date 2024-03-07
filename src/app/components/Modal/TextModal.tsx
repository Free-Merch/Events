"use client";
import { FullWidthButton } from "../Buttons";

type ModalWImageProps = {
  Text: React.ReactNode;
  anythingelse?: React.ReactNode;
  ButtonLabel?: string;
  label: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  closeAction?: () => void;
};

export const TextModal = ({
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
          className=" bg-black/70 backdrop-blur-lg fixed left-0 top-0 w-screen h-screen grid place-items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" relative z-[999999] bg-white w-full max-w-[593px] min-h-[487px] rounded-xl shadow-xl p-10 grid place-items-center gap-11 text-center"
          >
            <h1 className=" font-extrabold text-[28px] text-left text-black font-ppneue">
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
