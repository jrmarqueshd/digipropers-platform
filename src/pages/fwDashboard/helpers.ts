import FwOperationBg from '/images/fw-operation-bg.png';
import FwLiveBg from '/images/fw-live-bg.png';
import FwDepositBg from '/images/fw-deposit-bg.png';
import FwBrokerageBg from '/images/fw-brokerage-bg.png';
import FwTrainingsBg from '/images/fw-trainings-bg.png';

export const cardsMenu = [
	{
		goTo: '/',
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
	},
	{
		goTo: '/',
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
		goTo: '/treinamentos',
		title: 'treinamento',
		background: FwTrainingsBg,
		disabled: false,
		borderColor: '#A7CB22',
	},
];
