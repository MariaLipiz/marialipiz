import "server-only";

const REQUEST_TIMEOUT_MS = 10_000;

export type SubscribeResult = { ok: true } | { ok: false; reason: "configuration" | "provider" | "network" };

export async function subscribeToCampaignMonitor(email: string): Promise<SubscribeResult> {
  const apiKey = process.env.CAMPAIGN_MONITOR_API_KEY;
  const listId = process.env.CAMPAIGN_MONITOR_LIST_ID;
  if (!apiKey || !listId) return { ok: false, reason: "configuration" };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  const authorization = Buffer.from(`${apiKey}:x`).toString("base64");

  try {
    const response = await fetch(`https://api.createsend.com/api/v3.3/subscribers/${encodeURIComponent(listId)}.json`, {
      method: "POST",
      headers: { Authorization: `Basic ${authorization}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        EmailAddress: email,
        Resubscribe: false,
        RestartSubscriptionAutoresponders: false,
        ConsentToTrack: "No",
      }),
      signal: controller.signal,
      cache: "no-store",
    });
    if (!response.ok) return { ok: false, reason: "provider" };
    return { ok: true };
  } catch {
    return { ok: false, reason: "network" };
  } finally {
    clearTimeout(timeout);
  }
}
