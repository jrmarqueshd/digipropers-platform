import Loading from '../../components/loading';
import { PageWrapperProps } from './interfaces';
import { PageWrapperContainer } from './styles';

export default function PageWrapper({ loading, children }: PageWrapperProps) {
	return (
		<PageWrapperContainer loading={loading}>
			{loading ? <Loading size="45px" color="#fff" /> : children}
		</PageWrapperContainer>
	);
}
