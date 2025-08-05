import { EditorProvider } from "../features/editor/context/EditorContext"
import { UIProvider } from "../shared/context/UIContext"

export default function AppProvider ({children}) {
    return (
        <UIProvider>
            <EditorProvider>
                {children}
            </EditorProvider>
        </UIProvider>
    )
}