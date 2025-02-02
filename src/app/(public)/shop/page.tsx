"use client"; // Added for client-side interactions

import ProductListing from "@/app/components/ProductListing";
import Header from "../../components/Header";
import sanityFetch from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/query";
import Image from "next/image";
import { useState, useEffect } from 'react';
// Define the Product type within this file
interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}
import { HiDotsHorizontal, HiSwitchVertical, HiAdjustments } from 'react-icons/hi';
import { HiSquares2X2 } from 'react-icons/hi2';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { useSearchParams } from 'next/navigation';
interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

export default function Shop() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const query = searchParams.get('query') || '';
    setSearchQuery(query);
  }, [searchParams]);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await sanityFetch({ query: allProducts });
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  // const categories = ['all', ...new Set(products.map(product => product.category))];
  const categories = ['all', ...new Set(products?.map(product => product.category) || [])];

  // Filtered products list
  const filteredProducts = products?.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }) || [];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      <Header />


      {/* Hero Section */}
      <div className="h-80 w-full bg-Bi justify-center items-center pt-24 bg-cover bg-center">
        <div className="relative text-center ">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-black">Shop </h1>
            <p className="text-gray-700 mt-2 pt-5">
              <span className="font-semibold text-black">Home</span> <span className="mx-2">&gt;</span> <span>Shop</span>
            </p>
          </div>
        </div>
      </div>
      {/* Search and Filters Section */}
      <div className=" bg-custompin z-10">
        {/* Search Bar */}
        <div className="px-4 md:px-8 py-4 border-b">
          <input
            type="text"
            placeholder="Search products..."
            className="w-[30%] p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Add No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-xl text-gray-600">No products found matching your search criteria</p>
          </div>
        )}

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

        {/* Original Filters */}
        <div className='h-16 md:h-20 w-full flex items-center px-8 md:px-8'>
          <div className="w-full flex justify-between items-center">
            {/* Mobile Filters */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center gap-2"
              >
                <HiAdjustments className="w-5 h-5 text-black" />
                <span className="text-sm">Filter</span>
              </button>
              <HiSquares2X2 className="w-4 h-4 text-black" />
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <HiDotsHorizontal className="w-6 h-6 text-black" />
                <span>Filter</span>
              </div>
              <HiSquares2X2 className="w-5 h-5 cursor-pointer" />
              <HiBars3BottomLeft className="w-5 h-5 cursor-pointer" />
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

      {/* Product listings */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
        {filteredProducts.map((product: Product, index: number) => (
          <ProductListing key={product.id || index} products={[product]} />
        ))}
      </div>

      {/* Product Grid */}
      <div className="p-8">
        <h2 className="text-4xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-transform transform hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative h-64">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold truncate">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-2 flex-grow">
                  {product.description.length > 50
                    ? `${product.description.substring(0, 50)}...`
                    : product.description}
                </p>

                {/* Price and Discount */}
                <p className="text-lg font-bold mt-4">${product.price}</p>
                {product.discountPercentage > 0 && (
                  <p className="text-sm text-red-500 mt-1">
                    Save {product.discountPercentage}%!
                  </p>
                )}

                {/* Stock Information */}
                <p className="text-xs text-gray-500 mt-2">
                  {product.stockLevel > 0
                    ? `In Stock: ${product.stockLevel}`
                    : "Out of Stock"}
                </p>
              </div>

              {/* Featured Badge */}
              {product.isFeaturedProduct && (
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className='bg-custompin h-80 flex justify-center items-center text-sm gap-4'>
        <button className='h-12 w-12 bg-customYellow text-gray-950 mt-36 rounded-lg'>1</button>
        <button className='h-12 w-12 bg-customskin text-gray-950 mt-36 rounded-lg'>
          <a href="/shop2">2</a>
        </button>
        <button className='h-12 w-12 bg-customskin text-gray-950 mt-36 rounded-lg'>
          <a href="/shop2">3</a>
        </button>
        <button className='h-11 w-20 bg-customskin text-gray-950 mt-36 rounded-lg'>
          <a href="/shop2">Next</a>
        </button>
      </div>
    </div>
  );
}