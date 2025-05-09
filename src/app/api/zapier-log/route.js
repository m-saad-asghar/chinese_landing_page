// src/app/api/zapier-log/route.js

export async function POST(req) {
    try {
      const data = await req.json();
  
      // Extract IP address from headers (handles reverse proxy or Vercel)
      const ip =
        req.headers.get("x-forwarded-for")?.split(",")[0] ||
        req.headers.get("x-real-ip") ||
        "Unknown";
  
      // Include IP in the data sent to Zapier
      const payload = {
        ...data,
        ip_address: ip,
      };
  
      const zapierWebhookURL =
        "https://hooks.zapier.com/hooks/catch/18456228/2xbow56/";
  
      const response = await fetch(zapierWebhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error(`Zapier responded with status ${response.status}`);
      }
  
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Zapier log failed:", error);
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
  