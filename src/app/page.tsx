import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import Image from "next/image"
import Home1 from "../(auth)/Home1.png"
import homeleft from "../(auth)/homeleft.png"
import homeRight from "../(auth)/homeRight.png"
import page3image1 from "../(auth)/page3image1.png"
import page3image2 from "../(auth)/page3image2.png"
import page3image3 from "../(auth)/page3image3.png"
import page3image4 from "../(auth)/page3image4.png"
// import page6bg from "../(auth)/page6bg.png"
import page4item1 from "../(auth)/page4item1.png"
import page4img1 from "../(auth)/page4img1.png"
import page4img2 from "../(auth)/page4img2.png"
import page4img3 from "../(auth)/page4img3.png"
import { Button } from "@/components/ui/button"
import Header from "./components/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock , faCalendarAlt} from "@fortawesome/free-solid-svg-icons";




export default function Home() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div className="bg-yellow-100 min-h-80 ">
        {/* Header */}
<div >
   <Header/>
   
</div>
        <section className="container mx-auto flex items-center justify-center p-8">
          {/* Text Content */}
          <div className="max-w-md pr-20 pt-8">
            <h1 className="text-4xl font-semibold text-black mb-4  ">Rocket single  <br /> <p className="pt-5"> seater</p> </h1>
            <a
              href="/shop"
              className="inline-block font-medium text-black hover:text-gray-700  mt-4 "
            >
              Shop Now
              <p className="text-black font-bold ">__________</p>
             </a>
          </div>

          {/* Image Content */}
          <div className="max-w-md">
            <Image src={Home1} alt="Home-page-Sofa" className="w-full h-full" />
          </div>
        </section>
      </div>

      <div className="bg-pink-50 pt-14">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Product 1 */}
      <div className="flex flex-col items-center">
        <Image
          src={homeleft}
          alt="Side Table"
          height={902}
          className="w-full max-w-md object-contain"
        />
        <h2 className="text-2xl font-semibold text-black mt-4">
          Side Table
        </h2>
        <a
          href="/shop"
          className="text-black mt-2 hover:text-gray-700"
        >
          View More
          <p className="text-black font-bold mt-1">__________</p>
        </a>
      </div>

      {/* Product 2 */}
      <div className="flex flex-col items-center">
        <Image
          src={homeRight}
          alt="Side Table"
          className="w-full max-w-md object-contain"
        />
        <h2 className="text-2xl font-semibold text-black mt-4">
          Side Table
        </h2>
        <a
          href="/shop"
          className="text-black mt-2 hover:text-gray-700"
        >
          View More
          <p className="text-black font-bold mt-1">__________</p>
        </a>
      </div>
    </div>
  </div>
</div>





