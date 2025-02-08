import Image from "next/image";

function SingleProduct() {
  return (
    <div className="max-w-[1121px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mt-10">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-[400px] h-[400px]  flex items-center justify-center">
            <Image className="w-full h-full"
                src="/chair2.jpg" alt="image"
                height={50}
                width={100}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Library Stool Chair
          </h1>
          <p className="text-2xl font-bold text-teal-500 mb-6">$20.00 USD</p>
          <p className="text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur lacinia mauris eu mi tincidunt, eu
            tincidunt purus tincidunt.
          </p>
          <button className="px-8 py-3 bg-teal-500 text-white text-lg rounded-md hover:bg-teal-600 transition">
            Add To Cart
          </button>
        </div>
      </div>

      <div className="mt-20 px-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl mt-10 mb-20 font-semibold">Featured Products</h2>
          <a href="../product" className="text-teal-500 hover:underline">
            View all
          </a>
        </div>

        <div className="flex flex-wrap justify-center mb-10">
          
          <div className="w-[240px] h-[305px] flex flex-col justify-between p-4">
            
            <div className="h-[263px] w-full bg-gray-400 rounded-t-md overflow-hidden">
              <Image
                src="/chair9.jpg"
                alt="Product Image"
                height={50}
                width={100}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium">Library Stool Chair</h3>
            <p className="text-gray-700">$99</p>
          </div>

          <div className="w-[240px] h-[305px] flex flex-col justify-between p-4">
            <div className="h-[263px] w-full bg-gray-400 rounded-t-md overflow-hidden">
              <Image
                src="/chair1.jpg"
                alt="Product Image"
                height={50}
                width={100}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium">Library Stool Chair</h3>
            <p className="text-gray-700">$99</p>
          </div>

          <div className="w-[240px] h-[305px] flex flex-col justify-between p-4">
            <div className="h-[263px] w-full bg-gray-400 rounded-t-md overflow-hidden">
              <Image
                src="/chair7.jpg"
                alt="Product Image"
                height={50}
                width={100}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium">Library Stool Chair</h3>
            <p className="text-gray-700">$99</p>
          </div>

          <div className="w-[240px] h-[305px] flex flex-col justify-between p-4">
            <div className="h-[263px] w-full bg-gray-400 rounded-t-md overflow-hidden">
              <Image
                src="/chair3.jpg"
                alt="Product Image"
                height={50}
                width={100}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium">Library Stool Chair</h3>
            <p className="text-gray-700">$99</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
