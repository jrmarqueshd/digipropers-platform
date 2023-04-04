import manageStorage from '../commons/helpers/manageStorage';
import { LayoutPlatform } from '../layouts/platform';
import Trainings from '../pages/trainings';
import Training from '../pages/trainings/training';
import { Page } from './interfaces';

export const needRedirect = {
	auth: manageStorage().get('STORAGE_TOKEN_KEY') ? '' : '/login',
	unAuth: manageStorage().get('STORAGE_TOKEN_KEY') ? '/' : '',
};

export const generateServicePages = ({
	basePath,
	logo,
	element,
}: Pick<Page, 'logo' | 'element'> & { basePath: `/${string}` }) => {
	return [
		{
			path: basePath,
			element: element,
			layout: LayoutPlatform,
			logo: logo,
			hiddenHeaderLogo: true,
		},
		{
			path: `${basePath}/treinamentos`,
			element: Trainings,
			layout: LayoutPlatform,
			logo: logo,
			hiddenHeaderLogo: true,
		},
		{
			path: `${basePath}/treinamentos/:training_id/:lesson`,
			element: Training,
			logo: logo,
		},
	];
};
