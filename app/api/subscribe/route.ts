import { NextResponse } from "next/server";

const AC_URL = "https://toadsbv.api-us1.com/api/3";
const AC_LIST_ID = "4"; // Timehacker list
const AC_TAG_ID = "2"; // timehacker tag

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    const apiKey = process.env.ACTIVECAMPAIGN_API_KEY;
    if (!apiKey) {
      console.error("ACTIVECAMPAIGN_API_KEY not configured");
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    }

    const headers = {
      "Api-Token": apiKey,
      "Content-Type": "application/json",
    };

    // 1. Create or update contact
    const syncRes = await fetch(`${AC_URL}/contact/sync`, {
      method: "POST",
      headers,
      body: JSON.stringify({ contact: { email } }),
    });

    if (!syncRes.ok) {
      const err = await syncRes.text();
      console.error("AC contact sync failed:", err);
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    }

    const { contact } = await syncRes.json();
    const contactId = contact.id;

    // 2. Subscribe to Timehacker list
    await fetch(`${AC_URL}/contactLists`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        contactList: { list: AC_LIST_ID, contact: contactId, status: 1 },
      }),
    });

    // 3. Add timehacker tag
    await fetch(`${AC_URL}/contactTags`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        contactTag: { contact: contactId, tag: AC_TAG_ID },
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
