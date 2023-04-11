import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import { Container } from './styles';
import Loading from '../../components/loading';
import { useLoading } from '../../contexts/loading';

export function Layout({
	hiddenHeader,
	hiddenHeaderLogo,
	logo,
}: {
	hiddenHeader?: boolean;
	hiddenHeaderLogo?: boolean;
	logo?: string;
}) {
	const { loading } = useLoading();

	return (
		<Container>
			{loading && <Loading size="60px" centerMode />}

			{!hiddenHeader && <Header hiddenLogo={hiddenHeaderLogo} logo={logo} />}

			<Outlet />
		</Container>
	);
}
