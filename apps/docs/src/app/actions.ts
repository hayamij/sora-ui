"use server";

import { db, eq } from "@workspace/database";
import { waitlist } from "@workspace/database/db/schema";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");

interface ActionResult {
  success: boolean;
  message: string;
}

async function processWaitlistEmail(email: string): Promise<ActionResult> {
  try {
    // Validate email format
    const validatedEmail = emailSchema.parse(email.trim().toLowerCase());

    // Check if email already exists
    const existing = await db
      .select()
      .from(waitlist)
      .where(eq(waitlist.email, validatedEmail))
      .limit(1);

    if (existing.length > 0) {
      return {
        success: false,
        message: "This email is already on the waitlist!",
      };
    }

    // Insert new email
    await db.insert(waitlist).values({
      id: crypto.randomUUID(),
      email: validatedEmail,
    });

    return {
      success: true,
      message: "You have successfully joined the waitlist!",
    };
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.issues[0]?.message || "Invalid email address",
      };
    }

    // Handle database errors (e.g., unique constraint violation)
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "23505"
    ) {
      return {
        success: false,
        message: "This email is already on the waitlist!",
      };
    }

    // Generic error
    console.error("Waitlist signup error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}

export async function joinWaitlist(
  _prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const email = formData.get("email");

  if (!email || typeof email !== "string") {
    return {
      success: false,
      message: "Email is required",
    };
  }

  return await processWaitlistEmail(email);
}
