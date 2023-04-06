import React, { useState } from 'react';
import { HeroContextProps } from './interfaces';

const HeroContext = React.createContext<HeroContextProps>({} as HeroContextProps);

export function useHero() {
	return React.useContext(HeroContext);
}

export function HeroProvider({ children }: { children: React.ReactNode }) {
	const [title, setTitle] = useState('');
	const [logo, setLogo] = useState('');
	const [ignoreLogo, setIgnoreLogo] = useState(false);

	return (
		<HeroContext.Provider value={{ title, setTitle, logo, setLogo, ignoreLogo, setIgnoreLogo }}>
			{children}
		</HeroContext.Provider>
	);
}
