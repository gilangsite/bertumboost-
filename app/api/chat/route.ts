import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "messages array is required" },
        { status: 400 }
      );
    }

    const response = await fetch("https://www.chatbase.co/api/v1/chat", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CHATBASE_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: messages,
        chatbotId: process.env.CHATBASE_AGENT_ID
      })
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Chatbase API error", detail: err },
      { status: 500 }
    );
  }
}
