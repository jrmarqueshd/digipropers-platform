export interface HeaderContextProps {
	breadcrumbs: readonly BreadcrumbType[] | [];
	setBreadcrumbs(data: BreadcrumbType[] | []): void;
}

export interface BreadcrumbType {
	icon: string;
	label: string;
	goTo?: string;
}
