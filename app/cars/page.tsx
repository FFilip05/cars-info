import CarCard from '@/app/components/car-card';
import { Car } from '@/types/car';
import Link from 'next/link';

async function getData() {
  const response = await fetch("http://localhost:3000/api/cars", {cache: "no-cache"});
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return await response.json();
}
export default async function Page() {
  const Cars = await getData()
 return (
   <div >
     <h1 className='text-6xl text-black text-center'>Cars:</h1>
     <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-between content-center px-32'>
         {Cars.map((x: Car) => (
          <CarCard key={x.id} params={x}/>
         ))} 
     </div>
   </div>
 );
}