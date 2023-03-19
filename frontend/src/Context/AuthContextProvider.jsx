import React, { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthContextProvider({ children }) {
    const [create, setCreate] = useState(false)

    return (
        <AuthContext.Provider value={{ setCreate, create }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;