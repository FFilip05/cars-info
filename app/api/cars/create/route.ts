import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
    const formData = await request.formData();
    const name = formData.get('name')?.toString();
    const make = formData.get('make')?.toString();
    await prisma.car.create({
        data: {
            make: make || "make" ,
            name: name || "name"
        }
    });
    return NextResponse.json({message:`you added ${make} ${name} car to database`});
}