import Image from "next/image";
import { Button } from "@/components/ui/button";
import vector from "../assets/Vector1.png";
import image from "../assets/image.png"

export default function AgatePhoneGrip() {
  return (
    <div className="min-h-screen relative bg-gradient-to-r from-[#75d0ed] to-[#a7c4fe] flex lg:flex-row flex-col align-middle items-center justify-center p-4 lg:overflow-hidden ">
      <img
        src={vector.src}
        className="absolute lg:block hidden w-screen z-0 -translate-y-32"
        alt=""
      />

      <div className="lg:z-10 z-50 mb-5  w-full h-full xl:-translate-y-10 xl:w-1/2 ">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className=" xl:ml-auto xl:space-y-6 space-y-2 text-center xl:text-right">
            <h2 className="xl:text-2xl text-lg font-semibold text-[#31546D]">BEST PRICE</h2>
            <h1 className="xl:text-5xl text-3xl font-bold text-[#31546D] ">
              Agate Phone Grip
            </h1>
            <div className="flex justify-center items-baseline">
              <span className="xl:text-2xl text-xl text-[#41A0B7] line-through mr-2">
                44.50$
              </span>
              <span className="xl:text-6xl text-2xl font-bold text-[#E35B3E]">19.50$</span>
            </div>
            <p className="text-[#31546D] max-w-md">
              These Pop Rock Crystal grip tops can be swapped with other tops
              depending on your mood, outfit, nails, phone case, holiday, etc.!
              Just gently squeeze the sides to remove and swap out with another
              color or design!
            </p>
            <Button className="bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] hover:bg-gradient-to-r hover:from-transparent hover:to-transparent text-white border-2 border-transparent  hover:border-[#75CCEB] hover:text-[#75CCEB] font-semibold py-3 px-6 xl:py-7 xl:px-12 rounded-[18px] transition-all duration-100 text-lg">
              BUY NOW
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full  my-3 lg:-translate-y-10  z-40  lg:mt-0">
          <div className=" flex items-center mx-auto justify-center bg-white/20 w-[280px] h-[280px] sm:w-[580px] sm:h-[580px] lg:w-[500px] lg:h-[500px] xl:w-[744px] xl:h-[744px]   xl:z-[1]  rounded-full">
          <div className=" flex w-[220px] h-[220px] items-center justify-center shadow-xl align-middle   bg-white sm:w-[80%] sm:h-[80%] xl:w-[570px] xl:h-[570px]  z-10 rounded-full" style={{boxShadow: '0px 4px 50px 0px #788F9C40'}}>
          <div className="flex items-center justify-center align-middle w-[180px] h-[180px]  bg-white sm:w-[70%] sm:h-[70%] xl:w-[364px] xl:h-[364px] rounded-full shadow-lg z-10" style={{boxShadow: '0px 4px 50px 0px #788F9C40'}}>
            <img
              src={image.src}
              alt="Agate Phone Grip"
              className="mx-auto xl:w-[248px] xl:h-[248px] "
            />
        </div>
          </div>
          </div>
          
      </div>
    </div>
  );
}
