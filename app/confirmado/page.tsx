import type { Metadata } from "next";
import SiteFooter from "../../Components/SiteFooter";

export const metadata: Metadata = {
  title: "Suscripción confirmada · María Lipiz",
  description: "Ya tienes el enlace a la carpeta de recursos en tu bandeja de entrada.",
};

export default function ConfirmadoPage() {
  return (
    <>
      <main className="confirmado-page">
        <h1 className="titulo-h1">
          Ya tienes en tu bandeja de entrada el enlace a la <span className="resaltado-verde-pastel">guía</span> :D
        </h1>
      </main>
      <SiteFooter />
    </>
  );
}
