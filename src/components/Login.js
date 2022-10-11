// import React from 'react'
import { Link } from "react-router-dom";
export default function Login() {


  // const handleForm = (e) => {
  //   e.preventDefault()
  //   const userEmail = document.getElementById('emailLogin');
  //   const userPassword = document.getElementById('passwordLogin');
  //   const link = document.getElementById('link');

  //   console.log(userEmail.value, userPassword.value);
  //   if ((userEmail.value === "testEmail123@gmail.com") && (userPassword.value === "pass@123")) {
  //     console.log("fired");
  //     // window.location = "/search-page";
  //     // // document.getElementById('toDirect')
  //     link.setAttribute('to', '/search-page');

  //   }
  //   else {
  //     console.log('no')
  //   }


  // }
  //   function validateCredentials() {
  //     if( (userEmail.value === "testEmail123@gmail.com") && (userPassword.value === "pass@123") ){
  //       console.log("fired");
  //       window.location = "../search-page/index.html";
  //       // document.getElementById('toDirect')
  //     }
  //     else{
  //       console.log('no')
  //     }
  //     // e.preventDefault()
  //   }

  return (
    <div className='py-20 flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen'>
      <div className="main-container bg-white w-96 mx-2">
        <h1 className="text-3xl text-center font-medium my-3 py-3 border border-transparent border-b-blue-600">Login</h1>
        <form  className="w-[76%] sm:w-[90%] mx-auto mt-10">
          <div className="row flex flex-col mb-5">
            <input type="email" name="emailLogin" id="emailLogin" placeholder="Email" className="border p-2 outline-blue-600" required />
          </div>
          <div className="row flex flex-col ">
            <input type="password" name="passwordLogin" id="passwordLogin" placeholder="Password" className="border p-2 outline-blue-600 " required />
          </div>
          <div className="row my-2">
            <a href="/" className="text-blue-900 underline underline-offset-2">Forget Password?</a>
          </div>
          <div className="row">
            <button className="px-4 py-2 bg-blue-500 rounded-sm text-white font-semibold ">
                <Link to='/search-page' id='link'>Login</Link>
            </button>
          </div>
          <div className="row my-3 flex">
            <p>Not a member?</p>
            <a href="/" className="mx-2 text-blue-900 underline underline-offset-2">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  )
}
