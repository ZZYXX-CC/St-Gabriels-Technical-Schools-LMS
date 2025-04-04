import React, { createContext, useContext, useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'
import { lightColors, darkColors } from './colors'

export const ThemeContext = createContext({
    dark: false,
    colors: lightColors,
    setScheme: () => {},
})

export const ThemeProvider = (props) => {
    const colorScheme = useColorScheme()
    const [isDark, setIsDark] = useState(colorScheme == 'dark')
    const [error, setError] = useState(null)

    useEffect(() => {
        try {
            console.log('Initializing theme with color scheme:', colorScheme);
            setIsDark(colorScheme == 'dark')
            console.log('Theme initialized successfully');
        } catch (error) {
            console.error('Error initializing theme:', error);
            setError(error);
        }
    }, [colorScheme])

    const defaultTheme = {
        dark: isDark,
        colors: isDark ? darkColors : lightColors,
        setScheme: (scheme) => {
            try {
                console.log('Setting theme scheme:', scheme);
                setIsDark(scheme === 'dark');
                console.log('Theme scheme updated successfully');
            } catch (error) {
                console.error('Error setting theme scheme:', error);
                setError(error);
            }
        },
    }

    if (error) {
        console.error('Theme provider error:', error);
    }

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)