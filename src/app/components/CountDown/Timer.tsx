export const TimeUnit = ({ value, unit }: { value: number; unit: String }) =>
  value >= 0 && (
    <div className="sm:font-[800] font-[700] text-[24px] sm:text-[32px]">
      <div className="relative text-left">{value}</div>
      <div className="font-[400] text-[14px] text-left">
        {value === 1 ? unit : unit + "s"}
      </div>
    </div>
  );

export const Timer = ({
  timeLeft,
}: {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}) => (
  <div className="flex mx-auto w-[100%] text-center sm:w-[55%] items-start space-x-4 font-ppneue justify-center sm:justify-around pb-6 tablet:pb-[46px]">
    <TimeUnit value={timeLeft.days} unit="Day" />
    <div className="font-[700] sm:text-[32px] text-[24px]">:</div>
    <TimeUnit value={timeLeft.hours} unit="Hour" />
    <div className="font-[700] sm:text-[32px] text-[24px]">:</div>
    <TimeUnit value={timeLeft.minutes} unit="Min" />
    <div className="font-[700] text-center sm:text-[32px] text-[24px]">:</div>
    {timeLeft.seconds > 0 || timeLeft.minutes > 0 ? (
      <TimeUnit value={timeLeft.seconds} unit="Sec" />
    ) : (
      <h1 className="font-[800] text-[24px] sm:text-[32px]">Today</h1>
    )}
  </div>
);

