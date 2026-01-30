import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  try {
    const emailBody = `New waitlist signup for 4FL app:\n\nEmail: ${email}\n\nTimestamp: ${new Date().toISOString()}`;
    
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return res.status(500).json({ 
        error: "Email service not configured",
        details: "RESEND_API_KEY environment variable is missing"
      });
    }

    // Use a verified sender email or your domain email
    // For Resend, you can use onboarding@resend.dev for testing, or verify your domain
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    
    console.log("Attempting to send email:", {
      from: fromEmail,
      to: "me@menemragab.com",
      subject: "[4FL - New Waiting List Signup]",
      hasApiKey: !!RESEND_API_KEY
    });

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

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", response.status, responseData);
      return res.status(response.status).json({ 
        error: "Failed to send email",
        details: responseData
      });
    }

    console.log("Email sent successfully:", responseData);
    return res.status(200).json({ 
      success: true, 
      message: "Email sent successfully",
      data: responseData
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return res.status(500).json({ 
      error: "Failed to send email",
      details: error.message || String(error)
    });
  }
}
