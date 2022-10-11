import React from 'react'
import aboutImg from '../assets/img/about-img.1745ec07.jpg'

export default function About() {
  return (
    <div className='py-20'>
      <div id="about" className="section-4 my-20 pt-9 grid  grid-cols-1 md:grid-cols-2 gap-4 mx-8">
        <div className="about-img">
          <div className="sm:hidden mb-6 text-center"><span className="text-center font-semibold text-2xl my-3 uppercase text-red-500">About Us</span></div>
          <img src={aboutImg} alt="" />
        </div>
        <div className="about-text text-justify">
          <span className="text-center font-semibold text-2xl my-3 uppercase text-red-500 sm:block hidden">About Us</span>
          <h2 className="text-3xl font-bold my-3 mb-5">Lorem ipsum dolor, sit amet consectetur.</h2>
          <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusantium ipsa, laudantium beatae dicta laboriosam nam. Quisquam ratione reprehenderit, praesentium eveniet consequatur, vel porro nam atque architecto, totam maxime impedit facilis velit sunt ab.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet obcaecati ad iste quod provident fuga, id tempore officia ullam distinctio enim delectus. Vitae ea esse atque optio fugiat. Quo cumque ipsam laboriosam officiis!</p>
          <button
            className="my-4 px-4 py-2 rounded-md bg-orange-500 text-white font-bold hover:bg-orange-700 focus-within:ring-4 focus:ring-orange-400"><a
              href="shop">Read More</a></button>
        </div>
      </div>
    </div>
  )
}
