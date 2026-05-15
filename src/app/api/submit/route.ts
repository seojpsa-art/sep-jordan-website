import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    // 1. If GOOGLE_SCRIPT_URL is missing, return JSON error.
    if (!scriptUrl) {
      return NextResponse.json(
        { error: "GOOGLE_SCRIPT_URL environment variable is missing." },
        { status: 500 }
      );
    }

    let response;
    try {
      response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        redirect: "follow",
      });
    } catch (error: any) {
      // 3. If fetch fails, return JSON error.
      return NextResponse.json(
        { error: "Failed to fetch from Google Apps Script." },
        { status: 500 }
      );
    }

    // 2. If Apps Script returns non-200, return JSON error.
    if (!response.ok) {
      return NextResponse.json(
        { error: `Google Apps Script returned status ${response.status}` },
        { status: response.status }
      );
    }

    let result = {};
    const text = await response.text();
    try {
      result = JSON.parse(text);
    } catch (e) {
      result = { raw: text };
    }

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    return NextResponse.json(
      { error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
