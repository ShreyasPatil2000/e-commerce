import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, XCircle } from "lucide-react";
import React from "react";

const CancelRoute = () => {
  return (
    <section className="w-full flex min-h-[80vh] items-center justify-center">
      <Card className="w-[350px]">
        <div className="p-6">
          <div className="w-full flex justify-center">
            <XCircle className="w-12 h-12 rounded-full bg-red-500/30 text-red-500 p-2" />
          </div>
          <div className="mt-3 text-center sm:mt-5 w-full">
            <h3 className="text-lg leading-6 font-medium">Payment Cancelled</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              Something went wrong with your payment. You haven&apos;t been charged. Please try again.
            </p>
            <Button asChild className="w-full mt-5 sm:mt-6">
              <Link href="/">Back to Homepage</Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default CancelRoute;
