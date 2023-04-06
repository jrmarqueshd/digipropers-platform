export interface HeroContextProps {
	title: string;
	setTitle(title: string): void;
	logo: string;
	setLogo(logo: string): void;
	ignoreLogo?: boolean;
	setIgnoreLogo(state: boolean): void;
}
