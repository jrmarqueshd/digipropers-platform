import React, { useState } from 'react';
import { LoadingContextProps } from './interfaces';
import useDidMount from '../../hooks/useDidMount';
import { useLocation } from 'react-router-dom';

const LoadingContext = React.createContext<LoadingContextProps>({} as LoadingContextProps);

export function useLoading() {
	return React.useContext(LoadingContext);
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
	const [loading, setLoading] = useState(false);

	const location = useLocation();

	useDidMount(() => {
		setLoading(false);
	}, [location.pathname]);

	return <LoadingContext.Provider value={{ loading, setLoading }}>{children}</LoadingContext.Provider>;
}
