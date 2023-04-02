export default function HeaderCenterRender({ logo, hiddenLogo }: { logo?: string; hiddenLogo?: boolean }) {
	if (logo && !hiddenLogo) {
		return <img src={logo} alt="Logo" />;
	}

	return null;
}
