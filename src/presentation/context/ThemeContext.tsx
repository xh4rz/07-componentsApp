import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { darkColors, lightColors, ThemeColors } from '../../config/theme/theme';
import { useColorScheme } from 'react-native';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
	currentTheme: ThemeColor;
	colors: ThemeColors;
	isDark: boolean;
	setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
	const coloSchema = useColorScheme();

	const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

	useEffect(() => {
		if (coloSchema === 'dark') {
			setCurrentTheme('dark');
		} else {
			setCurrentTheme('light');
		}
	}, [coloSchema]);

	const setTheme = (theme: ThemeColor) => {
		setCurrentTheme(theme);
	};

	return (
		<ThemeContext.Provider
			value={{
				currentTheme: currentTheme,
				isDark: currentTheme !== 'light',
				colors: currentTheme === 'light' ? lightColors : darkColors,
				setTheme: setTheme
			}}>
			{children}
		</ThemeContext.Provider>
	);
};
