import { useLocation } from 'react-router-dom';

import MpLogo from '/images/mp-logo.png';
import FwLogo from '/images/fw-logo.png';

export default function HeaderCenterRender() {
	const location = useLocation();

	if (location.pathname.includes('/treinamentos/')) {
		return <img src={MpLogo} alt="Logo Método Prosper" />;
	}

	return null;
}
