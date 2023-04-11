import styled from 'styled-components';
import { styles } from '../../constants';

export const LoginContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	padding: 0 15px;

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			padding: 0;
		}
	}
`;

export const LoginCard = styled.form`
	width: 100%;
	max-width: 523px;
	padding: 40px 30px 60px;
	border: 1px solid rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(8px) saturate(80%);
	background-color: rgba(7, 7, 7, 0.4);

	img {
		margin: 0 auto 40px;
		width: 100%;
		max-width: 323px;
	}

	.forgot-password {
		display: block;
		margin-top: -16px;
		margin-bottom: 28px;
		font-size: 12px;
		line-height: 17px;
		color: #e7eef0;
		opacity: 0.7;
	}

	button {
		width: 100%;
	}

	@media screen {
		@media (min-width: ${styles.medias.sm}) {
			padding: 40px 60px 60px;
		}

		@media (min-width: ${styles.medias.md}) {
			padding: 56px 91px 80px;

			img {
				margin-bottom: 112px;
			}
		}
	}
`;
