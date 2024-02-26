"use client"
import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import { Offer } from '@/types/car';
import { deleteOffer } from "../lib/actions";
import { updateOffer } from "../lib/actions";
import { useRouter } from 'next/navigation'

interface OfferCardProps {
    params: Offer;
   }

export default function OfferCard({params}:OfferCardProps) {
  const router = useRouter()
  const handleDelete = () => {
    deleteOffer(params.id);
 };

 const handleUpdate = () => {
  // updateOffer(params.id);
};
const handleOnClick = () => {
router.replace(`offer/${params.id}`)
}
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(logos)`.concat(params.car.make.toLowerCase().replace(/ /g,'')).concat(".webp") }} onClick={handleOnClick}>
    <div className="absolute bottom-0 left-0 w-full h-1/2 ">
      <div className="text-black p-4">
        <h1 className="text-2xl font-bold">{params.car.make + " " + params.car.name}</h1>
        <p className="text-lg">{params.price}</p>
      </div>
    </div>
  </div>
    
    // <Card
    //   isFooterBlurred
    //   radius="lg"
    //   className="border-none"
    // >
    //   <Image
    //     alt="Woman listing to music"
    //     className="object-cover"
    //     height={200}
    //     src="../../public/1.png"
    //     width={200}
    //   />
    //   <p>{params.make}</p>
    //   <p>{params.name}</p>
    //   <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
    //     <Button className="text-tiny text-black bg-red/20" variant="flat" color="default" radius="lg" size="sm" >
    //       X
    //     </Button>
        
    //   </CardFooter>
    // </Card>
  );
}
