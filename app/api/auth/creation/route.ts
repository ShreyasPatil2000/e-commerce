import { prisma } from "@/app/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { unstable_noStore as noStore } from "next/cache";
import { NextResponse } from "next/server";

export const runtime = 'nodejs'; 

export async function GET() {
  try {
    noStore();
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log(user);

    if (!user?.id) {
      return NextResponse.json({ error: "User data missing or invalid." }, { status: 400 });
    }

    // Try finding the user in the DB
    let dbUser = await prisma.user.findUnique({ where: { id: user.id } });

    if (!dbUser) {
      // If user does not exist, create a new one
      try {
        dbUser = await prisma.user.create({
          data: {
            id: user.id,
            firstName: user.given_name ?? "",
            lastName: user.family_name ?? "",
            email: user.email ?? "",
            profileImage: user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
          },
        });
      } catch (error) {
        console.error("Error creating user in database:", error);
        return NextResponse.json({ error: "Failed to create user." }, { status: 500 });
      }
    }
    return NextResponse.redirect("http://localhost:3000/");
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
