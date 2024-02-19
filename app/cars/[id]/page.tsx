import CarCard from '@/app/components/car-card';
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
       <div>
           <h1>Cars By Id:</h1>
           <div>
                  <CarCard  params={Car} />
           </div>
       </div>
   );
}
