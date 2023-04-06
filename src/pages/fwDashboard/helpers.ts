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
		goTo: '/live/d45asdas456d1',
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
		goTo: '/',
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
