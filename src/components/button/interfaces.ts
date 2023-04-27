export interface ButtonProps {
	children: React.ReactNode;
	loading?: boolean;
	dynamicColor?: string;
	secondary?: boolean;
	/* default: normal */
	size?: 'normal' | 'small' | 'smaller';
	[x: string]: any;
}
