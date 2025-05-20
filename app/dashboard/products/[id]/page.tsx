import EditForm from "@/app/components/dashboard/EditForm";
import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";

const getData = async (productId: string) => {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
};

const EditRoute = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);
  return <EditForm data={data}/>;
};

export default EditRoute;
