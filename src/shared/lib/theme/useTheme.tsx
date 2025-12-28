import { createContext } from "react";

// Возможные темы
export const Themes = {
    LIGHT: 'light',
    DARK: 'dark',
};

// Интерфейс контекста темы
interface ThemeContextInterface {
    theme: string;
    toggleTheme: () => void;
}

// Значение по умолчанию для контекста
const defaultValue: ThemeContextInterface = {
    theme: Themes.LIGHT,
    toggleTheme: () => { },
};

// Создание контекста
export const ThemeContext = createContext<ThemeContextInterface>(defaultValue);

