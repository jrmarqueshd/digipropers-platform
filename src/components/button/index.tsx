import { ButtonContainer } from './styles';

export default function Button({
	loading,
	children,
	variant,
}: {
	children: React.ReactNode;
	loading?: boolean;
	variant: 'primary' | 'secondary';
}) {
	return <ButtonContainer variant={variant}>{!loading ? children : 'loading...'}</ButtonContainer>;
}
