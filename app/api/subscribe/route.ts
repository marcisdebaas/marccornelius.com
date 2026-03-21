import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // TODO: Integrate with Postmark or email service
    // For now, log the subscription
    console.log(`New subscriber: ${email}`);

    // When Postmark is configured:
    // const postmark = require('postmark');
    // const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);
    // await client.sendEmail({...});

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
