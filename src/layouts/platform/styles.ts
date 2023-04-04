import styled from 'styled-components';
import { styles } from '../../constants';

export const LayoutPlatformContainer = styled.div`
	padding: 15px;

	img.hero-logo {
		margin: 0 auto 15px;
		max-width: 324px;
	}

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			padding: 58px 15px 15px;

			img.hero-logo {
				margin: 0 auto 81px;
			}
		}
	}
`;
