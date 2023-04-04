import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useDidMount from '../../hooks/useDidMount';
import { BreadcrumbType, HeaderContextProps } from './interfaces';

const HeaderContext = React.createContext<HeaderContextProps>(null!);

export function useHeader() {
	return React.useContext(HeaderContext);
}

export function HeaderProvider({ children }: { children: React.ReactNode }) {
	const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbType[]>([]);

	const location = useLocation();

	const value = { breadcrumbs, setBreadcrumbs };

	useDidMount(() => {
		setBreadcrumbs([]);
	}, [location.pathname]);

	return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>;
}
