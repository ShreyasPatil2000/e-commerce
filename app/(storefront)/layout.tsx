import { ReactNode } from "react";
import Navbar from "../components/storefront/Navbar";

const StoreFrontLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
};

export default StoreFrontLayout;
