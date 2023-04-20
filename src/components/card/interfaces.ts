import { borders } from './helpers';

export interface CardProps {
	background: string;
	children: React.ReactNode;
	hiddenBorders?: typeof borders;
	borderColor: string;
	borderSize: string;
	onClick?: VoidFunction;
	onDisabledClick?: VoidFunction;
	disabled?: boolean;
	unavailable?: boolean;
}
