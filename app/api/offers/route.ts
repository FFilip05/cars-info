import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET() {
    const cars = await prisma.offer.findMany();
    return NextResponse.json(cars);

}