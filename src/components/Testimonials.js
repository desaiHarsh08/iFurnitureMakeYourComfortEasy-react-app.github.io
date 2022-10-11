import React from 'react'
// import quoteIcon from '../assets/img/quote-icon.png'
import quoteIcon from '../assets/img/quote-icon.png'
// import client1 from '../assets/img/client-1.ddcb5148.png'
// import client2 from '../assets/img/client-2.3a62dc09.png'
// import client3 from '../assets/img/client-3.e0115120.png'
import client1 from '../assets/img/client-1.ddcb5148.png'
import client2 from '../assets/img/client-2.3a62dc09.png'
import client3 from '../assets/img/client-3.e0115120.png'

export default function Testimonials() {



    
const feedBackItems = document.querySelectorAll('.feedback-item');
// const feedBackBtns = document.querySelectorAll('.feedback-btn');
const feedBackDisplay = document.querySelector('#feedback-display');


var activeId = 1;
changeFeedback(activeId);
function changeFeedback(id){
    feedBackItems.forEach((item) => {
        if(id === item.dataset.id){
            [feedBackDisplay.dataset.id, item.dataset.id] = [item.dataset.id, feedBackDisplay.dataset.id];

            // swap inner content
            [feedBackDisplay.innerHTML, item.innerHTML] = [item.innerHTML, feedBackDisplay.innerHTML];
        }
    });
}

const handleContent = () => {
    
    
// const feedBackItems = document.querySelectorAll('.feedback-item');
const feedBackBtns = document.querySelectorAll('.feedback-btn');
// const feedBackDisplay = document.querySelector('#feedback-display');


// let activeId = 1;
changeFeedback(activeId);
function changeFeedback(id){
      
const feedBackItems = document.querySelectorAll('.feedback-item');
// const feedBackBtns = document.querySelectorAll('.feedback-btn');
const feedBackDisplay = document.querySelector('#feedback-display');
    feedBackItems.forEach((item) => {
        let tmp = Number(item.dataset.id);
        if(id === tmp){
            [feedBackDisplay.dataset.id, item.dataset.id] = [item.dataset.id, feedBackDisplay.dataset.id];

            // swap inner content
            [feedBackDisplay.innerHTML, item.innerHTML] = [item.innerHTML, feedBackDisplay.innerHTML];
        }
    });
}

    feedBackBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            activeId = index + 1;
            feedBackBtnReset();
            btn.classList.add('feedback-active-btn');
            changeFeedback(activeId);
        })
    });
}


function feedBackBtnReset(){
       
// const feedBackItems = document.querySelectorAll('.feedback-item');
const feedBackBtns = document.querySelectorAll('.feedback-btn');
// const feedBackDisplay = document.querySelector('#feedback-display');
    feedBackBtns.forEach((btn) =>{
        btn.classList.remove('feedback-active-btn');
    });
}


  return (
    <>
        {/* <!-- Testimonials --> */}
      <div name='testimonials' className="feedback pt-0" id="feedback">
        <div className="w-[90%] mx-auto">
          <div className="section-title">
            <h2 className="text-center font-semibold text-2xl my-3 uppercase text-red-500">FeedBack</h2>
            <p className=" text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            {/* <div className="line text-center">____</div> */}
          </div>
          <div className="feedback_inner text-slate-400 text-xl  mt-[4.5rem] mr-0 mb-[6rem] ml-0">
            <div className="feedback-container grid mx-auto lg:grid-cols-3 lg:items-start lg:relative min-h-[545px]">

              <div className="feedback-item bg-white pt-[2.3rem] pb-6 sm:pb-[8.5rem] relative rounded-3xl mb-[12rem] lg:block lg:w-[495px]  sm:h-auto " data-id="1">
                <img src={quoteIcon} className="h-9 mt-0 mx-auto mb-[2.5rem]" alt="" />
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quia doloremque voluptate!</p>
                <div className="client absolute w-[100px] h-[100px] rounded-full border-2 -bottom-[50px] left-[50%] -translate-x-[50%] -translate-y-[50%] mt-5">
                  <img src={client1} className="h-[6rem]" alt="" />
                </div>
              </div>




              <div className="feedback-item bg-white text-center pt-[2.8rem] px-[6.5rem] pb-6 sm:pb-[8.5rem] relative rounded-2xl mb-[12rem] lg:block lg:w-[495px]" data-id="2" id="feedback-display">
                <img src={quoteIcon} className="h-9 mx-auto mb-[2.5rem]" alt="" />
                <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero pariatur consequatur?</p>
                <div className="client absolute w-[100px] h-[100px] rounded-full bg-white border-2 -bottom-[50px] left-[50%] -translate-x-[50%] -translate-y-[50%] mt-5">
                  <img src={client2} className="h-[6rem] rounded-full" alt="" />
                </div>
              </div>
              <div className="feedback-item bg-white text-center pt-[2.3rem] px-[6.5rem] pb-6 sm:pb-[8.5rem] relative rounded-2xl mb-[12rem] lg:block lg:w-[495px]" data-id="3">
                <img src={quoteIcon} className="h-9 mx-auto mb-[2.5rem] my-3" alt="" />
                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vitae? Voluptate maxime </p>
                <div className="client absolute w-[100px] h-[100px] rounded-full border-2 -bottom-[50px] left-[50%] -translate-x-[50%] -translate-y-[50%] mt-5">
                  <img src={client3} className="h-[6rem] rounded-full" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-btns flex justify-center items-center relative bottom-24 sm:bottom-0 mb-12">
            <button className="feedback-btn feedback-active-btn w-[43px] h-[13px] bg-orange-300 mx-5 rounded-xl" onClick={handleContent}></button>
            <button className="feedback-btn w-[43px] h-[13px] bg-orange-300 mx-5 rounded-xl" onClick={handleContent}></button>
            <button className="feedback-btn w-[43px] h-[13px] bg-orange-300 mx-5 rounded-xl" onClick={handleContent}></button>
          </div>
        </div>
      </div>
    </>
  )
}