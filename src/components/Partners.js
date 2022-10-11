import React from 'react'
import img1 from '../assets/img/google.f83fabbc.png'
import img2 from '../assets/img/amazon.9ccb6fdd.jpg'
import img4 from '../assets/img/flipkart.dc31507b.png'

export default function Partners() {
  return (
    <div id="brands" className="section-5 my-20 pt-9 py-6">
        <div className="heading text-center">
          <span className="text-center font-semibold text-2xl my-3 uppercase text-red-500">Brands</span>
          <h2 className="text-3xl font-bold my-3 mb-5">Our Brands Partners</h2>
        </div>
        <div className="brand-container flex flex-wrap justify-evenly items-center mt-8 mx-8 flex-col md:flex-row">
          <img src={img1} className="h-20 my-3 mx-3" alt="google" />
          <img src={img2} className="h-28 my-3 mx-3" alt="amazon" />
          
          <img src={img4} className="h-20 my-3 mx-3" alt="flipkart" />
        </div>
      </div>
  )
}
