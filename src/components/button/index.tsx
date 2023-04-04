import { ButtonContainer } from './styles';

export default function Button({ loading, children }: { children: React.ReactNode; loading?: boolean }) {
	return <ButtonContainer>{!loading ? children : 'loading...'}</ButtonContainer>;
}
