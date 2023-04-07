import styled from 'styled-components';
import { styles } from '../../constants';

export const UserDataContainer = styled.div`
	width: 100%;
	max-width: 335px;
	margin: 0 auto;
	padding: 40px 15px;

	button,
	a {
		width: 100%;
	}

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			padding: 40px 0 80px;
		}
	}
`;

export const UserDataSeparator = styled.div`
	border-bottom: 1px dashed rgba(255, 255, 255, 0.3);
	width: 100%;
	margin: 20px 0;

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			margin: 40px 0;
		}
	}
`;
