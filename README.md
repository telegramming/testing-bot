# Telegram Bot Webhook App (Deno)

A simple Telegram bot webhook application built with Deno's native HTTP server.

## Features

- Handles Telegram webhook updates
- Written in TypeScript using Deno
- Lightweight and easy to deploy

## Requirements

- [Deno](https://deno.land/) (v1.0+)
- Telegram Bot Token
- Publicly accessible HTTPS endpoint (use [ngrok](https://ngrok.com/) for local
  development)

## Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/telegram-bot-deno.git
   cd telegram-bot-deno
   ```

2. **Configure environment variables:**
   - Set your Telegram bot token and webhook URL.

3. **Run the server:**
   ```sh
   deno run --allow-net --allow-env main.ts
   ```

4. **Set the webhook:**
   ```sh
   curl -F "url=https://your-domain.com/webhook" https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook
   ```

## Example

```ts
import { serve } from "https://deno.land/std/http/server.ts";

serve(async (req) => {
  if (req.method === "POST" && new URL(req.url).pathname === "/webhook") {
    const update = await req.json();
    // Handle Telegram update here
    return new Response("OK");
  }
  return new Response("Not found", { status: 404 });
});
```

## License

MIT
