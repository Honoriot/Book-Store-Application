import { AuthProvider } from "./context/AuthContext";

export default function ContextProvider({children}) {
    return <AuthProvider>{children}</AuthProvider>;
}