
import Header from "../../../app/components/Header"
import React from "react";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactHeader() {
    return (
        <div>
            <Header />
            {/* Hero Section */}
            <div className="h-60 md:h-80 w-full bg-Bi bg-cover bg-center flex items-center justify-center pt-16 md:pt-24">
                <div className="text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-black">Contact</h1>
                    <p className="text-gray-700 mt-2 md:mt-4 text-sm md:text-base">
                        <span className="font-semibold text-black">Home</span> 
                        <span className="mx-2">&gt;</span> 
                        <span>Contact</span>
                    </p>
                </div>
            </div>

            {/* Get in Touch Section */}
            <div className="flex flex-col justify-center items-center mt-8 md:mt-16 px-4">
                <h1 className="font-bold text-2xl md:text-4xl text-black text-center">Get In Touch With Us</h1>
                <p className="text-sm md:text-base w-full md:w-2/3 lg:w-1/2 pt-4 md:pt-6 text-center">
                    For More Information About Our Product & Services. Please Feel Free To Drop Us
                    An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate
                </p>
            </div>

            {/* Contact Container */}
            <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16 px-4 md:px-8 mt-8 md:mt-16">
                {/* Contact Info */}
                <div className="w-full md:w-[40%] space-y-8 md:space-y-16">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-4 mb-4">
                            <FaMapMarkerAlt className="text-xl md:text-2xl" />
                            <h1 className="font-semibold text-xl md:text-2xl text-black">Address</h1>
                        </div>
                        <p className="text-sm md:text-base text-gray-900 text-center md:text-left">
                            236 5th SE Avenue, New York NY10000, United States
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-4 mb-4">
                            <FaPhoneAlt className="text-xl md:text-2xl" />
                            <h1 className="font-semibold text-xl md:text-2xl text-black">Phones</h1>
                        </div>
                        <p className="text-sm md:text-base text-gray-900 text-center md:text-left">
                            Mobile: +(84) 546-6789<br />
                            Hotline: +(84) 456-6789
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-4 mb-4">
                            <FaClock className="text-xl md:text-2xl" />
                            <h1 className="font-semibold text-xl md:text-2xl text-black">Working Time</h1>
                        </div>
                        <p className="text-sm md:text-base text-gray-900 text-center md:text-left">
                            Monday-Friday: 9:00 - 22:00<br />
                            Saturday-Sunday: 9:00 - 21:00
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="w-full md:w-[50%] mt-8 md:mt-0">
                    <form className="space-y-6">
                        <div className="space-y-4">
                            <label className="block text-base font-semibold text-gray-700">Your name</label>
                            <input
                                type="text"
                                placeholder="Abc"
                                className="w-full p-4 h-14 md:h-16 rounded border border-gray-500 focus:border-black focus:ring-1 focus:ring-black"
                            />
                        </div>

                        <div className="space-y-4">
                            <label className="block text-base font-semibold text-gray-700">Email address</label>
                            <input
                                type="email"
                                placeholder="Abc@def.com"
                                className="w-full p-4 h-14 rounded border border-gray-500 focus:border-black focus:ring-1 focus:ring-black"
                            />
                        </div>

                        <div className="space-y-4">
                            <label className="block text-base font-semibold text-gray-700">Subject</label>
                            <input
                                type="text"
                                placeholder="This is an optional"
                                className="w-full p-4 h-14 rounded border border-gray-500 focus:border-black focus:ring-1 focus:ring-black"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full md:w-44 mt-6 bg-white border border-gray-700 text-gray-900 py-3 px-6 rounded-xl hover:bg-black hover:text-white transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-pink-50 py-12 px-4 md:px-8 mt-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <h1 className="font-bold text-2xl md:text-3xl">Free Delivery</h1>
                        <p className="text-gray-500 mt-2 md:mt-4 text-base md:text-lg">
                            For all orders over $50, consectetur adipim scing elit
                        </p>
                    </div>
                    <div className="text-center">
                        <h1 className="font-bold text-2xl md:text-3xl">90 Days Return</h1>
                        <p className="text-gray-500 mt-2 md:mt-4 text-base md:text-lg">
                            If goods have problems, consectetur adipim scing elit
                        </p>
                    </div>
                    <div className="text-center">
                        <h1 className="font-bold text-2xl md:text-3xl">Secure Payment</h1>
                        <p className="text-gray-500 mt-2 md:mt-4 text-base md:text-lg">
                            100% secure payment, consectetur adipim scing elit
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}