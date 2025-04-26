import React from 'react'

import Header from "../../components/Header"
function page() {
    return (
        <div> <Header />
            <div className=" bg-Bi h-72 w-full   justify-center items-center pt-24 bg-cover bg-center">

                <div className="relative text-center ">
                    <h1 className="text-5xl font-bold text-black">My Account</h1>
                    <p className="text-gray-700 mt-2 pt-5">
                        <span className="font-semibold text-black">Home</span> <span className="mx-2">&gt;</span> <span>Account</span>
                    </p>
                </div>
            </div>


            <div className='bg-white  min-h-screen flex flex-row w-full '>
                {/* left side  */}
                <div className="flex flex-col  w-[50%] pr-52 pt-40">

                    <h1 className=" flex justify-start ml-20 font-extrabold text-black text-3xl">Login</h1>

                    {/* <p className='font-semibold flex ml-0  justify-start  text-gray-900   pl-20 pt-10 text-lg'>Username or email address</p> */}

                    
                    <div  className="space-y-9">
          <label htmlFor="message" className="block font-semibold ml-0  justify-start  text-gray-900   pl-20 pt-10 text-lg  ">
          Username or email address
          </label>
          <input
            id="message"
            
            className="mt-1 block w-[70%] pl-9 h-20 ml-12 rounded-md border border-gray-700 shadow-md focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
        </div>


        <div  className="space-y-9">
          <label htmlFor="message" className="block font-semibold ml-0  justify-start  text-gray-900   pl-12 pt-14 text-lg  ">
          Password
          </label>
          <input
            id="message"
            
            className="mt-1 block w-[70%] pl-9 h-20 ml-12 rounded-md border border-gray-700 shadow-md focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
          />
        </div>



        <div className="flex items-center pt-16 ml-14">
    <input 
    type="checkbox"
    id="remember"
    placeholder='checkbox'
    className="h-6 w-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
  />
  <label  className="ml-2  text-gray-700 text-sm font-medium">
    Remember me
  </label>
</div>

                   <div className='flex flex-row'>
                    <button className="rounded-lg ml-14 mt-24 h-16 w-52 text-lg font-semibold text-black  bg-white border border-black  hover:bg-gray-100 transition">Login</button>
                   <button  className='text-gray-900 text-sm pl-10 mt-28 font-semibold'>Lost Your Password?</button> 
                   </div>
                </div>

              {/* Right Side of the screen */}
                <div className="flex flex-col  justify-start w-[50%] ">
                    <h1 className="  font-extrabold text-start pr-16 pt-40 text-black text-3xl">Register</h1>
                    <p className='font-semibold pt-9 text-gray-900 text-left text-base'>Email Address</p>
                    <button className=" h-20 w-96 rounded-lg text-lg font-semibold text-white mt-8 bg-white border border-gray-600  ">O</button>

                    <p className='font-medium pt-9 text-gray-900 text-left text-base'>A link to set a new password will be sent to your email <br />
                        address</p>

                    <br /><br />



<div className="text-black  leading-relaxed font-normal pt-7 sm:mt-10 mt-7 mb-8  sm:text-[1.2rem] text-[1rem]  sm:tracking-wider tracking-normal   text-left space-x-0  w-[70%] text-base">
  Your personal data will be used to support your experience throughout this website, 
  to manage <br /> access  to your account, and for other purposes <br /> described in our 
  <span className="font-bold pl-3">privacy policy</span>.
</div>
                    <button className="rounded-lg h-16 w-52 text-lg font-semibold mb-32 text-black mt-8 bg-white border border-black  hover:bg-gray-100 transition">Register</button>
                </div>




            </div>


        </div>
    )
}

export default page