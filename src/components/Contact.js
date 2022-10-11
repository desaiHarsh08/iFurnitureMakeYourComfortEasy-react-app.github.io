import React from 'react'

export default function Contact() {
  return (
    <div id="contact" className="section-6 py-4 my-20">
        <h2 className="text-center font-semibold text-2xl my-3 uppercase text-red-500">Contact Us</h2>
        <div className="content bg-[#fff] border-red-500  pt-5 px-2 md:pb-10 md:pl-10 flex justify-center items-center flex-col-reverse lg:flex-row">
          <div className="left lg:w-[25%] h-[100%] text-center flex flex-col sm:flex-row lg:flex-col md:w-full justify-evenly relative">
            <div className="address details m-4">
              <i className="fa-solid fa-location-dot text-3xl text-[#3e2093]"></i>
              <div className="topic font-semibold text-lg">Address</div>
              <div className="address-1">Lorem, ipsum.</div>
              <div className="address-2">Lorem, ipsum dolor.</div>
            </div>

            <div className="phone details m-4 text-center">
              <i className="fa-solid fa-phone text-3xl text-[#3e2093]"></i>
              <div className="topic font-semibold text-lg">Phone</div>
              <div className="p1">+91 123300000</div>
              <div className="p2">+91 1233000000</div>
            </div>
            
            <div className="email details m-4 text-center">
              <i className="fa-solid fa-envelope text-3xl text-[#3e2093]"></i>
              <div className="topic font-semibold text-lg">lorem123@gmail.com</div>
              <div className="topic">loremipsom456@gmail.com</div>
            </div>

          </div>
          <div className="right lg:w-3/4 sm:w-full h-full lg:px-7">
            <div className="heading">
              <span className="text-2xl text-purple-600 font-semibold">Send us a message</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto unde quos dolorem maxime dolore fugit asperiores eaque at tempore.</p>
            </div>  
            <form action="">
              <div className="input-box my-2">
                <input type="text" className="w-full h-[50px] border rounded px-4 py-2 focus:border-blue-400" name="userName" id="userName" placeholder="Enter your name" />
              </div>
              <div className="input-box my-2">
                <input type="email" className="w-full h-[50px] border rounded  px-4 py-2 focus:border-blue-400" name="userEmail" id="userEmail" placeholder="Enter your email" />
              </div>
              <div className="input-box my-2">
                <textarea name="userMessage" placeholder="Enter your message" className="w-full border rounded px-4 py-2 focus:border-blue-400" id="userMessage" cols="30" rows="10"></textarea>
              </div>
              <div>
                <button className="my-4 px-4 py-2 rounded-md bg-orange-500 text-white font-bold hover:bg-orange-700 focus-within:ring-4 focus:ring-orange-400">Send Now</button>
              </div>
            </form>
          </div>
        </div>
      {/* <!-- </div> --> */}
      </div>
  )
}
