import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload" },
        { status: 400 }
      );
    }

    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    const targetEmail = "tanjirul.islam.256@gmail.com";
    const subject = `Portfolio Inquiry from ${name.trim()}`;

    // Send through FormSubmit server-side (bypasses browser ad-blockers and CORS)
    const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: "https://tanjirul.dev",
        Origin: "https://tanjirul.dev",
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        _subject: subject,
        _replyto: email.trim(),
        _captcha: "false",
        _template: "table",
      }),
    });

    const data = await response.json().catch(() => null);

    const isSuccess = data?.success === true || data?.success === "true";

    if (isSuccess) {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully!",
      });
    }

    // Check if activation is required
    const msg = data?.message || "";
    const needsActivation = msg.toLowerCase().includes("activation") || msg.toLowerCase().includes("activate");

    return NextResponse.json(
      {
        success: false,
        needsActivation,
        message: msg || "Failed to deliver message via email service.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API /api/contact error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}
