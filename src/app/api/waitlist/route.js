import { NextResponse } from "next/server";
import Waitlist from "../../../../model/Waitlist";
import connectMongoDB from "../../../../utils/mongoDB";

export async function POST(req) {
  try {
    const body = await req.json();
    await connectMongoDB();
    await Waitlist.create(body);
    return NextResponse.json(
      { message: "Waitlist User Created" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error Creating WaitList" },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const waitListUsers = await Waitlist.find();
    return NextResponse.json(waitListUsers, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error Fetching WaitList Users" },
      { status: 400 }
    );
  }
}

export async function DELETE(req) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Waitlist.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Waitlist User Deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error Deleting Waitlist User" },
      { status: 400 }
    );
  }
}
