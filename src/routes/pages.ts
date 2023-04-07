import { LayoutPlatform } from '../layouts/platform';
import { Dashboard } from '../pages/dashboard';
import Login from '../pages/login';

import DgLogo from '/images/dg-logo.png';
import MpLogo from '/images/mp-logo.png';
import FwLogo from '/images/fw-logo.png';
import BpLogo from '/images/db-logo.png';
import B3Logo from '/images/b3-logo.png';
import { Page } from './interfaces';
import { FwDashboard } from '../pages/fwDashboard';
import { MpDashboard } from '../pages/mpDashboard';
import { generateServicePages } from './helpers';
import { B3Dashboard } from '../pages/b3Dashboard';
import { BpDashboard } from '../pages/bpDashboard';
import BpOperation from '../pages/bpDashboard/bpOperation';
import UserData from '../pages/userData';

const pages: Record<string, Page[]> = {
	unAuth: [
		{
			path: '/login',
			element: Login,
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
		...generateServicePages({
			basePath: '/fabrica-de-win',
			element: FwDashboard,
			logo: FwLogo,
		}),
		...generateServicePages({
			basePath: '/metodo-prosper',
			element: MpDashboard,
			logo: MpLogo,
		}),
		...generateServicePages({
			basePath: '/b3-pro',
			element: B3Dashboard,
			logo: B3Logo,
		}),
		{
			path: '/bot-prosper',
			element: BpDashboard,
			layout: LayoutPlatform,
			logo: BpLogo,
			hiddenHeaderLogo: true,
		},
		{
			path: '/bot-prosper/:bot_id',
			element: BpOperation,
			logo: BpLogo,
			hiddenHeaderLogo: false,
		},
		{
			path: '/meus-dados/alterar-dados',
			element: UserData,
			hiddenHeaderLogo: true,
		},
	],
};

export default pages;
