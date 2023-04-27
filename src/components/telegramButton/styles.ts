import styled from 'styled-components';
import { styles } from '../../constants';

export const TelegramButtonLabel = styled.i`
	display: none;

	@media screen {
		@media (min-width: ${styles.medias.sm}) {
			display: initial;
		}
	}
`;
