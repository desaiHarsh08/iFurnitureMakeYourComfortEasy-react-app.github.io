import React from 'react'
import img1 from '../assets/img/logo.f73be6f8.jpg'

export default function MyFooter() {
  return (
    <footer className="w-full text-white bg-[#122466] py-5 space-y-16 sm:space-y-0">
      <div></div>
      <div className="row w-[85%] m-auto flex flex-wrap items-start justify-between  my-5 pb-7">
        <div className="col basis-full md:basis-1/4 p-[10px]">
          <img src={img1} className="rounded-full mb-6 h-36" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a, error neque beatae laboriosam, rem in commodi unde fugit officia culpa incidunt amet.</p>
        </div>
        <div className="col basis-full md:basis-[15%] p-[10px] ">
          <h3 className="w-fit mb-10 relative font-semibold text-2xl">Address</h3>

          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p className="email">lorem123@gmail.com</p>
          <h4 className="font-semibold my-5">+91 - 1234567890</h4>
        </div>
        <div className="col basis-full md:basis-[15%] p-[10px]">
          <h3 className="w-fit mb-10 relative font-semibold text-2xl">Links</h3>
          <ul className="space-y-3">
            <li></li>
            <li><a href="/">Home</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">New Arrival</a></li>
            <li><a href="/">Our Partners</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className="col basis-full md:basis-1/4 p-[10px]">
          <h3 className="w-fit mb-10 relative font-semibold text-2xl">NewsLetter</h3>
          <form action="" className="pb-[15px] flex justify-center items-center border-b-4">
            <div className="flex h-[35px]">
              <div className="flex justify-center items-center">
                <i className="fa-solid fa-envelope-circle-check text-3xl"></i>
              </div>
                <input type="email" className="outline-none cursor-pointer bg-transparent w-full h-[35px] px-4 py-2" name="email-footer" id="email-footer" placeholder="Enter your email id" required />
                <button className="px-4 py-2 active:border focus:border bg-green-500 h-[35px] flex justify-center items-center"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </form>
          <div className="my-3 flex justify-evenly">
            <div className="fb w-10 h-10 flex justify-center items-center ">
              <i className="text-2xl cursor-pointer transition hover:scale-125 hover:ring-4 fa-brands rounded-full px-1 fa-facebook"></i>
            </div>
            <div className="tw w-10 h-10 flex justify-center items-center ">
              <i className="text-2xl cursor-pointer transition hover:scale-125 hover:ring-4 fa-brands rounded-full px-1 fa-twitter"></i>
            </div>
            <div className="wa w-10 h-10 flex justify-center items-center ">
              <i className="text-2xl cursor-pointer transition hover:scale-125 hover:ring-4 fa-brands rounded-full px-1 fa-whatsapp"></i>
            </div>
            <div className="lin w-10 h-10 flex justify-center items-center ">
              <i className="text-2xl cursor-pointer transition hover:scale-125 hover:ring-4 fa-brands rounded-full px-1 fa-linkedin"></i>
            </div>
            <div className="in w-10 h-10 flex justify-center items-center ">
              <i className="text-2xl cursor-pointer transition hover:scale-125 hover:ring-4 fa-brands rounded-full px-1 fa-instagram"></i>
            </div>



           
          </div>
        </div>
      </div>
      <div className="w-3/4 block mx-auto">
        <hr className=" h-1 " />
        <p className="text-center font-medium text-xs py-6">Copyright &copy; All rights reserved.</p>
      </div>
    </footer>
  )
}
