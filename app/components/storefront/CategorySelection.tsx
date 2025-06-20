import Image from "next/image";
import Link from "next/link";
import all from "@/public/all.jpeg";
import men from "@/public/men.jpeg";
import women from "@/public/women.jpeg";

const CategorySelection = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-extrabold tracking-tight">Shop by category</h2>
        <Link className="text-sm font-semibold text-primary hover:text-primary/80" href="/products/all">
          Browse all Products &rarr;
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div className="group aspect-[2/1] rounded-xl overflow-hidden sm:aspect-[1/1] sm:row-span-2 relative">
          <Image src={all} alt="All Products Image" className="object-cover object-center w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-55" />
          <div className="absolute inset-0 p-6 flex items-end">
            <Link href="/products/all">
              <h3 className="text-white font-semibold">All Products</h3>
              <p className="mt-1 text-sm text-white">Shop Now</p>
            </Link>
          </div>
        </div>
        <div className="group aspect-[2/1] rounded-xl overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <Image
            src={men}
            alt="Men Products Image"
            className="object-cover object-center sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link href="/products/men">
              <h3 className="text-white font-semibold">Men Products</h3>
              <p className="text-white text-sm mt-1">Shop now</p>
            </Link>
          </div>
        </div>
        <div className="group aspect-[2/1] rounded-xl overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <Image
            src={women}
            alt="Women Products Image"
            className="object-cover object-center sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link href="/products/women">
              <h3 className="text-white font-semibold">Women Products</h3>
              <p className="text-white text-sm mt-1">Shop now</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
