"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface iAappProps {
  images: string[];
}

const ImageSlider = ({ images }: iAappProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNextImage = () => {
    setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImage = (index: number) => {
    setImageIndex(index);
  };

  return (
    <div className="grid gap-6 md:gap-3 items-start">
      <div className="relative rounded-lg overflow-hidden">
        <Image
          src={images[0]}
          width={600}
          height={600}
          alt="Product Image"
          className="object-cover w-[600px] h-[600px]"
        />
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <Button onClick={handlePreviousImage} variant="ghost" size="icon">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button onClick={handleNextImage} variant="ghost" size="icon">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map((item, index) => (
          <div
            className={cn(
              index === imageIndex ? "border-2 border-primary" : "border border-gray-500",
              "relative overflow-hidden rounded-lg cursor-pointer"
            )}
            key={index}
            onClick={() => handleImage(index)}
          >
            <Image
              src={item}
              alt="Product Image"
              width={100}
              height={100}
              className="object-cover w-[100px] h-[100px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