<div className="bg-white min-h-screen pt-20">
  {/* Header Section */}
  <h1 className="font-semibold text-center text-2xl">
    Top Picks For You
  </h1>
  <p className="text-xs font-normal text-center text-gray-400 pt-5">
    Find a bright idea to suit your taste with our great selection of suspension, floor and table lights
  </p>

  {/* Products Section - Har Product ka image aur details ek container mein */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center pt-20 px-4">
    {/* Product 1 */}
    <div className="flex flex-col items-center">
      <div className="relative transform transition-transform duration-300 hover:scale-105 hover:shadow-lg h-40 md:h-48 w-36 md:w-52">
        <button title="Trenton modular sofa_3">
          <Image
            src={page3image1}
            alt="Trenton modular sofa_3"
            layout="fill"
            objectFit="contain"
          />
        </button>
      </div>
      <h3 className="text-sm text-gray-900 pt-4 md:pt-8">
        Trenton modular sofa_3
      </h3>
      <h1 className="text-lg text-black font-semibold pt-2 md:pt-4">
        RS 25,000.00
      </h1>
    </div>

    {/* Product 2 */}
    <div className="flex flex-col items-center">
      <div className="relative transform transition-transform duration-300 hover:scale-105 hover:shadow-lg h-40 md:h-48 w-36 md:w-52">
        <button title="Granite dining table with dining chairs">
          <Image
            src={page3image2}
            alt="Granite dining table with dining chairs"
            layout="fill"
            objectFit="contain"
          />
        </button>
      </div>
      <h3 className="text-sm text-gray-900 pt-4 md:pt-8">
        Granite dining table with dining chairs
      </h3>
      <h1 className="text-lg text-black font-semibold pt-2 md:pt-4">
        RS 25,000.00
      </h1>
    </div>

    {/* Product 3 */}
    <div className="flex flex-col items-center">
      <div className="relative transform transition-transform duration-300 hover:scale-105 hover:shadow-lg h-40 md:h-56 w-36 md:w-52">
        <button title="Outdoor bar table and stoole">
          <Image
            src={page3image3}
            alt="Outdoor bar table and stoole"
            layout="fill"
            objectFit="contain"
          />
        </button>
      </div>
      <h3 className="text-sm text-gray-900 pt-4 md:pt-8">
        Outdoor bar table and stoole
      </h3>
      <h1 className="text-lg text-black font-semibold pt-2 md:pt-4">
        RS 25,000.00
      </h1>
    </div>

    {/* Product 4 */}
    <div className="flex flex-col items-center">
      <div className="relative transform transition-transform duration-300 hover:scale-105 hover:shadow-lg h-40 md:h-48 w-36 md:w-52">
        <button title="Plain console with teak mirror">
          <Image
            src={page3image4}
            alt="Plain console with teak mirror"
            layout="fill"
            objectFit="contain"
          />
        </button>
      </div>
      <h3 className="text-sm text-gray-900 pt-4 md:pt-8">
        Plain console with teak mirror
      </h3>
      <h1 className="text-lg text-black font-semibold pt-2 md:pt-4">
        RS 25,000.00
      </h1>
    </div>
  </div>

  {/* View More Link */}
  <div className="flex flex-col items-center pt-10">
    <a href="/moreitems" className="text-lg font-semibold text-black hover:underline">
      View More
    </a>
    <p className="text-black font-bold mt-1">____________</p>
  </div>
</div>





            {/* This is our Asgaard Sofa Item home page4  */}
            <div className="h-auto w-full flex flex-col md:flex-row bg-customBeige">
  {/* Image Section */}
  <div className="flex justify-center items-center h-full md:w-[60%] pt-4">
    <Image src={page4item1} alt="Asgaard Sofa" />
  </div>

  {/* Button and Text Section */}
  <div className="flex flex-col items-center justify-center h-full md:w-[40%] bg-[#FFF8E7] font-sans p-8 md:pt-24">
    <h2 className="text-xl text-black font-semibold mb-2">New Arrivals</h2>
    <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">Asgaard sofa</h1>
    <button  className="px-12 md:px-20 py-4 text-lg font-semibold text-black mt-8 bg-white border border-black hover:bg-gray-100 transition">
    <a href="/shop">  Order Now</a>
    </button>
  </div>
</div>


 {/* this is 5th page  */}
 <div className="bg-white h-auto px-4 py-10">
  {/* Header Section */}
  <header className="text-center">
    <h1 className="text-3xl font-semibold text-black">Our Blogs</h1>
    <p className="text-sm font-semibold text-gray-500 pt-6">
      Find a bright idea to suit your taste with our great selection
    </p>
  </header>

  {/* Blog Posts Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
    {/* Blog Post 1 */}
    <div className="flex flex-col items-center">
      <div className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg w-full">
        <Image
          src={page4img1}
          alt="tea"
          width={362}
          height={500}
          className="w-full"
        />
      </div>
      <h1 className="text-xl font-medium text-center mt-4">
        Going all-in with millennial design
      </h1>
      <h1 className="text-2xl font-semibold text-center mt-2">Read More</h1>
      <p className="text-black font-bold text-center mt-2">______________</p>
      <div className="flex items-center justify-center space-x-2 mt-2">
        <FontAwesomeIcon icon={faClock} className="text-gray-900 h-5" />
        <span className="text-gray-700 text-sm">5 min</span>
        <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-900 h-5" />
        <span className="text-gray-700 text-sm">12th Oct 2022</span>
      </div>
    </div>

    {/* Blog Post 2 */}
    <div className="flex flex-col items-center">
      <div className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg w-full">
        <Image
          src={page4img2}
          alt="laptop"
          width={362}
          height={500}
          className="w-full"
        />
      </div>
      <h1 className="text-xl font-medium text-center mt-4">
        Going all-in with millennial design
      </h1>
      <h1 className="text-2xl font-semibold text-center mt-2">Read More</h1>
      <p className="text-black font-bold text-center mt-2">______________</p>
      <div className="flex items-center justify-center space-x-2 mt-2">
        <FontAwesomeIcon icon={faClock} className="text-gray-900 h-5" />
        <span className="text-gray-700 text-sm">5 min</span>
        <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-900 h-5" />
        <span className="text-gray-700 text-sm">12th Oct 2022</span>
      </div>
    </div>

    {/* Blog Post 3 */}
    <div className="flex flex-col items-center">
      <div className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg w-full">
        <Image
          src={page4img3}
          alt="tea-with-laptop"
          width={362}
          height={500}
          className="w-full"
        />
      </div>
      <h1 className="text-xl font-medium text-center mt-4">
        Going all-in with millennial design
      </h1>
      <h1 className="text-2xl font-semibold text-center mt-2">Read More</h1>
      <p className="text-black font-bold text-center mt-2">______________</p>
      <div className="flex items-center justify-center space-x-2 mt-2">
        <FontAwesomeIcon icon={faClock} className="text-gray-900 h-5" />
        <span className="text-gray-700 text-sm">5 min</span>
        <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-900 h-5" />
        <span className="text-gray-700 text-sm">12th Oct 2022</span>
      </div>
    </div>
  </div>

  {/* View All Posts */}
  <div className="flex flex-col items-center mt-10">
    <a href="/blog" className="text-lg font-semibold text-black hover:underline">
      View All Posts
    </a>
    <p className="text-black font-bold mt-1">________________</p>
  </div>
</div>



 {/* Back ground image */}

 <div className="bg-slate-400 bg-cover bg-center bg-repeat h-96 w-screen flex items-center justify-center">
  <div className="text-center">
    <h1 className="font-extrabold text-4xl md:text-6xl text-black">
      Our Instagram
    </h1>
    <h3 className="font-medium text-lg text-black pt-3">
      Follow our store on Instagram
    </h3>
    <Button
      variant="outline"
      className="w-56 h-14 mt-5 bg-white text-lg shadow-2xl text-gray-900 rounded-full"
    >
      Follow Us
    </Button>
  </div>
</div>


    </div>
  );
}
