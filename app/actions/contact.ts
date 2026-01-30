"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface FormResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(formData: FormData): Promise<FormResult> {
  const email = formData.get("email") as string;
  const projectDetails = formData.get("projectDetails") as string;

  // Basic validation
  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from: "Chuabacca Website <noreply@chuabacca.com>",
      to: "hello@chuabacca.com",
      subject: `New Project Request from ${email}`,
      text: `
New project request received!

From: ${email}

Project Details:
${projectDetails || "No details provided."}

---
Sent from the Chuabacca Custom Creations website.
      `.trim(),
      replyTo: email,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      error: "Failed to send your request. Please try again later.",
    };
  }
}
