import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { ejecutarCodigo } from "./core/runtime";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

import './styles/editor.css'

export default function EditorLayout () {

    const [codigo, setCodigo] = useState('mostrar("Hola, mundo");');
    const [salida, setSalida] = useState("");
    const [ run, setRun ] = useState(false);

    const ejecutar = () => {
        try {
            setRun(true);
            const { resultado, error } = ejecutarCodigo(codigo);
            setSalida(error || resultado || "❌ No se ejecutó");
        } catch (error) {
            console.log(error);
        } finally {
            setRun(false);
        }
    };

    return (

        <main className="--box-editor">
            <Editor defaultLanguage="javascript" theme="vs-dark" value={codigo} className="--editor" onChange={(value) => setCodigo(value || "")} />
            <div className="--log">
                <div className="--log-header">
                    <button className="--btn --btn-run" onClick={ejecutar}><IconPlayerPlayFilled/> Ejecutar</button>
                </div>
                <div className="--log-body"><pre>{run ? 'Ejecutando...' : salida}</pre></div>
            </div>
        </main>

    )

}