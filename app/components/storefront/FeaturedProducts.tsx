import { prisma } from "@/app/lib/prisma";
import { Suspense } from "react";
import { LoadingProductCart, ProductCard } from "./ProductCart";
import { unstable_noStore } from "next/cache";

const getData = async () => {
  const data = await prisma.product.findMany({
    where: {
      status: "published",
      isFeatured: true,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      price: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });
  return data;
};

const FeaturedProducts = () => {
  unstable_noStore();
  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight">Featured Items</h2>
      <Suspense fallback={<LoadingRows />}>
        <LoadFeaturedProducts />
      </Suspense>
    </div>
  );
};

export default FeaturedProducts;

async function LoadFeaturedProducts() {
  unstable_noStore();
  const data = await getData();
  return (
    <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

const LoadingRows = () => {
  return (
    <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <LoadingProductCart />
      <LoadingProductCart />
      <LoadingProductCart />
    </div>
  );
};
