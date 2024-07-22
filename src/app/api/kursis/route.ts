import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// FETCH ALL KURSIS
export const GET = async (req: NextRequest) => {
  try {
    const kursis = await prisma.kursi.findMany();
    return new NextResponse(JSON.stringify(kursis), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

