import Loading from '../loading';
import { ButtonContainer } from './styles';
import { ButtonProps } from './interfaces';

export default function Button({ loading, children, dynamicColor, secondary, ...props }: ButtonProps) {
	return (
		<ButtonContainer dynamicColor={dynamicColor} secondary={secondary} loading={loading} {...props}>
			{loading && <Loading size="30px" stroke="4px" color={!dynamicColor && !secondary ? '#000' : undefined} />}
			{children}
		</ButtonContainer>
	);
}
