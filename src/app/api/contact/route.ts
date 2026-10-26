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
    // Always use verified domain to prevent FormSubmit from sending activation links for every unique Vercel preview/deployment domain
    const verifiedDomain = "https://tanjirul.dev";

    let isSuccess = false;
    let serviceMessage = "";

    // Optional Provider: Web3Forms (if access key configured in Vercel environment variables)
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      try {
        const w3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_ACCESS_KEY,
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            subject,
          }),
          signal: AbortSignal.timeout(9000),
        });
        const w3Data = await w3Res.json().catch(() => null);
        if (w3Data?.success === true || w3Data?.success === "true") {
          return NextResponse.json({
            success: true,
            message: "Your message has been sent successfully!",
          });
        }
      } catch (w3Err) {
        console.warn("Web3Forms strategy error:", w3Err instanceof Error ? w3Err.message : w3Err);
      }
    }

    // Strategy 1: FormSubmit JSON payload with verified domain headers & timeout
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": userAgent,
          Referer: `${verifiedDomain}/`,
          Origin: verifiedDomain,
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: subject,
          _replyto: email.trim(),
          _url: verifiedDomain,
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

    // Strategy 2: URL-encoded payload fallback with verified domain
    if (!isSuccess) {
      try {
        const formParams = new URLSearchParams({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: subject,
          _replyto: email.trim(),
          _url: verifiedDomain,
          _captcha: "false",
          _template: "table",
        });

        const fallbackResponse = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
            "User-Agent": userAgent,
            Referer: `${verifiedDomain}/`,
            Origin: verifiedDomain,
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
