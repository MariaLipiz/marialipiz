import Link from "next/link";
import NewsletterForm from "../../Components/NewsletterForm";

export default function AvisoLegal() {
  return (
    <main className="contenedor legal-page">
      <article>
        <h1 className="titulo-h1">Aviso legal</h1>

        <p className="texto legal-details">
          <strong>Titular:</strong> Maria Lipiz Fernandez<br />
          <strong>NIF:</strong> 44435285-K<br />
          <strong>Domicilio profesional:</strong> Avenida de betanzos 54, Madrid, 28029, España<br />
          <strong>Email de contacto:</strong> <a href="mailto:maria@matessindramas.es">maria@matessindramas.es</a>
        </p>

        <section className="legal-section">
          <h2 className="titulo-h2">Objeto</h2>
          <p className="texto">Este sitio web, marialipiz.com (en adelante, el &quot;Sitio&quot;), tiene por objeto ofrecer información y contenidos sobre enseñanza particular, así como facilitar la suscripción a una newsletter y la contratación de servicios profesionales de asesoramiento para profesores particulares.</p>
        </section>

        <section className="legal-section">
          <h2 className="titulo-h2">Condiciones de uso</h2>
          <p className="texto">El acceso al Sitio es gratuito y atribuye la condición de usuario, que implica la aceptación de este aviso legal. El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe.</p>
        </section>

        <section className="legal-section">
          <h2 className="titulo-h2">Propiedad intelectual e industrial</h2>
          <p className="texto">Todos los contenidos del Sitio (textos, imágenes, diseño, marca y nombre comercial &quot;Maria Lipiz&quot;) son titularidad de su responsable o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o comunicación pública sin autorización expresa.</p>
        </section>

        <section className="legal-section">
          <h2 className="titulo-h2">Carácter de la información</h2>
          <p className="texto">Los contenidos del Sitio y de la newsletter tienen carácter divulgativo y no constituyen asesoramiento jurídico ni fiscal individualizado. Cada situación requiere un análisis particular; para obtener asesoramiento profesional, contrata el servicio correspondiente.</p>
        </section>

        <section className="legal-section">
          <h2 className="titulo-h2">Responsabilidad</h2>
          <p className="texto">El titular no se hace responsable de los daños derivados del uso de la información del Sitio sin el correspondiente asesoramiento profesional individualizado, ni de la disponibilidad ininterrumpida del Sitio o de errores en los contenidos, que procurará corregir a la mayor brevedad.</p>
        </section>

        <section className="legal-section">
          <h2 className="titulo-h2">Legislación aplicable</h2>
          <p className="texto">Este aviso legal se rige por la legislación española. Para cualquier controversia, y salvo norma imperativa en contrario, las partes se someten a los juzgados y tribunales del domicilio del titular.</p>
        </section>
      </article>

      <section className="legal-newsletter" aria-labelledby="legal-newsletter-heading">
        <h2 className="titulo-h2" id="legal-newsletter-heading">Si te mola leer este tostón, imagínate lo que disfrutarás leyendo el newsletter y viendo los recursos gratuitos</h2>
        <p className="texto legal-newsletter-copy">Un email diario sobre cómo ser libre enseñando mates, inglés o flauta de pan, bastante menos aburrido que esta página. Según te suscribes, te llevas la carpeta de recursos gratuitos.</p>
        <NewsletterForm />
        
      </section>
    </main>
  );
}
