import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const { name, username, email, profileImage, id } = await req.json();

    if (!name || !username || !email || !profileImage || !id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const profile = await db.user.update({
      where: {
        id,
      },
      data: {
        name,
        username,
        email,
        profileImage,
      },
    });

    return NextResponse.json(profile);
  } catch (error) {
    console.log("[PROFILE_ID]", error);

    return new NextResponse("Internal Error", { status: 500 });
  }
}
