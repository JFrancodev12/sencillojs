import { Helmet } from "react-helmet";
import { docSections } from "./libs/sections";

import './styles/docs.css'

export default function Docs() {
  return (
    <>
        <Helmet>
            <title>Documentación | SencilloJS</title>
            <meta name="description" content="Aprende a usar SencilloJS, un lenguaje de programación en español basado en JavaScript para aprender de forma clara y directa."/>
        </Helmet>

        <main className="--docs-container">

            <h1 className="--title">📘 Documentación de SencilloJS</h1>

            <div className="--box">
                {docSections.map((d, index) => (
                    <section className="--section-box" key={index}>
                        <h2 className="--section-tti">{d.titulo}</h2>
                        <p className="--section-txt">{d.descripcion}</p>
                        {d.ejemplos.map((ejemplo, i) => (
                            <div key={i} className="--section-sandbox">
                                <pre className="--col"><strong>SencilloJS:</strong><br />{ejemplo.codigo}</pre>
                                <pre className="--col"><strong>Traducción JS:</strong><br />{ejemplo.traduccion}</pre>
                            </div>
                        ))}
                    </section>
                ))}
            </div>

        </main>
    </>
  );
}
