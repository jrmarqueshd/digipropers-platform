export type Page = {
	path: string;
	element: () => JSX.Element;
	layout?: (props: any) => JSX.Element;
	hiddenHeader?: boolean;
	hiddenHeaderLogo?: boolean;
	logo?: string;
};
