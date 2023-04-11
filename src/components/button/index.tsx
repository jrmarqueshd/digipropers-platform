import Loading from '../loading';
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
		<ButtonContainer dynamicColor={dynamicColor} secondary={secondary} loading={loading} {...props}>
			{loading && <Loading size="30px" stroke="4px" color={!dynamicColor && !secondary ? '#000' : undefined} />}
			{children}
		</ButtonContainer>
	);
}
