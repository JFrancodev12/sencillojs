import { toast, Toaster } from "sonner";
import { IconMoon, IconPlayerPlayFilled, IconSun } from "@tabler/icons-react";
import { Outlet, useLocation } from "react-router-dom";
import { useUI } from "../shared/context/UIContext";
import { useEditCode } from "./editor/context/EditorContext";

import logo from '../shared/img/logo.svg'
import './styles/layout.css'

export default function RootLayout () {

    const location = useLocation();

    const { theme, handleChangeTheme } = useUI();
    const { handleRunCode } = useEditCode();

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
                <div className="--col --col-B">
                    <button className="--btn --btn-execute" onClick={handleRunCode}> <IconPlayerPlayFilled/> Ejecutar</button>
                    <button className="--btn --btn-share" onClick={handleShare}>Compartir</button>
                    <button className="--btn --btn-theme" onClick={handleChangeTheme}>{theme === 'dark' ? <IconMoon/> : <IconSun/>}</button>
                </div>
            </header>

            <Outlet/>

            <Toaster position="top-center" duration={2000} richColors />

        </>

    )

}