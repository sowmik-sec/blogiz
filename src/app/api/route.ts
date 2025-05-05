import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "Hello from server" });
};
const POST = async (request: Request) => {
  return NextResponse.json({ message: "Hello from server" });
};
const PATCH = async () => {
  return NextResponse.json({ message: "Hello from server" });
};
const PUT = async () => {
  return NextResponse.json({ message: "Hello from server" });
};
const DELETE = async () => {
  return NextResponse.json({ message: "Hello from server" });
};
