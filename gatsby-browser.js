// custom typefaces
import "prismjs/themes/prism.css"
import React from "react"
import { ThemeProvider } from "./src/components/themeContext"

export const wrapRootElement = ({ element }) => (
    <ThemeProvider>{element}</ThemeProvider>
)