import { LayoutPlatform } from '../layouts/platform';
import { Dashboard } from '../pages/dashboard';
import { LoginPage } from '../pages/login';
import Trainings from '../pages/trainings';

import DgLogo from '/images/dg-logo.png';
import MpLogo from '/images/mp-logo.png';
import FwLogo from '/images/fw-logo.png';
import { Page } from './interfaces';
import Training from '../pages/trainings/training';

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
			logo: DgLogo,
		},
		{
			path: '/treinamentos',
			element: Trainings,
			layout: LayoutPlatform,
			logo: MpLogo,
			hiddenHeaderLogo: true,
		},
		{
			path: '/treinamentos/:training_id/:lesson',
			element: Training,
			logo: MpLogo,
		},
	],
};

export default pages;
