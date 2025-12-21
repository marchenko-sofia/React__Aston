import { useContext } from "react";
import Button from "../../../shared/ui/Button/Button";
import { ThemeContext } from "../../../shared/lib/theme/useTheme";


const ThemeSwitcher = () => {
    const { toggleTheme } = useContext(ThemeContext); // Берем из контекста текущую тему и метод переключения

    return (
        <Button onClick={toggleTheme}>Сменим тему</Button>
    );
};

export default ThemeSwitcher