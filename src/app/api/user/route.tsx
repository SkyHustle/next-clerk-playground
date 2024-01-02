import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";

export async function GET(req: Request) {
    // console.log("Request :", req);
    const { userId } = auth();

    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await currentUser();

    // perform your Route Handler's logic

    return NextResponse.json({ user }, { status: 200 });
}
