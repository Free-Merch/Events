type FullWidthButtonProps = {
  label: React.ReactNode | string;
  onclick?: () => void;
  color?: string;
};

export const FullWidthButton = ({
  label,
  onclick,
  color,
}: FullWidthButtonProps) => {
  return (
    <button
      type="submit"
      className={` bg-[${
        color ? color : "#0B1237"
      }] text-white text-base font-normal font-ppneue rounded-xl w-full py-4 flex justify-center items-center`}
      onClick={onclick}
    >
      {label}
    </button>
  );
};
