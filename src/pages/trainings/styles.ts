import styled from 'styled-components';
import Card from '../../components/card';
import { styles } from '../../constants';

export const TrainingsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 15px;

	.card {
		width: 100%;
		max-width: 330px;
		height: 376px;
	}

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			gap: 30px;

			.card {
				max-width: 273px;
			}
		}
	}
`;

export const TrainingsCardContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 8px;
	color: #ffffff;
	padding: 24px 24px 32px;
	height: 100%;

	h2 {
		font-size: 21px;
		line-height: 25px;
	}

	p {
		opacity: 0.75;
		font-size: 16px;
		line-height: 19px;
	}
`;
