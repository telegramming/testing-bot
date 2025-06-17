# Telegram Bot Webhook Server

This project is a simple Node.js server that handles Telegram bot updates via webhooks.

## Features

- Receives and processes Telegram webhook updates
- Easily extendable for custom bot logic
- Lightweight and fast

## Prerequisites

- Node.js (v14+ recommended)
- A Telegram bot token ([create one with BotFather](https://core.telegram.org/bots#botfather))
- Publicly accessible HTTPS endpoint (use [ngrok](https://ngrok.com/) for local development)

## Installation

```bash
git clone https://github.com/yourusername/telegram-bot-webhook-server.git
cd telegram-bot-webhook-server
npm install
```

## Usage

1. **Set your bot token**  
    Update the `.env` file or set the `TELEGRAM_BOT_TOKEN` environment variable.

2. **Start the server**

    ```bash
    npm start
    ```

3. **Set the webhook URL**  
    Use the following command (replace `<YOUR_URL>` and `<TOKEN>`):

    ```
    https://api.telegram.org/bot<TOKEN>/setWebhook?url=<YOUR_URL>/webhook
    ```

## Example

```js
// index.js
app.post('/webhook', (req, res) => {
  const update = req.body;
  // Handle incoming update
  res.sendStatus(200);
});
```

## License

MIT