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
    const userAgent =
      request.headers.get("user-agent") ||
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";
    const origin = request.headers.get("origin") || "https://tanjirul.dev";
    const referer = request.headers.get("referer") || "https://tanjirul.dev";

    let isSuccess = false;
    let serviceMessage = "";

    // Strategy 1: JSON payload with standard browser headers & timeout
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": userAgent,
          Referer: referer,
          Origin: origin,
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
        signal: AbortSignal.timeout(9000),
      });

      const data = await response.json().catch(() => null);
      if (data?.success === true || data?.success === "true") {
        isSuccess = true;
        serviceMessage = data?.message || "The form was submitted successfully.";
      } else if (data?.message) {
        serviceMessage = data.message;
      }
    } catch (err) {
      console.warn("FormSubmit JSON strategy error:", err instanceof Error ? err.message : err);
    }

    // Strategy 2: URL-encoded payload fallback
    if (!isSuccess) {
      try {
        const formParams = new URLSearchParams({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: subject,
          _replyto: email.trim(),
          _captcha: "false",
          _template: "table",
        });

        const fallbackResponse = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
            "User-Agent": userAgent,
            Referer: referer,
            Origin: origin,
          },
          body: formParams.toString(),
          signal: AbortSignal.timeout(9000),
        });

        const fallbackData = await fallbackResponse.json().catch(() => null);
        if (fallbackData?.success === true || fallbackData?.success === "true") {
          isSuccess = true;
          serviceMessage = fallbackData?.message || "The form was submitted successfully.";
        } else if (fallbackData?.message) {
          serviceMessage = fallbackData.message;
        }
      } catch (err2) {
        console.warn("FormSubmit URL-encoded strategy error:", err2 instanceof Error ? err2.message : err2);
      }
    }

    if (isSuccess) {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully!",
      });
    }

    const needsActivation =
      serviceMessage.toLowerCase().includes("activation") ||
      serviceMessage.toLowerCase().includes("activate");

    return NextResponse.json(
      {
        success: false,
        needsActivation,
        message:
          serviceMessage ||
          "Email service is currently busy. You can send directly using Gmail or your mail app below.",
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
