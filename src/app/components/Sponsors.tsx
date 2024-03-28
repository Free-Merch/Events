import Image from "next/image";
import Marquee from "react-fast-marquee";

const Sponsors = () => {
  return (
    <div className="w-[100%] bg-[#F8F9FD] sm:mb-[26px] mb-[93px]">
      <div className="container  mx-auto ">
        <div className="flex justify-center">
          <div className="flex flex-wrap w-[100%]  justify-center  bg-[#F8F9FD]  my-[26px]">
            <Marquee play pauseOnHover speed={50} loop={0}>
              {SponsLogoArr.map((logo, index) => (
                <div key={index} className="relative w-[137px] h-[21px] ml-12">
                  <Image
                    className=" block mb-[20px] sm:mb-0 object-contain"
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
  "/images/sponsor7.svg",
];
