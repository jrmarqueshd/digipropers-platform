import styled from 'styled-components';
import { styles } from '../../constants';

export const LayoutPlatformContainer = styled.div`
	padding: 15px;

	img.hero-logo,
	h1 {
		margin: 0 auto 15px;
		max-width: 324px;
	}

	h1 {
		text-align: center;
		font-weight: 500;
		font-size: 24px;
		line-height: 28px;
		color: #ffffff;
		text-transform: uppercase;
		display: block;
		padding-bottom: 15px;
	}

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			padding: 58px 15px 15px;

			h1,
			img.hero-logo {
				margin: 0 auto 81px;
			}
		}
	}
`;
