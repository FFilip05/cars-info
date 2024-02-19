import Link from "next/link"
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 ">
          <div className='flex flex-row bg-sky-400 px-32 py-16 justify-between '>
      <div className="flex flex-col justify-center">
        <h1 className='font-bold text-5xl'>See most popular offers</h1>
      <p className="mt-4 mb-4">Are you looking to buy fantastic car?</p>
      <Link href={"/cars"} className='rounded-lg bg-white p-2 w-fit'>Show more!</Link>
      </div>
      <div>
        <img src="car.svg" alt="car" width={400} />
        </div>
       </div>
    </main>
  )
}
