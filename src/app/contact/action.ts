"use server"

import { db } from "@/lib/db";


export const handleSubmitForm = async (name: string, email: string,message: string) => {
  try {
    const submission = await db.submission.create({
      data: {name, email,message,},});

    return submission;
  } catch (error) {
    console.error("Error creating submission:", error);
    throw error;
  }
};