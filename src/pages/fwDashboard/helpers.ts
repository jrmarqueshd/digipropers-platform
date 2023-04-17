import FwOperationBg from '/images/fw-operation-bg.png';
import FwLiveBg from '/images/fw-live-bg.png';
import FwDepositBg from '/images/fw-deposit-bg.png';
import FwBrokerageBg from '/images/fw-brokerage-bg.png';
import FwTrainingsBg from '/images/fw-trainings-bg.png';
import { links } from '../../constants';

export const cardsMenu = [
	{
		goTo: import.meta.env.VITE_APP_FW_OPERATION_URL || '/',
		title: 'Painel de operações',
		background: FwOperationBg,
		disabled: false,
		borderColor: '#A7CB22',
		external: true,
	},
	{
		goTo: '/live',
		title: 'Ao Vivo',
		background: FwLiveBg,
		disabled: false,
		borderColor: '#A7CB22',
		target: true,
	},
	{
		goTo: links.WHATSAPP_DEPOSIT_LINK,
		title: 'Depósito e saque',
		background: FwDepositBg,
		disabled: false,
		borderColor: '#A7CB22',
		external: true,
	},
	{
		goTo: 'https://track.deriv.com/_lnD5HbJt7kc-WNa_P_Nb_2Nd7ZgqdRLk/1',
		title: 'Cadastro na corretora',
		background: FwBrokerageBg,
		disabled: false,
		borderColor: '#A7CB22',
		external: true,
	},
	{
		goTo: '/treinamento',
		title: 'treinamento',
		background: FwTrainingsBg,
		disabled: false,
		borderColor: '#A7CB22',
	},
];
