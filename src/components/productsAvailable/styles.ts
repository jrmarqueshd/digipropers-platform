import styled from 'styled-components';
import { styles } from '../../constants';

export const ProductsAvailableContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
	margin-bottom: 30px;

	h3 {
		display: block;
		font-size: 17px;
		line-height: 22px;
		text-align: center;
		color: #ffffff;
		margin-bottom: 16px;
	}

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			margin-bottom: 72px;
		}
	}
`;

export const ProductAvailable = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	img {
		width: 100%;
		max-width: 156px;
		max-height: 36px;
	}

	span {
		display: flex;
		font-size: 17px;
		line-height: 22px;
		color: #ffffff;
		position: relative;
		gap: 8px;

		&::before {
			content: '•';
			display: block;
			color: #ffffff;
			font-size: 17px;
		}
	}
`;
