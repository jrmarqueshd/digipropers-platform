export interface StickyProps {
	offsetTop?: number;
}

export interface StickyReturn {
	isSticky: boolean;
	targetElement: React.RefObject<HTMLElement>;
}
