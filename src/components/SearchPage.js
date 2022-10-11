import React from 'react'
import img1 from '../assets/img/tea-table.121879aa.jpg'
import img2 from '../assets/img/decorations.e7d3b914.jpg'
import img3 from '../assets/img/dinning.da81d08e.jpg'
import img4 from '../assets/img/console.8abcb99d.jpg'
import img5 from '../assets/img/study.007ac918.jpg'
import img6 from '../assets/img/round-dinning.31f643bc.png'
import img7 from '../assets/img/periodic.4c8b18f8.jpg'
import img8 from '../assets/img/dressing.e7e1b109.jpg'
import img9 from '../assets/img/bed.37e7323a.jpg'
import NavBar from './Navbar'
import MyFooter from './MyFooter'

export default function SearchPage() {


  // // Image rendering: -
  // // const categoryImg = document.getElementById("category-img");
  // // const grid = document.getElementsByClassName("grid1")[0];
  
  // const handleSearch = (event) => {
  //     const input = document.getElementById("search");
  //     console.log(input.value);
  //     if (event.key === 'Enter') {
  //       loadImg(input.value);
  //     }
  //   };
    

  //   function loadImg(topic) {
  //     // const categoryImg = document.getElementById("category-img");
  // const grid = document.getElementsByClassName("grid1")[0];
  //     removeImages();
  //     const url = 'https://api.unsplash.com/search/photos/?query=' + topic + '&per_page=9&client_id=go2OBHc7cztXROn628iCB2j5pM_LcbtucLE8l_0ePNw';

  //     fetch(url)
  //       .then(response => {
  //         if (response.ok) {
  //           return response.json();
  //         }
  //         else {
  //           alert(response.status);
  //         }
  //       })
  //       .then(data => {
  //         const imageNodes = [];
  //         for (let i = 0; i < data.results.length; i++) {
  //           imageNodes[i] = document.createElement('div');
  //           imageNodes[i].className = 'img cursor-pointer';
  //           imageNodes[i].style.backgroundImage = 'url(' + data.results[i].urls.raw + ')';
  //           imageNodes[i].addEventListener('click', function () {
  //             // window.open(data.results[i].links.download, '_blank');
  //             openProductDetails(data.results[i].urls.raw);
  //           });
  //           grid.appendChild(imageNodes[i]);
  //         }
  //       })
  //   }

  //   function removeImages() {
  //     // const categoryImg = document.getElementById("category-img");
  // const grid = document.getElementsByClassName("grid1")[0];
  //     grid.innerHTML = '';
  //   }
 
  //   // const productDetails = document.getElementById('product-details');
  //   const closeProductDetails = document.getElementById('close');
  //   // const toBlur = document.getElementById('toBlur');
  //   // // const imgSrc = document.getElementById('productImg');

  //   // To open product-details card: -
  //   function openProductDetails(imgLink) {
  //     const productDetails = document.getElementById('product-details');
  //   // const closeProductDetails = document.getElementById('close');
  //   const toBlur = document.getElementById('toBlur');
  //   const imgSrc = document.getElementById('productImg');
  //     productDetails.classList.toggle('hidden');
  //     imgSrc.setAttribute('src', imgLink);
  //     toBlur.classList.add('opacity-30');
  //   }

  //   // To close product-details card: -
  //   closeProductDetails.addEventListener("click", function () {
  //     const productDetails = document.getElementById('product-details');
  //   // const closeProductDetails = document.getElementById('close');
  //   const toBlur = document.getElementById('toBlur');
  //   // const imgSrc = document.getElementById('productImg');
  //     productDetails.classList.add('hidden');
  //     toBlur.classList.remove('opacity-30');
  //   });
  

  const showCard = () => {
    const productDetails = document.getElementById('product-details');
    productDetails.classList.remove('-translate-x-[2000px]');
  }

  const closeCard = () => {
    const productDetails = document.getElementById('product-details');
    // const closeBtn = document.getElementById('close');
    productDetails.classList.add('-translate-x-[2000px]');
  }



  
  return (
    <>

      <NavBar />

      <div className="container pt-20  ">
          <div className="text-2xl my-3 text-red-500 font-semibold  text-center">Search for your comfort...!</div>
            <form >
          <div className="seacrh-box my-4 flex items-center justify-center">
            <input type="text"
              className="border w-full sm:w-2/4 text-base px-4 py-2 focus:shadow-orange-400 focus:border-1 focus:border-orange-400 "
              name="seacrh" id="search" placeholder="Search..." />
            <i onclick="loadImg()" className="fa-solid fa-magnifying-glass relative right-[11%] md:right-[4%]"></i>
          </div>
            </form>
          <div className="categories px-2 py-3 flex items-center justify-evenly">
            <div className="hidden md:flex items-center justify-evenly ">

              <div></div>
              {/* <!-- Category - 1 --> */}
              <div
                className="border cursor-pointer bg-red-400 hover:bg-red-500 rounded-2xl w-auto flex justify-center items-center px-3 py-2" onclick="loadImg('Tea table')">
                <span className="text-white text-xl">Tea table</span>
              </div>
              {/* <!-- Category - 2 --> */}
              <div
                className="border cursor-pointer bg-purple-700 hover:bg-purple-900 rounded-2xl w-auto flex justify-center items-center px-4 py-2" onclick="loadImg('Dinning')">
                <span className="text-white text-xl">Dinning</span>
              </div>
              {/* <!-- Category - 3 --> */}
              <div
                className="border cursor-pointer bg-yellow-400 hover:bg-yellow-500 rounded-2xl w-auto flex justify-center items-center px-4 py-2" onclick="loadImg('Decorations')">
                <span className="text-white text-xl">Decorations</span>
              </div>
              {/* <!-- Category - 4 --> */}
              <div
                className="border cursor-pointer bg-orange-400 hover:bg-orange-500 rounded-2xl w-auto flex justify-center items-center px-4 py-2" onclick="loadImg('Console')" >
                <span className="text-white text-xl">Console</span>
              </div>
              {/* <!-- Category - 5 --> */}
              <div
                className="border cursor-pointer bg-blue-400 hover:bg-blue-500 rounded-2xl w-auto flex justify-center items-center px-4 py-2" onclick="loadImg('Study')">
                <span className="text-white text-xl">Study</span>
              </div>
              {/* <!-- Category - 6 --> */}
              <div
                className="border cursor-pointer bg-green-400 hover:bg-green-500 rounded-2xl w-auto flex justify-center items-center px-4 py-2" onclick="loadImg('Round Dinning')">
                <span className="text-white text-xl">Round Dinning</span>
              </div>
              {/* <!-- Category - 7 --> */}
              <div
                className="border cursor-pointer bg-red-600 hover:bg-red-700 rounded-2xl w-auto flex justify-center items-center px-4 py-2" onclick="loadImg('Periodic')">
                <span className="text-white text-xl">Periodic</span>
              </div>
              {/* <!-- Category - 8 --> */}
              <div
                className="border cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-2xl w-auto flex justify-center items-center px-4 py-2" onclick="loadImg('Dressing')">
                <span className="text-white text-xl">Dressing</span>
              </div>
              {/* <!-- Category - 9 --> */}
              <div
                className="border cursor-pointer bg-green-600 hover:bg-green-700 rounded-2xl w-auto flex justify-center items-center px-4 py-2" onclick="loadImg('Bed')">
                <span className="text-white text-xl">Bed</span>
              </div>
            </div>
            {/* <!-- <div className="onsmall-category md:hidden">
              <select name="categories" id="categories">
                <option selected>Category</option>
                <option value="Tea table">Tea table</option>
                <option value="Dinning">Dinning</option>
                <option value="Decorations">Decorations</option>
                <option value="Console">Console</option>
                <option value="Study">Study</option>
                <option value="Round Dinning">Round Dinning</option>
                <option value="Round Periodic">Periodic</option>
                <option value="Round Dressing">Dressing</option>
                <option value="Round Bed">Bed</option>
              </select>
            </div> --> */}
          </div>
        </div>
        

        {/* <!-- Image rendering --> */}
      <div className="container1 mx-auto">
        <div className="grid1 w-full flex flex-wrap justify-evenly items-start" id="toBlur">
          <div className="category-img w-full mx-2 md:flex flex-wrap justify-evenly items-start" id="category-img">
            <div onClick={showCard}>
              <div id="img1" className={`img cursor-pointer  `} >
                <img src={img1} alt="img1" />
              </div>
              <h3 className="text-white text-center  text-3xl md:text-4xl relative -top-[112px]">Tea Table</h3>
            </div>
            <div onClick={showCard}>
              <div  className="img cursor-pointer " Style={"background-image: url('../assets/img/dinning.da81d08e.jpg');"}>
                <img src={img3} alt="img3" />
              </div>
              <h3 className="text-white text-center  text-3xl md:text-4xl relative -top-[112px]">Dinning</h3>
            </div>
            <div onClick={showCard}>
              <div className="img cursor-pointer " Style={"background-image: url('./assets/decorations.e7d3b914.jpg');"}>
                <img src={img2} alt='img2' />
              </div>
              <h3 className="text-white text-center  text-3xl md:text-4xl relative -top-[112px]">Decorations</h3>
            </div>
            <div onClick={showCard}>
              <div className="img cursor-pointer  " Style={"background-image: url('./assets/console.8abcb99d.jpg');"}>
                <img src={img4}alt="img4" />
              </div>
              <h3 className="text-white text-center  text-3xl md:text-4xl relative -top-[112px]">Console</h3>
            </div>
            <div onClick={showCard}>
              <div className="img cursor-pointer" Style={"background-image: url('./assets/study.007ac918.jpg');"}>
                <img src={img5} alt="img5" />
              </div>
              <h3 className="text-white text-center  text-3xl md:text-4xl relative -top-[112px]">Study</h3>
            </div>
            <div onClick={showCard}>
              <div className="img cursor-pointer" Style={"background-image: url('./assets/round-dinning.31f643bc.png');"}>
                <img src={img6} alt="img6" />
              </div>
              <h3 className="text-white text-center  text-3xl md:text-4xl relative -top-[112px]">Round Dinning</h3>
            </div>
            <div onClick={showCard}>
              <div className="img cursor-pointer " Style={"background-image: url('./assets/periodic.4c8b18f8.jpg');"}>
                <img src={img7} alt="img7" />
              </div>
              <h3 className="text-white text-center  text-3xl md:text-4xl relative -top-[112px]">Periodic</h3>
            </div>
            <div onClick={showCard}>
              <div className="img cursor-pointer" Style={"background-image: url('./assets/dressing.e7e1b109.jpg');"}>
                <img src={img8} alt="img8" />
              </div>
              <h3 className="text-white text-center  text-3xl md:text-4xl relative -top-[112px]">Dressing</h3>
            </div>
            <div onClick={showCard}>
              <div className="img cursor-pointer" Style={"background-image: url('./assets/bed.37e7323a.jpg');"}>
                <img src={img9} alt="img9" />
              </div>
              <h3 className="text-white text-center  text-3xl md:text-4xl relative -top-[112px]">Bed</h3>
            </div>
          </div>

          {/* <!-- <div className="img cursor-pointer"></div> --> */}
        </div>


        <div
          className="product-details border-2 overflow-scroll border-purple-400 transition  bg-white h-auto top-[4.5rem] fixed mx-1 -translate-x-[2000px]  "
          id="product-details">

          <div id="close" onClick={closeCard} className="text-right text-xl flex justify-end items-center px-4 pt-2 cursor-pointer">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="flex flex-col md:flex-row p-4 gap-5">
            <div className="left lg:w-2/4 flex justify-center items-center">
              <img src={img1} className="h-[153px] sm:h-auto" alt="" id="productImg" />
            </div>
            <div className="rigth lg:w-2/4">
              <h3 className="text-2xl sm:text-3xl font-semibold my-3">Lorem, ipsum dolor.</h3>
              <div>
                <div className="stars text-yellow-500">
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star"></i>
                  <i className="bx bxs-stars fa-solid fa-star-half"></i>
                </div>
                <span className="text-xl block text-slate-400 line-through">M.R.P.:<span className="mx-2">114$</span></span>
                <span className="text-xl text-green-600 block">Dealing Price:<span
                    className="mx-2 text-red-600">109$</span></span>
                <span className="text-xl block">You save:<span className="mx-2 text-red-600">6$ (4.38%)</span></span>
                <span className="block">Inclusive of all taxes</span>
                <button
                  className="flex items-center px-4 py-1 justify-between bg-green-400 hover:bg-green-500 cursor-pointer rounded">
                  <span>Add to Cart</span>
                  <span className="material-symbols-outlined text-red-500">
                    shopping_cart
                  </span>
                </button>

                <h4 className="my-3 font-semibold text-xl mt-5">About this item</h4>
                <p className="text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi facere illo unde
                  perspiciatis autem distinctio omnis quidem aliquid cumque recusandae perferendis sunt quisquam.
                </p>
              </div>
            </div>
          </div>

        </div>


      </div>


      <div className="comments flex flex-col items-center py-5">
        <h2 className="text-center text-2xl font-semibold">Leave a comment</h2>
        <form action="" className="w-[80%] md:w-2/3">
          <input type="text" placeholder="Name" name="clientName" id="clientName" className="border block w-full h-8 p-2 rounded-sm my-4 outline-purple-400" />
          <input type="email" placeholder="Email" name="clientEmail" id="clientEmail"  className="border block w-full h-8 p-2 rounded-sm my-4 outline-purple-400" />

          <textarea name="clientText" id="clientText" cols="30" rows="10" placeholder="Write your comment here" className="border block w-full p-2 rounded-sm my-4 outline-purple-400"></textarea>
          <button className="px-4 py-2 block mx-auto my-4 border border-transparent bg-purple-700 text-white font-semibold focus:ring-4 focus:ring-purple-200 rounded-md">Submit</button>
        </form>
      </div>


            <MyFooter />
    </>
  )
}
