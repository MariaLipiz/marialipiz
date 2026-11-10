import NewsletterForm from "../Components/NewsletterForm";
import ResourceAnchor from "../Components/ResourceAnchor";
import Link from "next/link";

const resources = [
  { number: "01", type: "Calculadora", title: "¿Cuánto cobras realmente por hora?" },
  { number: "02", type: "Plantilla", title: "De clases sueltas a una cuota mensual" },
  { number: "03", type: "Guía", title: "Qué clases podrías pasar a grupo" },
];

export default function Home() {
  return (
    <>
      <main>
        <section className="hero-section" aria-labelledby="headline">
          <div className="contenedor hero-content">
            <div className="offer">
              <h1 className="titulo-h1" id="headline">
                <span className="headline-line">Tienes <span className="resaltado-azul-pastel">alumnos,</span></span>
                <span className="headline-line">pero no tienes <span className="resaltado-rojo-pastel">estabilidad</span>.</span>
              </h1>
              <p className="texto intro">
                Subir precios te da pánico, llega el verano y tus ingresos caen en picado, y entre clases, correcciones y 
                mensajes echas mas horas que un reloj.
              </p>
              <p className="texto intro intro-emphasis">
                Apúntate abajo y recibe gratis la guía en la que explico <strong> cómo conseguir ingresos estables sin seguir llenando tu agenda y sin cancelaciones👇</strong>
              </p>
              <NewsletterForm />
            </div>
          </div>
        </section>

        {/* Secciones conservadas como código inactivo:
        <section className="resource-section" aria-labelledby="resources-heading">
          <div className="contenedor resource-content">
            <div className="resource-heading">
              <span className="resource-kicker texto-pequeno">DENTRO DE LA CARPETA</span>
              <h2 className="titulo-h2 section-heading" id="resources-heading">
                <span className="resource-heading-line">¿Y si pudieras ganar más sin</span>{" "}
                <span className="resource-heading-line">tener que dar clase <span className="resaltado-amarillo-pastel">los sábados</span>?</span>
              </h2>
              <p className="texto resource-intro">
                Empieza por echar cuentas. Aquí tienes tres recursos para calcular cuánto te sale la hora, poner precio a una cuota mensual y decidir qué clases podrías dar en grupo
              </p>
            </div>
            <div className="resource-grid">
              {resources.map((resource) => (
                <ResourceAnchor className="resource-card" key={resource.number}>
                  <span className="resource-number texto-pequeno">{resource.number}</span>
                  <span className="resource-type texto-pequeno">{resource.type}</span>
                  <h3 className="titulo-h3 resource-title">{resource.title}</h3>
                  <span className="resource-arrow" aria-hidden="true">→</span>
                </ResourceAnchor>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-section" aria-labelledby="closing-heading">
          <div className="contenedor closing-content">
            <h2 className="titulo-h2 closing-heading" id="closing-heading">
              <span className="closing-heading-line">¿Te guardo un hueco el jueves?</span>{" "}
              <span className="closing-heading-line">Mejor <span className="resaltado-verde-pastel">te mando la carpeta</span>.</span>
            </h2>
            <p className="texto closing-copy">Déjame tu email y te envío los tres recursos gratis.</p>
            <ResourceAnchor className="boton-principal boton-claro">
              Envíame la carpeta →
            </ResourceAnchor>
          </div>
        </section>
        */}
      </main>

      <footer className="site-footer landing-footer">
        <div className="contenedor footer-content">
          <div className="footer-signature">
            <Link className="brand" href="/" aria-label="María Lipiz, inicio">maría lípiz.</Link>
          </div>
          <nav className="footer-links texto-pequeno" aria-label="Enlaces del pie de página">
            <Link href="/aviso-legal">Legal</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
