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
