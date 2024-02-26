"use server"

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

export async function createCar(formData: FormData) {
    const make = formData.get("make") as string;
    const name = formData.get("name") as string;
    await prisma.car.create({
        data: {
            make: make ,
            name: name 
        }
    });
    revalidatePath('/cars')
    redirect("/cars/");
}

export async function updateCar(formData: FormData) {
    const id = formData.get("id") as string;
    const make = formData.get("make") as string;
    const name = formData.get("name") as string;
    await prisma.car.update({
        where:{
            id,
        },
        data: {
            make: make ,
            name: name 
        },
    });
    revalidatePath('/cars')
}

export async function deleteCar(id:string) {
    const id1 = id as string;
    await prisma.car.delete({
        where:{
            id:id1
        }
    });
    revalidatePath('/cars')
    redirect("/cars/")
}

export async function createOffer(formData: FormData) {
    // const make = formData.get("make") as string;
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    const price = formData.get("price") as unknown as number;
    const mileage = formData.get("mileage") as unknown as number;
    const year = formData.get("year") as unknown as number;
    await prisma.offer.create({
        data: {
            // make: make,
            name: title,
            desc: desc,
            price: price,
            mileage: mileage,
            year: year,
            createdAt: Date.now().toString(),
            userId: "bc7b5289-d06a-4200-b898-f5804d24a0ba",
            carId: "a641a6f6-0ed7-4449-9380-13ad7a150223"
        }
    });
    revalidatePath('/cars')
    redirect("/cars/");
}

export async function updateOffer(id:string, formData: FormData) {
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    const price = formData.get("price") as unknown as number;
    const mileage = formData.get("mileage") as unknown as number;
    const year = formData.get("year") as unknown as number;
    await prisma.offer.update({
        where:{
            id,
        },
        data: {
            name: title,
            desc: desc,
            price: price,
            mileage: mileage,
            year: year,
            // make: make ,
            // name: name 
        },
    });
    revalidatePath('/cars')
}

export async function deleteOffer(id:string) {
    const id1 = id as string;
    await prisma.offer.delete({
        where:{
            id:id1
        }
    });
    revalidatePath('/offers')
    redirect("/offers/")
}

export async function getAllCarMakes(){
    return await prisma.car.findMany(
        {select: {
        id: true,
        make: true,
      },});
}

export async function getAllOffers() {
    // Query to fetch all offers with related user and car information
    const offers = await prisma.offer.findMany({
      include: {
        user: true, // Include user details
        car: true, // Include car details
      },
    });
  
    return offers;
  }