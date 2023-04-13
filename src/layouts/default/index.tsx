import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import { Container } from './styles';

export function Layout({
	hiddenHeader,
	hiddenHeaderLogo,
	logo,
}: {
	hiddenHeader?: boolean;
	hiddenHeaderLogo?: boolean;
	logo?: string;
}) {
	return (
		<Container>
			{!hiddenHeader && <Header hiddenLogo={hiddenHeaderLogo} logo={logo} />}

			<Outlet />
		</Container>
	);
}
