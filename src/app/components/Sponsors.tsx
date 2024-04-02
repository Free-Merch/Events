import Image from "next/image";
import Marquee from "react-fast-marquee";

const Sponsors = () => {
  return (
    <div className="w-[100%] sm:mb-[26px] mb-[93px]">
      <h1 className=" text-center font-ppneuebold font-extrabold text-2xl text-black">
        Sponsors
      </h1>
      <div className="container  mx-auto bg-[#F8F9FD] my-4 ">
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center w-[100%]  justify-between  bg-[#F8F9FD]  my-[26px] overflow-y-hidden">
            <Marquee play pauseOnHover speed={50} loop={0}>
              {SponsLogoArr.map((logo, index) => (
                <div
                  key={index}
                  className={`relative min-w-[137px] h-[50px] ml-[4.5rem]  overflow-hidden`}
                >
                  <Image
                    className={` block mb-[20px] sm:mb-0 object-contain min-w-[100%] ${
                      index === 4 && "scale-125"
                    }`}
                    src={logo}
                    alt={logo}
                    fill
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

const SponsLogoArr = [
  "/images/sponsor1.svg",
  "/images/sponsor2.svg",
  "/images/sponsor3.svg",
  "/images/sponsor4.svg",
  "/images/sponsor5.svg",
  "/images/sponsor6.svg",
];
