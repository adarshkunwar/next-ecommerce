import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const id = +params.userId;
  if (!id) return new NextResponse("User ID is required", { status: 400 });

  const founduser = await prisma.user.findFirst({
    where: { id: id },
  });

  if (!founduser) return new NextResponse("User not found", { status: 404 });

  return NextResponse.json({
    data: founduser,
    message: "User found successfully",
  });
}
