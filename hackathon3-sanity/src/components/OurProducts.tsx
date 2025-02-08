import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import Feature1 from "../Images/FeatureProduct1.png";
import Feature2 from "../Images/FeatureProduct2.png";
import Feature3 from "../Images/Explore1.png";
import Feature4 from "../Images/FeatureProduct4.png";
import Feature5 from "../Images/TopCategory1.png";
import Feature6 from "../Images/Image (1).png";
import Feature7 from "../Images/Feature7.png";
import Feature8 from "../Images/FeatureProduct1.png";

const ProductsPage = () => {
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-semibold mb-8">Our Products</h2>

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8">
        {/* Product Card 1 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
          <div className="relative w-full pt-[100%]">
            <Image
              src={Feature1}
              alt="Library Stool Chair"
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority
            />
          </div>

          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium mb-2">Library Stool Chair</h3>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold">$20</p>
                <p className="line-through text-sm text-gray-500">$39</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <FiShoppingCart className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
          <div className="relative w-full pt-[100%]">
            <Image
              src={Feature2}
              alt="Modern Office Chair"
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority
            />
          </div>
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium mb-2">Modern Office Chair</h3>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold">$25</p>
                <p className="line-through text-sm text-gray-500">$45</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <FiShoppingCart className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
          <div className="relative w-full pt-[100%]">
            <Image
              src={Feature3}
              alt="Classic Wooden Chair"
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority
            />
          </div>
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium mb-2">Classic Wooden Chair</h3>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold">$30</p>
                <p className="line-through text-sm text-gray-500">$55</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <FiShoppingCart className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
          <div className="relative w-full pt-[100%]">
            <Image
              src={Feature4}
              alt="Comfortable Armchair"
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority
            />
          </div>
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium mb-2">Comfortable Armchair</h3>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold">$35</p>
                <p className="line-through text-sm text-gray-500">$60</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <FiShoppingCart className="text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {/* Product Card 5 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
          <div className="relative w-full pt-[100%]">
            <Image
              src={Feature5}
              alt="Ergonomic Desk Chair"
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority
            />
          </div>
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium mb-2">Ergonomic Desk Chair</h3>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold">$40</p>
                <p className="line-through text-sm text-gray-500">$70</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <FiShoppingCart className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Product Card 6 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
          <div className="relative w-full pt-[100%]">
            <Image
              src={Feature6}
              alt="Luxury Recliner"
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority
            />
          </div>
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium mb-2">Luxury Recliner</h3>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold">$50</p>
                <p className="line-through text-sm text-gray-500">$90</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <FiShoppingCart className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Product Card 7 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
          <div className="relative w-full pt-[100%]">
            <Image
              src={Feature7}
              alt="Swivel Office Chair"
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority
            />
          </div>

          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium mb-2">Swivel Office Chair</h3>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold">$45</p>
                <p className="line-through text-sm text-gray-500">$80</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <FiShoppingCart className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Product Card 8 */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
          <div className="relative w-full pt-[100%]">
            <Image
              src={Feature8}
              alt="Classic Rocking Chair"
              fill
              className="object-cover rounded-t-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority
            />
          </div>
          <div className="p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium mb-2">
                Classic Rocking Chair
              </h3>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold">$55</p>
                <p className="line-through text-sm text-gray-500">$95</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <FiShoppingCart className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
