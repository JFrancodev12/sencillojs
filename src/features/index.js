import { Outlet, useLocation } from "react-router-dom";

import logo from '../shared/img/logo.svg'
import './styles/layout.css'

export default function RootLayout () {

    const location = useLocation();

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
                    <button className="--btn --btn-share">Compartir</button>
                </div>
            </header>

            <Outlet/>

        </>

    )

}