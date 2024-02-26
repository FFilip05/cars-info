import { createOffer,getAllCarMakes } from "@/app/lib/actions";
export default async function Page() {
    const carMakes = await getAllCarMakes();
    return(
      <div className="border border-black capitalize flex justify-center h-lvh">
        <div className="flex flex-col m-auto w-1/2 border border-black p-4 ">
      <h1 className="font-bold text-center">Add Car form:</h1>   
     <form  action={createOffer} className=" flex flex-col">
     <label htmlFor="make" className="font-semibold my-3">
      make
    </label>
     <select className="form-select" name="make">
      <option value="" >Select a car make</option>
      { carMakes.map(({id, make  }) => (
        <option key={id} value={make} >{make}</option>
      ))}
    </select>
    {/* query models after selecting make and year */}
    <label htmlFor="title" className="font-semibold my-3">
      title
    </label>
    <input type="text" name="title" required />
    <label htmlFor="desc" className="font-semibold my-3">
      decsription
    </label>    
    <input type="text" name="desc"  required />
    <label htmlFor="price" className="font-semibold my-3">
      price
    </label>
    <input type="number" name="price" required />
    <label htmlFor="mileage" className="font-semibold my-3">
    mileage
    </label>
    <input type="number" name="mileage" required />
    <label htmlFor="year" className="font-semibold my-3">
    year
    </label>
    <input type="number" name="year" required />
    <button type="submit" className="font-bold bg-rose-600 mx-auto px-5 py-3 rounded-lg" >Submit</button>
  </form>
  </div></div>
    )
  }