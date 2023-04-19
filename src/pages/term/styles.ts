import styled from 'styled-components';
import { styles } from '../../constants';
import { Link } from 'react-router-dom';

export const TermContainer = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	color: #fff;
	min-height: 100vh;
	max-width: ${styles.containerWidth};
	margin: 0 auto;
	padding: 60px 15px;

	.logo-link {
		margin: 0 auto 60px;
	}

	h1 {
		font-size: 24px;
		margin-bottom: 30px;
		font-weight: bold;
		text-transform: uppercase;
		text-align: center;
		width: 100%;
	}

	h2 {
		font-size: 20px;
		margin-top: 30px;
		margin-bottom: 30px;
		font-weight: bold;
	}

	ul {
		list-style: disc;
		padding-left: 20px;
	}

	p,
	li {
		margin-bottom: 15px;
	}

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			padding: 100px 0;
		}
	}
`;
