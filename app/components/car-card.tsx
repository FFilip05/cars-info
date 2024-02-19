"use client"
import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import { Car } from '@/types/car';
import { deleteCar } from "../lib/actions";
import { updateCar } from "../lib/actions";
import { useRouter } from 'next/navigation'

interface CarCardProps {
    params: Car;
   }

export default function App({params}:CarCardProps) {
  const router = useRouter()
  const handleDelete = () => {
    deleteCar(params.id);
 };

 const handleUpdate = () => {
  // updateCar(params.id);
};
const idHandler = () => {
router.replace(`cars/${params.id}`)
}
  return (
    
    <div className="p-4 shadow-xl border-solid border-2 rounded-lg border-black bg-white hover:cursor-pointer" onClick={idHandler}>
        <img src={`logos/`.concat(params.make.toLowerCase().replace(/ /g,'')).concat(".webp")}  alt="car" width={400} />
<div>
    <div className="flex flex-row justify-start gap-5 uppercase border-10 border-black-100 drop-shadow-xl m-auto ">
      <div className="flex flex-col font-bold justify-center ">
      <h1 className="text-4xl font-black ">{params.name}</h1>
      <p>{params.make}</p>
      </div>
      {/* <div className=" my-auto">
      <button className="mx-2 rounded-full bg-gray-500 hover:bg-gray-700 drop-shadow-xl  delay-100 color text-black min-w-10 min-h-10" onClick={handleUpdate}>E</button>
      <button className="mx-2 rounded-full bg-red-500 hover:bg-red-700 drop-shadow-xl  delay-100 color text-black min-w-10 min-h-10" onClick={handleDelete}>x</button>
      </div> */}
    </div>
    </div>
    <div></div>
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
