import { sendMessage } from "../../utils/sender.js";

export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const body = await req.json().catch(() => ({}));
  console.log("Method:", req.method, "URL:", req.url, "body:", body);
  if (!body) {
    return new Response(JSON.stringify({ error: "No body provided" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  if (!body.message) {
    return new Response(JSON.stringify({ error: "No message provided" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  if (!body.message.chat) {
    return new Response(JSON.stringify({ error: "No chat provided" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  sendMessage({ chat_id: body.message.chat.id, text: body.message.text })
    .then((result) => console.log("result:", result))
    .catch((err) => console.error(err));

  return new Response(JSON.stringify({ message: "Hello, World!" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
