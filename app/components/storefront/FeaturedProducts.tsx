import { prisma } from "@/app/lib/prisma";
import ProductCart from "./ProductCart";

const getData = async () => {
  const data = await prisma.product.findMany({
    where: {
      status: "published",
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
  });
  return data;
};

const FeaturedProducts = async () => {
  const data = await getData();
  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight">Featured Items</h2>
      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
            <ProductCart key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
