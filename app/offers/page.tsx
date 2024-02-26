import OfferCard from '@/app/components/OfferCard';
import { Offer } from '@/types/car';
import { getAllOffers } from "../lib/actions"
// import Link from 'next/link';

// async function getData() {
//   const response = await fetch("http://localhost:3000/api/offers", {cache: "no-cache"});
//   if (!response.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return await response.json();
// }
export default async function Page() {
  const Offers = await getAllOffers();
 return (
   <div >
     <h1 className='text-4xl text-black text-center'>Most popular offers:</h1>
     <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-between content-center px-32'>
         {Offers.map((x: Offer) => (
          <OfferCard key={x.id} params={x}/>
         ))} 
     </div>
   </div>
 );
}