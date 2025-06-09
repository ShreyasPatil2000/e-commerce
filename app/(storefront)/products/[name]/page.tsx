import ProductCart from "@/app/components/storefront/ProductCart";
import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";

const getData = async (productCategory: string) => {
  switch (productCategory) {
    case "all": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          description: true,
          id: true,
        },
        where: {
          status: "published",
        },
      });
      return {
        title: "All Products",
        data: data,
      };
    }
    case "men": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          description: true,
          id: true,
        },
        where: { status: "published", category: "men" },
      });
      return {
        title: "Men's Products",
        data: data,
      };
    }
    case "women": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          description: true,
          id: true,
        },
        where: { status: "published", category: "women" },
      });
      return {
        title: "Women's Products",
        data: data,
      };
    }
    case "kids": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          description: true,
          id: true,
        },
        where: { status: "published", category: "kids" },
      });
      return {
        title: "Kids' Products",
        data: data,
      };
    }
    default: {
      return notFound();
    }
  }
};

const CategoriesPage = async ({ params }: { params: { name: string } }) => {
  const {data, title} = await getData(params.name);
  return (
    <section>
      <h1 className="font-semibold text-3xl my-5">{title}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <ProductCart key={item.id} item={item}/>
        ))}
      </div>
    </section>
  );
};

export default CategoriesPage;
