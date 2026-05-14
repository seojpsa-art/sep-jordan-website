import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL is missing in environment variables.");
      return NextResponse.json(
        { success: false, error: "Server configuration error: Webhook URL missing." },
        { status: 500 }
      );
    }

    console.log("GOOGLE_SCRIPT_URL exists. Forwarding data...");

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log(`Received response from Google Apps Script with status: ${response.status}`);

    let result: any = {};
    const responseText = await response.text();
    
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      console.warn("Failed to parse JSON response from Apps Script:", responseText);
      result = { raw: responseText };
    }
    
    console.log("Parsed response:", result);

    if (!response.ok || result.success === false) {
      console.error("Submission rejected by upstream service:", result);
      return NextResponse.json(
        { success: false, error: result.error || "Failed to submit application to the database." },
        { status: response.status >= 400 ? response.status : 400 }
      );
    }

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred during submission." },
      { status: 500 }
    );
  }
}
