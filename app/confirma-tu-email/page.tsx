import Link from "next/link";
import SiteFooter from "../../Components/SiteFooter";

export const metadata = {
  title: "Confirma tu email · María Lipiz",
  description: "Comprueba tu correo para completar la suscripción a la newsletter de María Lipiz.",
};

export default function ConfirmaTuEmailPage() {
  return (
    <>
    <main className="contenedor confirm-page">
      <div className="confirm-content">
        <article className="confirm-copy">
          <h1 className="titulo-h1">
            Tu email ha sido <span className="resaltado-rojo-pastel">RECHAZADO</span> (continúa leyendo) 👇
          </h1>

          <p className="texto">
            Para que tu solicitud sea aprobada debes abrir el email que te acabo de enviar y hacer clic en el enlace que contiene.
          </p>
          <p className="texto">
            Esto sirve para verificar que la dirección de correo que has proporcionado es correcta y no eres un bot ni nada de eso.
          </p>
          <p className="texto"><strong>Para que funcione tienes que hacerlo antes de 5 minutos.</strong></p>
          <p className="texto">
            De no hacerlo en ese tiempo, es muy probable que tu solicitud caduque y no podrás suscribirte.
          </p>

          <section className="confirm-help" aria-labelledby="confirm-help-heading">
            <h2 className="titulo-h2" id="confirm-help-heading">Si no recibes ese correo…</h2>
            <ul className="texto">
              <li>Comprueba la carpeta de spam y también el apartado «Social» y «Promociones». Si me encuentras ahí, pásame a la bandeja de entrada principal.</li>
              <li>Si consultas tu correo a través de un cliente como Apple Mail o usas una dirección <span className="confirm-email-address">@icloud.com</span>, es habitual que este mensaje sea borrado automáticamente y nunca te llegue. Evítalo.</li>
              <li><Link href="/#formulario-recursos">Vuelve a apuntarte</Link> y presta especial atención a la dirección de email. Es MUY habitual que el problema sea un error al escribirla.</li>
              <li>Si esto no es, guárdame en la agenda de contactos → Nombre: María Lípz, email: <a href="mailto:maria@matessindramas.es">maria@matessindramas.es</a> y espera unos minutos.</li>
              <li>Si nada de esto funciona, espera. Normalmente llega en unos minutos, pero a veces puede tardar hasta un par de horas.</li>
            </ul>
          </section>
        </article>
      </div>

    </main>
      <SiteFooter />
    </>
  );
}
