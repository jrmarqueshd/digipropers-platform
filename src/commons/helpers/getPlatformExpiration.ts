import moment from 'moment';
import { UserProduct } from '../../services/internal/interfaces';

const getPlatformExpiration = (product?: UserProduct) => {
	if (!product) return '';

	const expirationDate = moment(product.expiration);
	const now = moment();

	const monthsDiff = expirationDate.diff(now, 'months');

	if (monthsDiff > 0) {
		return `Seu acesso expira em: ${monthsDiff} meses`;
	}

	const daysDiff = expirationDate.diff(now, 'days');

	if (daysDiff > 0) {
		return `Seu acesso expira em: ${daysDiff} dias`;
	}

	return 'Seu acesso expira hoje.';
};

export default getPlatformExpiration;
