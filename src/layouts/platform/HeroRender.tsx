export default function HeroRender({ logo }: { logo?: string }) {
	if (logo) {
		return <img className="hero-logo" src={logo} />;
	}

	return null;
}
