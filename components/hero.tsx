"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import image from "../assets/image.png"
import bg from "../assets/Vector2.png"
import bg2 from "../assets/Frame5.png"
import logo from "../assets/logo.svg"
import left1 from "../assets/left1.png"
import left2 from "../assets/left2.png"
import mouse from "../assets/mouseIcon.png"

export default function Hero() {

  const NavItems = () => (
    <>
      <li><Link href="/" className="block py-2 hover:text-gray-300 transition-colors">Home</Link></li>
      <li><Link href="/shop" className="block py-2 hover:text-gray-300 transition-colors">Shop</Link></li>
      <li><Link href="/about" className="block py-2 hover:text-gray-300 transition-colors">About Us</Link></li>
      <li><Link href="/help" className="block py-2 hover:text-gray-300 transition-colors">Help</Link></li>
    </>
  )

  return (
    <div className="relative min-h-screen bg-no-repeat bg-cover" style={{backgroundImage:`url(${bg2.src})`}} >
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6">
        <div className="flex  align-middle h-fit justify-center flex-row items-center">
        <Image
              src={logo}
              width={30}
              height={30}
              alt="Crystal Agate Phone Grip"
              className="mx-auto mr-4 "
            />
          <span className="text-white  text-xl font-semibold">Pop Rock Crystal</span>
        </div>
        <nav className="hidden ml-auto mr-28 md:block">
          <ul className="flex space-x-6 text-white">
            <NavItems />
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-white">
            <img src={left1.src} alt="" />
          </button>
          <button className="text-white">
            <img src={left2.src} alt="" />
          </button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav>
                <ul className="flex flex-col space-y-4">
                  <NavItems />
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className=" flex flex-col lg:flex-row items-center justify-center align-middle min-h-screen px-4 py-24 md:px-12">
        <div className=" space-y-6  text-white w-fit">
          <h1 className="text-3xl  md:text-5xl md:text-nowrap leading-tight">
            Welcome to<br />
            <span className="text-5xl  font-bold md:text-6xl">Pop Rock Crystal Shop!</span>
          </h1>
          <p className="max-w-md text-[#31546D] text-[16px]">
            Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
          </p>
          <div className="flex space-x-8 mt-4">
            <Link href="" className="lg:px-6 lg:py-3 px-4 py-2 cursor-pointer bg-white text-[#317189] rounded-lg  font-semibold hover:bg-transparent border-transparent hover:border-[#317189] transition-all duration-150"> 
              SHOP NOW
            </Link>
            <Link href="" className="px-6 py-3 cursor-pointer text-[#317189] text-[16px] rounded-full font-semibold hover:border-[#317189] hover:text-white transition-all duration-150">
              about us
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4 w-full mt-12 mx-auto lg:mt-0 lg:w-1/2 z-50">
          <div className=" bg-white relative max-w-[70%] rounded-[2rem] shadow-xl p-8 lg:max-w-md mx-auto">
            <span className="absolute top-12 left-0 bg-[#8A93E5] text-white px-4 py-2 rounded-r-lg text-sm font-semibold">
              New lot
            </span>
            <Image
              src={image}
              width={300}
              height={300}
              alt="Crystal Agate Phone Grip"
              className="mx-auto mb-8"
            />
            <div className='w-[120px] h-[2px] rounded-full bg-[#F2F2F2] mb-4 mx-auto'></div>
            <div className="text-center">
              <h2 className="text-gray-500 font-semibold">CRYSTAL AGATE PHONE GRIP</h2>
              <p className="text-blue-600 font-bold text-xl">
                <span className="text-gray-500 font-normal">-</span> 18.99$
              </p>
            </div>
          </div>
          <div className="  flex justify-center items-center w-fit mx-auto space-x-2">
            <button className="bg-[#8A93E5] rounded-md text-white hover:bg-[#727de6] transition-colors">
              <ChevronLeft size={24} />
            </button>
            {[...Array(7)].map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#8A93E5]' : 'bg-[#D7DBFF]'}`} />
            ))}
            <button className="bg-[#8A93E5] rounded-md text-white hover:bg-[#727de6] transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        <img src={bg.src} alt="bg" className='absolute lg:block hidden z-0 w-full translate-y-[9rem]' />
      </main>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
        <div className="text-[16px] mt-24 justify-center align-middle items-center flex flex-row space-x-1 text-[#317189] mb-2">
          <img src={mouse.src} alt="" />
          <span>scroll down</span>
          </div>
      </div>
    </div>
  )
}