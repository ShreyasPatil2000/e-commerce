import { LoadingProductCart } from "@/app/components/storefront/ProductCart";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingFile = () => {
  return (
    <div>
      <Skeleton className="h-10 w-56 my-5" />
      <div className="grid md:grid-cols-3 gap-5">
        <LoadingProductCart />
        <LoadingProductCart />
        <LoadingProductCart />
        <LoadingProductCart />
        <LoadingProductCart />
        <LoadingProductCart />
        <LoadingProductCart />
        <LoadingProductCart />
        <LoadingProductCart />
      </div>
    </div>
  );
};

export default LoadingFile;
