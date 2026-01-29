import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  try {
    const emailBody = `New waitlist signup for 4FL app:\n\nEmail: ${email}\n\nTimestamp: ${new Date().toISOString()}`;
    
    // Using Resend to send email
    // Make sure to set RESEND_API_KEY in your Vercel environment variables
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    if (!RESEND_API_KEY) {
      // Fallback: log the email (for development)
      console.log("Waitlist signup (no API key):", email);
      console.log("Would send email to me@menemragab.com with subject: [4FL - New Waiting List Signup]");
      return res.status(200).json({ success: true, message: "Email logged (API key not configured)" });
    }

    // Use a verified sender email or your domain email
    // For Resend, you can use onboarding@resend.dev for testing, or verify your domain
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: "me@menemragab.com",
        subject: "[4FL - New Waiting List Signup]",
        text: emailBody,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Resend API error: ${error}`);
    }

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
