import styled from 'styled-components';
import { styles } from '../../../constants';

export const BpOperationContainer = styled.div`
	padding: 15px;

	button {
		margin: 0 auto 15px;
		width: 100%;
		max-width: 235px;
	}

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			padding: 58px 15px 15px;

			button {
				margin: 0 auto 81px;
			}
		}
	}
`;

export const BpOperationResume = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	flex-direction: column;
	margin-bottom: 15px;

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			flex-direction: row;
			margin-bottom: 56px;
		}
	}
`;

export const BpOperationResumeItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	background: rgba(255, 255, 255, 0.03);
	border: 0.607143px solid rgba(255, 255, 255, 0.08);
	backdrop-filter: blur(8px);
	padding: 11px 15px;
	box-sizing: border-box;
	width: 100%;

	span {
		font-weight: 500;
		font-size: 9.10714px;
		line-height: 15px;
		letter-spacing: -0.02em;
		color: #a9a9ab;
	}

	strong {
		font-size: 15.7857px;
		line-height: 26px;
		font-weight: 500;
		color: #fff;

		&.profit,
		&.loss {
			font-weight: 700;
		}

		&.profit {
			color: #38bc35;
		}

		&.loss {
			color: #ba5d5d;
		}
	}

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			max-width: 126px;
		}
	}
`;
