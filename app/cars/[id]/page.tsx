"use client"
import CarCard from '@/app/components/CarCard';
import { updateCar } from '@/app/lib/actions';
import { Car } from '@/types/car';
import { deleteCar } from "../../lib/actions";
import { useRouter } from 'next/navigation'

async function getData(id:string) {
  const response = await fetch(`http://localhost:3000/api/cars/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
 return await response.json()

}
export default async function Page({ params }: { params: { id: string} }) {
  // const router = useRouter();
  const handleOnClick = (id: string) => {
    console.log(id)
    // router.replace(`cars/${id}`)
  }
  const handleDelete = () => {
    deleteCar(params.id);
 };

 const handleUpdate = () => {
  // updateCar(params.id);
};
const data = await getData(params.id)
const Car: Car = await data;
// const handleOnClick = () => {
//   console.log("1")
// }
   return (
    <div>
      <CarCard key={Car.id} params={Car} onClick={handleOnClick}/>
      <div className=" my-auto">
      <button className="mx-2 rounded-full bg-gray-500 hover:bg-gray-700 drop-shadow-xl  delay-100 color text-black min-w-10 min-h-10" onClick={handleUpdate}>E</button>
      <button className="mx-2 rounded-full bg-red-500 hover:bg-red-700 drop-shadow-xl  delay-100 color text-black min-w-10 min-h-10" onClick={handleDelete}>x</button>
      </div>
    </div>
//     <div className="border border-black capitalize flex justify-center h-lvh">
      
//     <div className="flex flex-col m-auto w-1/2 border border-black p-4 ">
//   <h1 className="font-bold text-center">Update Car form:</h1>   
//  <form  action={updateCar} className=" flex flex-col">
//  <label htmlFor="make" className="font-semibold my-3">
//   make
// </label>
// <input type="text" name="make" id="make" required value={Car.make}/>
// <label htmlFor="name" className="font-semibold my-3">
//   name
// </label>
// <input type="text" name="name" id="name" required value={Car.name} />
// <button type="submit" className="font-bold bg-rose-600 mx-auto px-5 py-3 rounded-lg" >Submit</button>
// </form>
// </div>
// </div>
   );
}
