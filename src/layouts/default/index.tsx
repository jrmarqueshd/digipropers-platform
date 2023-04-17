import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import { Container } from './styles';
import useSticky from '../../hooks/useSticky';

export function Layout({
	hiddenHeader,
	hiddenHeaderLogo,
	logo,
}: {
	hiddenHeader?: boolean;
	hiddenHeaderLogo?: boolean;
	logo?: string;
}) {
	const { isSticky, targetElement } = useSticky({ offsetTop: 0 });

	return (
		<Container>
			{!hiddenHeader && <Header hiddenLogo={hiddenHeaderLogo} logo={logo} isSticky={isSticky} />}

			<div ref={targetElement as any}>
				<Outlet />
			</div>
		</Container>
	);
}
