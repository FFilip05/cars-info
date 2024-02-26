import { createCar } from "@/app/lib/actions";
export default async function Page() {

    return(
      <div className="border border-black capitalize flex justify-center h-lvh">
        <div className="flex flex-col m-auto w-1/2 border border-black p-4 ">
      <h1 className="font-bold text-center">Add Car form:</h1>   
     <form  action={createCar} className=" flex flex-col">
           <label htmlFor="make" className="font-semibold my-3">
      make
    </label>
    
     {/* <select className="form-select" name="make">
      <option value="" >Select a car make</option>
      { carMakes.map(({id, make  }) => (
        <option key={id} value={make} >{make}</option>
      ))}
    </select> */}
     <label htmlFor="make" className="font-semibold my-3">
      make
    </label>
    <input type="text" name="make" required/>
    <label htmlFor="name" className="font-semibold my-3">
      name
    </label>
    <input type="text" name="name" required />
    <button type="submit" className="font-bold bg-rose-600 mx-auto px-5 py-3 rounded-lg" >Submit</button>
  </form>
  </div></div>
    )
  }