
import React from 'react'
import Header from "../../components/Header"
import page4item1 from "../../../(auth)/page4item1.png"
import Image from 'next/image'

function Page() {
  return (
    <div>
      <Header/>
      {/* Hero Section */}
      <div className="h-48 md:h-80 w-full bg-Bi flex items-center justify-center bg-cover bg-center pt-16 md:pt-24">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-black">Cart</h1>
          <nav className="text-sm md:text-base mt-2 md:mt-4 text-gray-700">
            <span className="font-semibold text-black">Home</span> 
            <span className="mx-2">&gt;</span> 
            <span>Cart</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full px-4 md:px-8 gap-8 mt-8 md:mt-20">
        {/* Product Section */}
        <div className="w-full md:w-[60%] bg-customskin p-4 md:p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Image 
              className="h-20 w-20 md:h-24 md:w-24 rounded-lg bg-customYellow" 
              src={page4item1} 
              alt="Asgard sofa" 
            />
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-base md:text-lg text-gray-500">Asgard sofa</p>
                <p className="text-sm md:text-base text-gray-500">Rs. 250,000</p>
              </div>
              <div className="grid grid-cols-2 md:flex gap-4 md:gap-8">
                <button className="text-sm md:text-base">Product</button>
                <button className="text-sm md:text-base">Price</button>
                <button className="text-sm md:text-base">Quantity</button>
                <button className="text-sm md:text-base">Subtotal</button>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="w-full md:w-[35%] bg-customskin p-6 rounded-lg h-fit">
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">Cart Totals</h1>
          
          <div className="flex justify-between items-center mb-4">
            <span className="text-base md:text-lg font-medium">SubTotal</span>
            <span className="text-base md:text-lg text-gray-400">Rs. 250,000.00</span>
          </div>

          <div className="flex justify-between items-center border-t pt-4 mb-8">
            <span className="text-lg md:text-xl font-semibold">Total</span>
            <span className="text-xl md:text-2xl font-semibold text-customMehendi">Rs. 250,000.00</span>
          </div>

          <button className="w-full py-3 md:py-4 text-sm md:text-base font-medium text-black rounded-2xl bg-customskin border border-black hover:bg-gray-100 transition">
            Check Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page