import "https://deno.land/std@0.224.0/dotenv/load.ts";

const url = Deno.env.get('API_URL') || 'https://api.telegram.org';
const key = Deno.env.get('API_KEY');

export async function sendMessage(message) {
    try {
        const response = await fetch(`${url}/${key}/sendMessage`, {method: 'POST', body: JSON.stringify(message), headers: {'Content-Type': 'application/json'} });
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        }
        return await response.text();
    } catch (error) {
        throw new Error(`HTTP request failed: ${error.message}`);
    }
}
