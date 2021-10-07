import React from 'react'
import { createContext } from 'react'

export const ProtfolioContexts = createContext()

function PortfolioProvider({children}) {
    return (
        <ProtfolioContexts.Provider>
            {children}
        </ProtfolioContexts.Provider>
    )
}

export default PortfolioProvider
