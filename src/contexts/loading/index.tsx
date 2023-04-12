import React, { useState } from 'react';
import { LoadingContextProps } from './interfaces';

const LoadingContext = React.createContext<LoadingContextProps>({} as LoadingContextProps);

export function useLoading() {
	return React.useContext(LoadingContext);
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
	const [loading, setLoading] = useState(false);

	return <LoadingContext.Provider value={{ loading, setLoading }}>{children}</LoadingContext.Provider>;
}
