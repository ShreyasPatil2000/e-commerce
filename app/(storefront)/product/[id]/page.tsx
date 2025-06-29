import { addItem } from "@/app/actions";
import FeaturedProducts from "@/app/components/storefront/FeaturedProducts";
import ImageSlider from "@/app/components/storefront/ImageSlider";
import { ShoppingBagButton } from "@/app/components/SubmitButton";
import { prisma } from "@/app/lib/prisma";
import { StarIcon } from "lucide-react";
import { unstable_noStore } from "next/cache";
import { notFound } from "next/navigation";

const getData = async (productId: string) => {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      price: true,
      images: true,
      description: true,
      name: true,
      id: true,
    },
  });
  if (!data) {
    return notFound();
  }
  return data;
};

const ProductIdRoute = async ({ params }: { params: Promise<{ id: string }> }) => {
  unstable_noStore();
  const { id } = await params;
  const data = await getData(id);
  const addProductToCart = addItem.bind(null, data.id);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6">
        <ImageSlider images={data.images} />
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{data.name}</h1>
          <p className="text-gray-300 mt-2 text-3xl">${data.price}</p>
          <div className="mt-3 flex items-center gap-1">
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          </div>
          <p className="text-base text-gray-700">{data.description}</p>
          <form action={addProductToCart}>
            <ShoppingBagButton />
          </form>
        </div>
      </div>
      <div className="mt-16">
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default ProductIdRoute;
