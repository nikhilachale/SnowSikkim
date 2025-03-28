import * as React from "react"
import Image from "next/image";
import img from "../public/images/20231217_200447.jpg";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel"

export function CarouselSize() {
  return (
    <div className=" flex  justify-center items-center">
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-fit  "
    >
     
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
            <div className="p-1">
              <Card>
                <CardContent className="flex  w-fit items-center justify-center p-6">
                <Image 
                src={img} 
                alt="Trip" 
                width={200} 
                height={200} 
                className="w-full h-40 rounded-sm object-cover"
            />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
