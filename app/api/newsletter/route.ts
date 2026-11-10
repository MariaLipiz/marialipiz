import { subscribeToCampaignMonitor } from "../../../Components/campaign-monitor/subscribe.server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Revisa el email y vuelve a intentarlo." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Revisa el email y vuelve a intentarlo." }, { status: 400 });
  }

  const { email, consent } = body as { email?: unknown; consent?: unknown };
  if (typeof email !== "string" || email.length > 254 || !EMAIL_PATTERN.test(email.trim())) {
    return Response.json({ error: "Escribe un email válido." }, { status: 400 });
  }
  if (consent !== true) {
    return Response.json({ error: "Marca la casilla para recibir la carpeta y la newsletter." }, { status: 400 });
  }

  const result = await subscribeToCampaignMonitor(email.trim());
  if (!result.ok) {
    const status = result.reason === "configuration" ? 503 : 502;
    return Response.json({ error: "No hemos podido procesar tu solicitud. Inténtalo de nuevo más tarde." }, { status });
  }

  return Response.json({ message: "Revisa tu correo. Si recibes un mensaje de confirmación, confirma tu email para completar el alta" });
}
