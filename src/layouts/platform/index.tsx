import { Outlet } from 'react-router-dom';
import HeroRender from './HeroRender';
import { LayoutPlatformContainer } from './styles';

export function LayoutPlatform({ logo }: { logo?: string }) {
	return (
		<LayoutPlatformContainer>
			<HeroRender logo={logo} />

			<Outlet />
		</LayoutPlatformContainer>
	);
}
