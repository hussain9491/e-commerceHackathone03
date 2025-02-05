
"use client";
import { useState } from 'react';
import Header from "../../components/Header";
import Image from 'next/image';
import { HiAdjustmentsHorizontal, HiSquares2X2, HiBars3 } from 'react-icons/hi2';
import { HiSwitchVertical } from 'react-icons/hi';
import Link from 'next/link';

// Import all images (adjust paths as needed)
const images = {
  page3image1: require("../../../(auth)/page3image1.png"),
  page3image2: require("../../../(auth)/page3image2.png"),
  page3image3: require("../../../(auth)/page3image3.png"),
  page3image4: require("../../../(auth)/page3image4.png"),
  coffeetable: require("../../../(auth)/coffeetable.png"),
  Bellachairandtable1 : require("../../../(auth)/Bellachairandtable1.png"),
  homeleft : require("../../../(auth)/homeleft.png"),
  Outdoorsofaset1 : require("../../../(auth)/Outdoorsofaset1.png"),
  Mayasofathreeseater1 : require("../../../(auth)/Mayasofathreeseater1.png"),
  Kent_coffee_table_1 : require("../../../(auth)/Kent_coffee_table1.png"),
  Round_coffee_table1 : require("../../../(auth)/Round coffee table_color1.png"),
  Reclaimed_teak_coffee_table1 : require("../../../(auth)/Reclaimed teak coffee table1.png"),
  Plainconsole_1 : require("../../../(auth)/Plainconsole_1.png"),
  Stuartsofa1 : require("../../../(auth)/Stuart sofa 1.png"),
  sjp_08251 : require("../../../(auth)/SJP_08251.png"),
  plainconsole_1 : require("../../../(auth)/Plainconsole_1.png"),
  homeRight : require("../../../(auth)/homeRight.png"),
  ReclaimedteakSideboard1 : require("../../../(auth)/Reclaimed teak coffee table1.png"),
  // Import all other images similarly...
};

