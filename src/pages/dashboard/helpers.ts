import FwLogo from '/images/fw-logo.png';
import FwCardBg from '/images/fw-card-bg.png';
import MpLogo from '/images/mp-logo.png';
import MpCardBg from '/images/mp-card-bg.png';
import DbLogo from '/images/db-logo.png';
import DbCardBg from '/images/db-card-bg.png';
import B3Logo from '/images/b3-logo.png';
import B3CardBg from '/images/b3-card-bg.png';

export const cardsMenu = [
	{
		goTo: '/fabrica-de-win',
		logo: FwLogo,
		background: FwCardBg,
		disabled: false,
		borderColor: '#A7CB22',
	},
	{
		goTo: '/',
		logo: B3Logo,
		background: B3CardBg,
		disabled: true,
		borderColor: '#2B9BD7',
	},
	{
		goTo: '/',
		logo: DbLogo,
		background: DbCardBg,
		disabled: true,
		borderColor: '#9E6C0B',
	},
	{
		goTo: '/',
		logo: MpLogo,
		background: MpCardBg,
		disabled: true,
		borderColor: '#CE3439',
	},
];
