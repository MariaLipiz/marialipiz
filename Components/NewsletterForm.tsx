"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function NewsletterForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting") return;
    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent }),
      });
      const result: { message?: string; error?: string } = await response.json();
      if (!response.ok) throw new Error(result.error || "No se ha podido completar el envío. Inténtalo de nuevo.");
      router.push("/confirma-tu-email");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "No se ha podido completar el envío. Inténtalo de nuevo.");
    }
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      
      <div className="email-field">
        <label className="email-label" htmlFor="formulario-recursos">Tu email</label>
        <input
          className="campo-formulario"
          id="formulario-recursos"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="tu@email.com"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        disabled={state === "success"}
        />
      </div>
      <label className="consent-row">
        <input
          type="checkbox"
          name="consent"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
          disabled={state === "success"}
        />
        <span>Acepto la política de privacidad</span>
      </label>
      <button className="boton-principal" type="submit" disabled={state === "submitting" || state === "success"}>
        {state === "submitting" ? "Enviando…" : state === "success" ? "Solicitud enviada" : "Envíame la guía →"}
      </button>
      <p className="texto-pequeno form-feedback" role="status" aria-live="polite" data-state={state}>
        {message}
      </p>
    </form>
  );
}
