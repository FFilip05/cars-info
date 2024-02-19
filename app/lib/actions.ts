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
// when you click on component it redirecets you to its [id]\page then you can modify it freely
export async function updateCar(id:string, formData: FormData) {
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
