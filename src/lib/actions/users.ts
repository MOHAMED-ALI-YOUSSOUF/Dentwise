"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../prisma";

export async function syncUser() {
  try {
    const user = await currentUser();
    if (!user) return;

    const existingUser = await prisma.user.findUnique({ where: { clerkId: user.id } });
    if (existingUser) return existingUser;

     if (!user.emailAddresses?.[0]?.emailAddress) {
      throw new Error("User must have at least one email address");
    }
     // Use upsert to handle race conditions
    const dbUser = await prisma.user.upsert({
      where: { clerkId: user.id },
      update: {},
      create: {
         clerkId: user.id,
         firstName: user.firstName || "",
         lastName: user.lastName || "",
         email: user.emailAddresses[0].emailAddress,
         phone: user.phoneNumbers[0]?.phoneNumber,
       },
     });

    return dbUser;
  } catch (error) {
    console.log("Error in syncUser server action", error);
    throw error;
}
}