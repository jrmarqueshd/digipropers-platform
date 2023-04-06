import { Outlet } from 'react-router-dom';
import HeroRender from './HeroRender';
import { LayoutPlatformContainer } from './styles';

export function LayoutPlatform({ logo, title }: { logo?: string; title?: string }) {
	return (
		<LayoutPlatformContainer>
			<HeroRender logo={logo} title={title} />

			<Outlet />
		</LayoutPlatformContainer>
	);
}
