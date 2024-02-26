import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request: Request, context:{params: {id:string}} ) {
    const id  = context.params.id;
    const offer = await prisma.offer.findUnique({
        where: {
           id: id
        }
      })
      
      return NextResponse.json(offer)
}