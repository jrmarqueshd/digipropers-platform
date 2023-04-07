import React, { useState } from 'react';
import { HeroContextProps } from './interfaces';
import useDidMount from '../../hooks/useDidMount';
import { useLocation } from 'react-router-dom';

const HeroContext = React.createContext<HeroContextProps>({} as HeroContextProps);

export function useHero() {
	return React.useContext(HeroContext);
}

export function HeroProvider({ children }: { children: React.ReactNode }) {
	const [title, setTitle] = useState('');
	const [logo, setLogo] = useState('');
	const [ignoreLogo, setIgnoreLogo] = useState(false);

	const location = useLocation();

	useDidMount(() => {
		if (ignoreLogo || title || logo) {
			setTitle('');
			setLogo('');
			setIgnoreLogo(false);
		}
	}, [location.pathname]);

	return (
		<HeroContext.Provider value={{ title, setTitle, logo, setLogo, ignoreLogo, setIgnoreLogo }}>
			{children}
		</HeroContext.Provider>
	);
}
