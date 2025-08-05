import { toast, Toaster } from "sonner";
import { Outlet, useLocation } from "react-router-dom";

import logo from '../shared/img/logo.svg'
import './styles/layout.css'

export default function RootLayout () {

    const location = useLocation();

    const handleShare = async () => {
        const texto = `🚀 Aprende a programar en español con SencilloJS: \n${window.location.origin}`;
        try {
            await navigator.clipboard.writeText(texto);
            toast.success('Se copió para compartir')
        } catch (err) {
            console.error("❌ No se pudo copiar", err);
            toast.error("❌ No se pudo copiar")
        }
    };

    return (

        <>
        
            <header className="--header">
                <div className="--col --col-A">
                    <img src={logo} className="--img-logo" alt={`Logo de SencilloJs | El Javascript en español para que mejores tu lógica de programación en tu idioma`} loading="lazy" />
                    <h4>SencilloJs</h4>
                    <span>/</span>
                    {location.pathname === '/' ? (
                        <a href="/docs" className="--link" target="_blank">Documentación</a>
                    ) : (
                        <a href="/" className="--link" target="_blank">Editor</a>
                    )}
                </div>
                <div className="--col">
                    <button className="--btn --btn-share" onClick={handleShare}>Compartir</button>
                </div>
            </header>

            <Outlet/>

            <Toaster position="top-center" duration={2000} richColors />

        </>

    )

}