import manageStorage from '../commons/helpers/manageStorage';
import { LayoutPlatform } from '../layouts/platform';
import Live from '../pages/live';
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
	title,
}: Pick<Page, 'logo' | 'element' | 'title'> & { basePath: `/${string}` }): any => {
	return [
		{
			path: basePath,
			element: element,
			layout: LayoutPlatform,
			logo: logo,
			hiddenHeaderLogo: true,
			title: title,
		},
		{
			path: `${basePath}/treinamento`,
			element: Trainings,
			layout: LayoutPlatform,
			logo: logo,
			hiddenHeaderLogo: true,
			title: title,
		},
		{
			path: `${basePath}/treinamento/:training_id/:lesson_index`,
			element: Training,
			logo: logo,
			title: title,
		},
		{
			path: `${basePath}/live`,
			element: Live,
			layout: LayoutPlatform,
			logo: logo,
			title: 'Live',
		},
	];
};
