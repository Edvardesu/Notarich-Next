import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const body = await req.json();

    await prisma.kursi.update({
      where: {
        id: id,
      },
      data: {
        statusKursi: body.statusKursi,
      },
    });

    return new NextResponse(
      JSON.stringify({ message: "Status has been updated!" }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
