import FwLogo from '/images/fw-logo.png';
import FwCardBg from '/images/fw-card-bg.png';
import MpLogo from '/images/mp-logo.png';
import MpCardBg from '/images/mp-card-bg.png';
import DbLogo from '/images/db-logo.png';
import DbCardBg from '/images/db-card-bg.png';
import B3Logo from '/images/b3-logo.png';
import B3CardBg from '/images/b3-card-bg.png';

export const productsAvailable = ['fabrica', 'b3', 'bot', 'metodo'];

export const getProductAssets = (productName: string) => {
	return {
		fabrica: {
			goTo: '/fabrica-de-win',
			logo: FwLogo,
			background: FwCardBg,
			borderColor: '#A7CB22',
		},
		b3: {
			goTo: '/b3-pro',
			logo: B3Logo,
			background: B3CardBg,
			borderColor: '#2B9BD7',
		},
		bot: {
			goTo: '/bot-prosper',
			logo: DbLogo,
			background: DbCardBg,
			borderColor: '#9E6C0B',
		},
		metodo: {
			goTo: '/metodo-prosper',
			logo: MpLogo,
			background: MpCardBg,
			borderColor: '#CE3439',
		},
	}[productName];
};
