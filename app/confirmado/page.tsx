import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suscripción confirmada · María Lipiz",
  description: "Ya tienes el enlace a la carpeta de recursos en tu bandeja de entrada.",
};

export default function ConfirmadoPage() {
  return (
    <main className="confirmado-page">
      <h1 className="titulo-h1">
        Ya tienes en tu bandeja de entrada el enlace a la <span className="resaltado-verde-pastel">guía para conseguir ingresos estables siendo profe particular</span> :D
      </h1>
    </main>
  );
}
