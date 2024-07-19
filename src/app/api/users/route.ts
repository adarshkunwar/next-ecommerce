import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// get all users
export async function GET(req: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// create a user
export async function POST(req: NextRequest) {
  const data = await req.json();

  const newUser = await prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
    },
  });

  return NextResponse.json({
    data: newUser,
    message: "User created successfully",
  });
}