import React, { useState } from 'react';
import { BreadcrumbType, HeaderContextProps } from './interfaces';

const HeaderContext = React.createContext<HeaderContextProps>(null!);

export function useHeader() {
	return React.useContext(HeaderContext);
}

export function HeaderProvider({ children }: { children: React.ReactNode }) {
	const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbType[]>([]);

	const value = { breadcrumbs, setBreadcrumbs };

	return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>;
}
