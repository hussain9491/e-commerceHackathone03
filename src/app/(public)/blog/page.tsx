import Image from 'next/image';
import Link from 'next/link';
import page4img2 from '../../../(auth)/page4img2.png';
import page4img1 from '../../../(auth)/page4img1.png';

import blog2 from '../../../(auth)/blog2.png'
import blog_pic from '../../../(auth)/blog_pic.jpg'
import Header from '@/app/components/Header';

const posts = [
  {
    id: 1,
    title: 'Going all-in with millennial design',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices.',
    image: page4img2,
    author: 'Admin',
    date: '14 Oct 2022',
    category: 'Wood',
    content: '',
  },
  {
    id: 2,
    title: 'Exploring new ways of decorating',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices.',
    image: blog_pic,
    author: 'Admin',
    date: '14 Oct 2022',
    category: 'Handmade',
    content: '',
  },
  {
    id: 3,
    title: 'Handmade pieces that took time to make',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices.',
    image: blog2,
    author: 'Admin',
    date: '14 Oct 2022',
    category: 'Wood',
    content: '',
  },
];

const categories = [
  { name: 'Crafts', count: 2 },
  { name: 'Design', count: 8 },
  { name: 'Handmade', count: 7 },
  { name: 'Interior', count: 1 },
  { name: 'Wood', count: 4 },
];

const recentPosts = [
  {
    id: 1,
    title: 'Going all-in with millennial design',
    image: page4img1,
    date: '03 Aug 2022',
  },
  {
    id: 2,
    title: 'Exploring new ways of decorating',
    image: blog_pic,
    date: '03 Aug 2022',
  },
  {
    id: 3,
    title: 'Handmade pieces that took time to make',
    image: blog2,
    date: '03 Aug 2022',
  },
  {
    id: 4,
    title: 'Modern home in Milan',
    image: page4img2,
    date: '03 Aug 2022',
  },
  {
    id: 5,
    title: 'Colorful office redesign',
    image: blog_pic,
    date: '03 Aug 2022',
  },
];

export default function BlogPage() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <div className="h-60 md:h-80 w-full bg-Bi bg-cover bg-center flex items-center justify-center pt-16 md:pt-24">
                <div className="text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-black">Blog</h1>
                    <p className="text-gray-700 mt-2 md:mt-4 text-sm md:text-base">
                        <span className="font-semibold text-black">Home</span> 
                        <span className="mx-2">&gt;</span> 
                        <span>Blog</span>
                    </p>
                </div>
            </div>
            <div className="bg-[#faf9f6] min-h-screen flex flex-col">

      {/* Main Content */}
      <div className="max-w-6xl mx-auto w-full flex-1 px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Blog Posts */}
        <div className="md:col-span-2 flex flex-col gap-12">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
              <div className="w-full aspect-[3/2] relative rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
                <span className="flex items-center gap-1"><svg width="16" height="16" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/></svg> {post.author}</span>
                <span>{post.date}</span>
                <span>{post.category}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mt-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">{post.excerpt}</p>
              <Link href="#" className="text-black font-medium hover:underline text-sm">Read more</Link>
            </div>
          ))}
          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            <button className="h-10 w-10 rounded bg-yellow-100 text-yellow-700 font-bold">1</button>
            <button className="h-10 w-10 rounded bg-yellow-50 text-yellow-700">2</button>
            <button className="h-10 w-10 rounded bg-yellow-50 text-yellow-700">3</button>
            <button className="h-10 px-4 rounded bg-yellow-50 text-yellow-700">Next</button>
          </div>
        </div>
        {/* Sidebar */}
        <aside className="md:col-span-1 flex flex-col gap-8">
          {/* Search */}
          <div className="bg-white rounded-xl shadow p-4 flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 border-none outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
            <svg width="20" height="20" fill="none" stroke="#bfa046" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </div>
          {/* Categories */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.name} className="flex justify-between text-gray-700 text-sm">
                  <span>{cat.name}</span>
                  <span>{cat.count}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Recent Posts */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            <div className="flex flex-col gap-4">
              {recentPosts.map((post) => (
                <Link key={post.id} href="#" className="flex items-center gap-3 group">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition" />
                  </div>
                  <div className="flex flex-col  ">
                    <span className="text-gray-700 text-sm group-hover:text-yellow-700 transition font-medium">
                      {post.title}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
      {/* Footer */}
      <footer className="bg-custompin mt-16 pt-12 pb-4 border-t border-gray-100">
        <div className="max-w-6xl  mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-2">Free Delivery</h4>
            <p className="text-gray-500 text-sm">For all oders over $50, consectetur adipim scing elit.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">90 Days Return</h4>
            <p className="text-gray-500 text-sm">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Secure Payment</h4>
            <p className="text-gray-500 text-sm">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
        
        
      </footer>
    </div>
    </div>
  );
}