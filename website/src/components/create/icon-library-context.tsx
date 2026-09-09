"use client"

import * as React from "react"

const IconLibraryContext = React.createContext<string | null>(null)

export const IconLibraryProvider: React.FC<{
  iconLibrary: string
  children: React.ReactNode
}> = ({ iconLibrary, children }) => (
  <IconLibraryContext.Provider value={iconLibrary}>
    {children}
  </IconLibraryContext.Provider>
)

export function useIconLibrary(): string | null {
  try {
    return React.useContext(IconLibraryContext)
  } catch {
    return null
  }
}
