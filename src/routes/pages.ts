import { LayoutPlatform } from '../layouts/platform';
import { Dashboard } from '../pages/dashboard';
import { LoginPage } from '../pages/login';

import DgLogo from '/images/dg-logo.png';
import MpLogo from '/images/mp-logo.png';
import FwLogo from '/images/fw-logo.png';
import DbLogo from '/images/db-logo.png';
import B3Logo from '/images/b3-logo.png';
import { Page } from './interfaces';
import { FwDashboard } from '../pages/fwDashboard';
import Trainings from '../pages/trainings';
import Training from '../pages/trainings/training';
import { MpDashboard } from '../pages/mpDashboard';

const pages: Record<string, Page[]> = {
	unAuth: [
		{
			path: '/login',
			element: LoginPage,
		},
	],
	auth: [
		{
			path: '/',
			element: Dashboard,
			layout: LayoutPlatform,
			logo: DgLogo,
			hiddenHeaderLogo: true,
		},
		{
			path: '/fabrica-de-win',
			element: FwDashboard,
			layout: LayoutPlatform,
			logo: FwLogo,
			hiddenHeaderLogo: true,
		},
		{
			path: '/fabrica-de-win/treinamentos',
			element: Trainings,
			layout: LayoutPlatform,
			logo: FwLogo,
			hiddenHeaderLogo: true,
		},
		{
			path: '/fabrica-de-win/treinamentos/:training_id/:lesson',
			element: Training,
			logo: FwLogo,
		},
		{
			path: '/metodo-prosper',
			element: MpDashboard,
			layout: LayoutPlatform,
			logo: MpLogo,
			hiddenHeaderLogo: true,
		},
		{
			path: '/metodo-prosper/treinamentos',
			element: Trainings,
			layout: LayoutPlatform,
			logo: MpLogo,
			hiddenHeaderLogo: true,
		},
		{
			path: '/metodo-prosper/treinamentos/:training_id/:lesson',
			element: Training,
			logo: MpLogo,
		},
	],
};

export default pages;
