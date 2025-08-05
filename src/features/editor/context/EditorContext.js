import { createContext, useContext, useState } from "react";
import { ejecutarCodigo } from "../core/runtime";

const EditorContext = createContext();

export const EditorProvider = ({children}) => {

    const [ code, setCode ] = useState('mostrar("Hola, mundo");')
    const [ output, setOutput ] = useState('');
    const [ run, setRun ] = useState(false);

    const handleChangeCode = (value) => setCode(value || '')

    const handleRunCode = () => {
        try {
            if (!code) return;
            setRun(true);
            const { resultado, error } = ejecutarCodigo(code);
            setOutput(error || resultado || "❌ No se ejecutó");
        } catch (error) {
            console.error(error);
        } finally {
            setRun(false)
        }
    }

    const contextValue = {
        code,
        output,
        run,
        handleChangeCode,
        handleRunCode
    }

    return (
        <EditorContext.Provider value={contextValue}>{children}</EditorContext.Provider>
    )

}

export const useEditCode = () => useContext(EditorContext);