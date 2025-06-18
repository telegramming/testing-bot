export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  console.log("Method:", req.method, "URL:", req.url, "Body:", req.body);
  return new Response(JSON.stringify({ message: "Hello, World!" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
