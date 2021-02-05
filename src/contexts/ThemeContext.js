import React, { useState } from 'react'

export default function ThemeContext() {

    const [theme, setTheme] = useState("light")

    value = { theme }

    return (
        <ThemeContext.Provider value={value}>
            {!loading && children}
        </ThemeContext.Provider>
    )
}
