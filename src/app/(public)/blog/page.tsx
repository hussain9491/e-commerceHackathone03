
import Image from 'next/image';
import Link from 'next/link';
import page4img2 from "../../../(auth)/page4img2.png";
import page4img1 from "../../../(auth)/page4img1.png";
import page4img3 from "../../../(auth)/page4img3.png";
import Header from '@/app/components/Header';
export default function BlogPost() {
  return (
    <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden overflow-y-hidden">
      <Header/>
      Featured Image
      <div className="mb-12">
        <Image
          src={page4img1}
          alt="Millennial design showcase"
          width={400}
          height={200}
          className="rounded-lg object-cover  h-64 md:h-96"
        />

        
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Article Section */}
        <div className="lg:w-2/3">
          <article>
            {/* ... existing article content ... */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Going all-in with millennial design
              </h1>
              <p className='text-left w-[80%] text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi placeat, odio ab amet, reiciendis totam porro impedit minima dolorem delectus eaque blanditiis consectetur obcaecati earum molestias est voluptatibus veritatis magnam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laudantium tempora quaerat fugit. Reprehenderit ratione inventore quaerat nesciunt laboriosam! Explicabo corporis tempore debitis earum. Nesciunt, neque doloremque. Veniam, eum molestias.</p>
          </article>
         </div>




        {/* Sidebar */}
        <div className="lg:w-1/3">
        Going all-in with millennial design
                  <div className="mb-12 flex items-center gap-4">
            <Image
              src={page4img3}
              alt="Author avatar"
              width={80}
              height={80}
              className="rounded-full w-16 h-16"
            />
            <div>
              <h4 className="font-bold">Author Name</h4>
              <p className="text-sm text-gray-500">Design Expert</p>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Categories</h3>
            {/* ... existing categories ... */}
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-bold mb-6">Recent Posts</h3>
            <div className="space-y-6">
              {/* Post 1 */}
              <div className="border-b pb-4">
                <div className="flex items-center gap-4 mb-3">
                  <div className="relative w-16 h-16">
                    <Image
                      src={page4img2} // Replace with actual post image
                      alt="Post thumbnail"
                      fill
                      className="rounded object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Exploring new ways of discarding</h4>
                    <p className="text-sm text-gray-500 mt-1">03 Aug 2022</p>
                  </div>
                </div>
              </div>

              {/* Post 2 */}
              <div className="border-b pb-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={page4img3} // Replace with actual post image
                      alt="Post thumbnail"
                      fill
                      className="rounded object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Handmade pieces that work time for novice</h4>
                    <p className="text-sm text-gray-500 mt-1">28 Jul 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      
    </div>
  );
}