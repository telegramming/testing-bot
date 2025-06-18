export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const body = await req.json().catch(() => ({}));
  console.log("Method:", req.method, "URL:", req.url, "Body:", body);
  return new Response(JSON.stringify({ message: "Hello, World!" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
