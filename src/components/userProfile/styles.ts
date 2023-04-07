import styled from 'styled-components';
import { styles } from '../../constants';

export const UserProfileContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 30px;
	cursor: pointer;

	img {
		object-fit: cover;
		object-position: center;
		height: 88px;
		width: 88px;
		border-radius: 100%;
		margin-bottom: 8px;
	}

	input {
		margin: 0;
		opacity: 0;
		padding: 0;
		width: 0;
		height: 0;
		border: 0;
		box-shadow: none;
	}

	span {
		text-align: center;
		font-size: 14px;
		line-height: 17px;
		color: #e7eef0;
		opacity: 0.7;
	}

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			margin-bottom: 48px;
		}
	}
`;
