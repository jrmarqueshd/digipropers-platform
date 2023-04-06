import { useHero } from '../../contexts/hero';

export default function HeroRender({ logo, title }: { logo?: string; title?: string }) {
	const { ignoreLogo, logo: dynamicLogo, title: dynamicTitle } = useHero();

	if (!ignoreLogo && (dynamicLogo || logo)) {
		return <img className="hero-logo" src={dynamicLogo || logo} />;
	}

	if (dynamicTitle || title) {
		return <h1>{dynamicTitle || title}</h1>;
	}

	return null;
}
