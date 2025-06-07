import { prisma } from "@/app/lib/prisma";

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
        title: "All",
        data: data,
      }
    }
  }
};

const CategoriesPage = () => {
  return <div>CategoriesPage</div>;
};

export default CategoriesPage;
