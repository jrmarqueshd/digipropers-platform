import { ButtonContainer } from './styles';

export default function Button({
	loading,
	children,
	dynamicColor,
	secondary,
	...props
}: {
	children: React.ReactNode;
	loading?: boolean;
	dynamicColor?: string;
	secondary?: boolean;
	[x: string]: any;
}) {
	return (
		<ButtonContainer dynamicColor={dynamicColor} secondary={secondary} {...props}>
			{!loading ? children : 'loading...'}
		</ButtonContainer>
	);
}
