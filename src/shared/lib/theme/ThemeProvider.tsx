import { useEffect, useState } from "react";
import { ThemeContext } from "./useTheme";
import { Themes } from "./useTheme";
import ThemeSwitcher from "../../../features/ThemeSwitcher/ui/ThemeSwitcher";

function ThemeProvider() {
    // Состояние темы
    const [currentTheme, setCurrentTheme] = useState(Themes.LIGHT);

    // Фукнция смены темы
    const toggleTheme = () => {
        setCurrentTheme(prevTheme =>
            prevTheme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT
        );
    };

    // Применение ко всему телу
    useEffect(() => {
        document.body.className = currentTheme === Themes.LIGHT ? 'light-theme' : 'dark-theme';
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
            <ThemeSwitcher />
        </ThemeContext.Provider>
    );
}

export default ThemeProvider