export default function ShopPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Define categories array
  const categories = ['all', 'sofa', 'dining', 'outdoor', 'console', 'table', 'sideboard', 'chair'];

  // Product data array for DRY code
  
  const products = [
    {
      image: images.page3image1,
      name: "Trenton modular sofa_3",
      price: "25,000.00",
      category: "sofa"
    },
    {
      image: images.page3image2,
      name: "Granite dining table with dining chairs",
      price: "25,000.00",
      category: "dining"
    },
    {
    image: images.page3image3,
      name: "Outdoor bar table and stoole",
      price: "25,000.00",
      category: "outdoor"
    },
    {
      image: images.page3image4,
        name: "plain console with teak mirror",
        price: "25,000.00",
        category: "console"
      },
      
    {
      image: images.coffeetable,
        name: "Granite dining table with dining chairs",
        price: "15,000.00",
        category: "dining"
      },
      {
        image: images.Kent_coffee_table_1,
          name: "kent coffee table",
          price: "250,000.00",
          category: "table"
        },
        {
          image: images.Round_coffee_table1,
            name: "round coffee table colour2",
            price: "251,000.00",
            category: "table"
          },
          {
            image: images.Reclaimed_teak_coffee_table1,
              name: "reclaimed teak coffee table",
              price: "25,200.00",
              category: "table"
            },
            {
              image: images.Plainconsole_1,
                name: "plain console",
                price: "258,200.00",
                category: "console"
              },
              {
                image: images.ReclaimedteakSideboard1,
                  name: "ReclaimedteakSideboard1",
                  price: "245,000.00",
                  category: "sideboard"
                },
                {
                  image: images.sjp_08251,
                    name: "bella chair",
                    price: "35,000.00",
                    category: "chair"
                  },
                  {
                    image: images.Bellachairandtable1,
                      name: "Granite dining table with dining chairs",
                      price: "25,000.00",
                      category: "dining"
                    },
                    
                  {
                    image: images.homeRight,
                      name: "Outdoor sofa set",
                      price: "25,000.00",
                      category: "sofa"
                    },

                    {
                      image: images.homeleft,
                        name: "Table",
                        price: "4,000.00",
                        category: "table"
                      },
                      {
                        image: images.Outdoorsofaset1,
                          name: "Asgard sofa ",
                          price: "65,000.00",
                          category: "sofa"
                        },
                        {
                          image: images.Mayasofathreeseater1,
                            name: "Mayo Sofa three seater",
                            price: "455,000.00",
                            category: "sofa"
                          },
                          
            
    // Add all other products here...
  ];


      // Filtering logic
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      <Header />
      
      {/* Hero Section */}
      <div className="h-48 md:h-80 w-full bg-Bi flex items-center justify-center bg-cover bg-center">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-black">Shop</h1>
          <nav className="text-sm md:text-base mt-2 md:mt-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <span className="mx-2 text-gray-700">&gt;</span>
            <span className="text-gray-700">Shop</span>
          </nav>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="sticky top-0 bg-custompin z-10">
        {/* Search Bar */}
        <div className="px-4 md:px-8 py-4 border-b">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Filters */}
        <div className="px-4 md:px-8 py-4 flex flex-wrap gap-2 border-b">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Original Filters Section */}
        <div className='h-16 md:h-20 w-full flex items-center px-4 md:px-8'>
          <div className="w-full flex justify-between items-center">
            {/* Mobile Filters */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center gap-2"
              >
                <HiAdjustmentsHorizontal className="w-5 h-5 text-black" />
                <span className="text-sm">Filter</span>
              </button>
              <HiSquares2X2 className="w-4 h-4 text-black" />
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <HiAdjustmentsHorizontal className="w-6 h-6 text-black" />
                <span>Filter</span>
              </div>
              <HiSquares2X2 className="w-5 h-5 cursor-pointer" />
              <HiBars3 className="w-5 h-5 cursor-pointer" />
              <HiSwitchVertical className="w-5 h-5 cursor-pointer" />
              <span>Showing {filteredProducts.length} of {products.length} results</span>
            </div>

            {/* Sort Controls */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span>Show</span>
                <button className='h-8 w-8 bg-white text-gray-300 text-sm'>16</button>
              </div>
              <div className="flex items-center gap-2">
                <span>Sort by</span>
                <button className='h-8 w-24 bg-white text-gray-300 text-sm'>Default</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Updated Product Grid using filteredProducts */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-4 md:p-8">
        {filteredProducts.map((product, index) => (
          <div 
            key={index}
            className="group relative transform transition-transform duration-300 hover:scale-105"
          >
            <div className="aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                className="h-auto w-auto object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-xs md:text-sm text-gray-900">{product.name}</h3>
              <p className="text-base md:text-lg font-semibold mt-2">RS {product.price}</p>
            </div>
          </div>
        ))}
      </div>













      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 md:gap-4 py-8 md:py-12">
        {[1, 2, 3].map((page) => (
          <Link
            key={page}
            href="/shop"
            className="h-10 w-10 md:h-12 md:w-12 bg-customskin text-gray-950 rounded-lg flex items-center justify-center text-sm md:text-base hover:bg-opacity-80"
          >
            {page}
          </Link>
        ))}
        <Link
          href="/shop"
          className="h-10 w-16 md:h-12 md:w-20 bg-customskin text-gray-950 rounded-lg flex items-center justify-center text-sm md:text-base hover:bg-opacity-80"
        >
          Next
        </Link>
      </div>

      {/* Services Section */}
      <div className="bg-custompin py-8 md:py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-lg md:text-xl font-bold">Free Delivery</h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              For all orders over $50, consectetur adipim scing elit
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-lg md:text-xl font-bold">90 Days Return</h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              If goods have problems, consectetur adipim scing elit
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-lg md:text-xl font-bold">Secure Payment</h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              100% secure payment, consectetur adipim scing elit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
