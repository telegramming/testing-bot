import { sendMessage } from "../../utils/sender.js";

export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const body = await req.json().catch(() => ({}));
  console.log("Method:", req.method, "URL:", req.url, "Body:", body);
  if (body && body.message && body.message.chat) {
    sendMessage({ chat_id: body.message.chat.id, text: "Hello, World!" })
      .then((result) => console.log("result:", result))
      .catch((err) => console.error(err));
  }

  return new Response(JSON.stringify({ message: "Hello, World!" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
