import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import { Container } from './styles';
import useSticky from '../../hooks/useSticky';
import { LayoutProps } from './interfaces';

export function Layout({ hiddenHeader, hiddenHeaderLogo, logo, showTelegram }: LayoutProps) {
	const { isSticky, targetElement } = useSticky({ offsetTop: 0 });

	return (
		<Container>
			{!hiddenHeader && (
				<Header hiddenLogo={hiddenHeaderLogo} logo={logo} isSticky={isSticky} showTelegram={showTelegram} />
			)}

			<div ref={targetElement as any}>
				<Outlet />
			</div>
		</Container>
	);
}
