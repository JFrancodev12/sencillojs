import { Editor } from "@monaco-editor/react";
import { useEditCode } from "./context/EditorContext";

import { useUI } from "../../shared/context/UIContext";

import './styles/editor.css'

export default function EditorLayout () {

    const { theme } = useUI();
    const { code, output, run, handleChangeCode } = useEditCode();

    return (

        <main className="--box-editor">
            <Editor defaultLanguage="javascript" theme={`vs-${theme}`} value={code} className="--editor" onChange={(value) => handleChangeCode(value || "")} />
            <div className="--log">
                <div className="--log-body"><pre>{run ? 'Ejecutando...' : output}</pre></div>
            </div>
        </main>

    )

}