"use client"
import Link from "next/link"
import CarCard from '@/app/components/CarCard';
import { Car } from '@/types/car';
import { useRouter } from 'next/navigation'

async function getData() {
  const response = await fetch("http://localhost:3000/api/cars", {cache: "no-cache"});
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return await response.json();
}
export default async function Home() {
  const Cars = await getData();

  // const router = useRouter();
  const handleOnClick = (id: string) => {
    console.log(id)
    // router.replace(`cars/${id}`)
    }
  return (
    <main className="min-h-screen bg-slate-50 ">
            <div className="bg-white px-32 py-16 text-3xl">
        <h1>Check out info about newest cars on market!</h1>
        <div className="grid grid-cols-3 gap-4 grid-rows-1">
        {Cars.map((x: Car) => (
          <CarCard key={x.id} params={x} onClick={handleOnClick}/>
         ))} 
        </div>
      </div>
          <div className='flex flex-row bg-sky-400 px-32 py-16 justify-between '>
      <div className="flex flex-col justify-center">
        <h1 className='font-bold text-5xl'>See most popular offers</h1>
      <p className="mt-4 mb-4">Are you looking to buy fantastic car?</p>
      <Link href={"/cars"} className='rounded-lg bg-white p-2 w-fit'>Show more!</Link>
      </div>
      <div>
        <img src="car.svg" alt="car" width={700} className="drop-shadow-2xl" />
        </div>
       </div>
       
    </main>
  )
}
