import React from 'react'
import { Link } from 'react-router-dom'
// import linkScroll from 'react-scroll';


export default function NavBar() {

    const hamBurgerEffect = (e) => {
        const bar1 = document.getElementById('bar1');
        const bar2 = document.getElementById('bar2');
        const bar3 = document.getElementById('bar3');
        const nav = document.getElementById('nav');

        bar1.classList.toggle("translate-y-2");
        bar1.classList.toggle("bg-yellow-300");
        bar1.classList.toggle("rotate-45");
        bar2.classList.toggle("invisible");
        bar3.classList.toggle("-translate-y-2");
        bar3.classList.toggle("-rotate-45");
        bar3.classList.toggle("bg-yellow-300");

        nav.classList.toggle("translate-y-[-1000px]");
    }

    return (
        <>
            <header className=' fixed w-full top-0 right-0 z-[1000] bg-purple-500'>
                <nav className='mx-2 py-2 flex items-center justify-between text-white'>
                    <div className="left cursor-pointer flex items-center">
                        <span className="text-2xl md:text-3xl font-semibold font-mono text-[#ffff00]"><span
                            className="text-white">i</span>Logo</span>
                    </div>
                    <div className='middle hidden md:block'>
                        <ul className='flex space-x-6  '>
                            <li className='hover:underline hover:scale-105 font-medium transition text-xl'><Link to='/'>Home</Link></li>
                            <li className='hover:underline hover:scale-105 font-medium transition text-xl'><Link to='/'>Shop</Link></li>
                            <li className='hover:underline hover:scale-105 font-medium transition text-xl'><Link to='/'>New Arrivals</Link></li>
                            <li className='hover:underline hover:scale-105 font-medium transition text-xl'><Link to='about' smooth duration={500}>About</Link></li>
                            <li className='hover:underline hover:scale-105 font-medium transition text-xl'><Link to='/'>Our Partners</Link></li>
                            <li className='hover:underline hover:scale-105 font-medium transition text-xl'><Link to='/'>Contact</Link></li>

                        </ul>
                    </div>
                    <div className="right flex items-center order-3">
                        <div className="search hidden cursor-pointer lg:flex justify-center items-center">
                            <span className="material-symbols-outlined ">search</span>
                        </div>
                        {/* <!-- <div className="cart hidden cursor-pointer lg:flex justify-center items-center">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        </div> --> */}
                        <div className="login  lg:block cursor-pointer flex justify-center items-center">
                            <Link to='/login'><span className="material-symbols-outlined text-3xl">person</span></Link>

                        </div>

                        <div className="w-7 h-12 flex flex-col justify-center  ww cursor-pointer z-99999999 md:hidden" id="hamburger" onClick={hamBurgerEffect}>
                            <div className="bg-white  w-full h-1 rounded-md transition-all delay-150" id="bar1"></div>
                            <div className="bg-white my-1 w-full h-1 rounded-md transition-all  " id="bar2"></div>
                            <div className="bg-white  w-full h-1 rounded-md transition-all delay-150" id="bar3"></div>
                        </div>

                        <ul class="py-3 md:hidden sm:flex sm:flex-col transition-all delay-150 translate-y-[-1000px] bg-blue-900  opacity-90 text-white absolute w-full top-16 left-0 ml-[0px]" id="nav">
                            <li class="hover:underline py-3 text-center"><a href="#home">Home</a></li>
                            <li class="hover:underline py-3 text-center"><a href="#shop">Shop</a></li>
                            <li class="hover:underline py-3 text-center"><a href="#new">New Arrival</a></li>
                            <li class="hover:underline py-3 text-center"><a href="#about">About</a></li>
                            <li class="hover:underline py-3 text-center"><a href="#brands">Our Partners</a></li>
                            <li class="hover:underline py-3  text-center"><a href="#contact">Contact</a></li>
                        </ul>

                    </div>
                </nav>
            </header>
        </>

    )
}
