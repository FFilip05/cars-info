import CarCard from '@/app/components/CarCard';
import { updateCar } from '@/app/lib/actions';
import { Car } from '@/types/car';

async function getData(id:string) {
  const response = await fetch(`http://localhost:3000/api/cars/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
 return await response.json()

}
export default async function Page({ params }: { params: { id: string} }) {

const data = await getData(params.id)
const Car: Car = await data;
   return (
    <div className="border border-black capitalize flex justify-center h-lvh">
    <div className="flex flex-col m-auto w-1/2 border border-black p-4 ">
  <h1 className="font-bold text-center">Update Car form:</h1>   
 <form  action={updateCar} className=" flex flex-col">
 <label htmlFor="make" className="font-semibold my-3">
  make
</label>
<input type="text" name="make" id="make" required value={Car.make}/>
<label htmlFor="name" className="font-semibold my-3">
  name
</label>
<input type="text" name="name" id="name" required value={Car.name} />
<button type="submit" className="font-bold bg-rose-600 mx-auto px-5 py-3 rounded-lg" >Submit</button>
</form>
</div></div>
   );
}
