import { Disclosure } from '@headlessui/react'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { CiCircleMinus } from 'react-icons/ci'


export default function Disclosures() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <div className=" w-full ">
      <div className="mx-auto w-full  rounded-2xl  ">
        <Disclosure>
          {({ open }) => (
            <>
              {clicked ?
                <Disclosure.Button onClick={handleClick} className="flex w-full justify-between rounded-lg  sm:px-4 px-0 py-2 text-left text-[16px] sm:text-[20px] font-[700] text-[#0B1237] leading-[27px]  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What is ABCD with Buidl?</span>
                  <CiCircleMinus onClick={handleClick}
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-[#0B1237]`}
                  />
                </Disclosure.Button> :
                <Disclosure.Button onClick={handleClick} className="flex w-full justify-between rounded-lg  sm:px-4 px-0 py-2 text-left text-[16px] sm:text-[20px] font-[700] leading-[27px] text-[#0B1237] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What is ABCD with Buidl?</span>
                  < AiOutlinePlusCircle onClick={handleClick}
                    className={`${open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-[#0B1237]`}
                  />

                </Disclosure.Button>}

              <Disclosure.Panel className="px-4 pt-4 pb-2 bg-[#ffffff] font-[500] text-[16px] text-[rgba(11,18,55,0.50)]">
                Lorem ipsum dolor sit amet consectetur.
                Pharetra pellentesque porta quis condimentum mi morbi sapien.
                Urna auctor tincidunt facilisis in elementum lectus scelerisque faucibus.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

      </div>
    </div>
  )
}
