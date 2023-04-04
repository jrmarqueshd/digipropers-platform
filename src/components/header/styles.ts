import { Link as LinkComponent } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { styles } from '../../constants';

export const HeaderWrapper = styled.header`
	height: auto;
	padding: 15px;

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			padding: 47px 15px;
		}
	}
`;

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 25px;
	width: 100%;
	max-width: 1166px;
	margin: 0 auto;

	& > * {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;

		&:first-child {
			justify-content: left;
		}

		&:last-child {
			justify-content: right;
		}
	}

	.header-user-menu-balance-button {
		background-color: transparent;
		border: 2px solid #a7cb22;
		color: #a7cb22;
		height: 32px;
		border-radius: 4px;
		font-weight: 600;
	}
`;

export const HeaderLogoBreadcrumbs = styled.nav`
	display: flex;
	gap: 10px;

	@media screen {
		@media (min-width: ${styles.medias.xl}) {
			gap: 16px;
		}
	}
`;

export const HeaderLogoBreadcrumbsItem = styled(LinkComponent)`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;

	font-family: 'Mukta';
	font-style: normal;
	font-size: 17.7185px;
	line-height: 29px;
	letter-spacing: -0.02em;
	text-decoration: none;

	color: #ffffff;
	opacity: 0.5;
	transition: opacity 300ms ease-in-out;

	${({ to }) =>
		!to &&
		css`
			cursor: default;
			opacity: 1;

			img {
				opacity: 0.5;
			}
		`}

	&.custom-breadcrumbs {
		display: none;
	}

	&:hover {
		opacity: 1;
	}

	@media screen {
		@media (min-width: ${styles.medias.lg}) {
			&.custom-breadcrumbs {
				display: flex;
			}
		}

		@media (min-width: ${styles.medias.xl}) {
			gap: 16px;
		}
	}
`;

export const HeaderLogoContainer = styled.div`
	flex: 0.5;

	& > img {
		height: auto;
		max-width: 157px;
	}
`;

export const HeaderUserMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
`;

export const HeaderUserMenuTrigger = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	background-color: transparent;
	position: relative;

	border: 0;
	color: #ffffff;
	font-family: 'Mukta';
	font-style: normal;
	font-size: 17.7185px;
	line-height: 29px;
	letter-spacing: -0.02em;

	cursor: pointer;

	.chavron {
		transition: transform 300ms ease-in-out;

		&.open {
			transition: transform 300ms ease-in-out;
			transform: rotate(-180deg);
		}
	}

	.user-display {
		display: none;
	}

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			.user-display {
				display: flex;
				align-items: center;
				gap: 12px;
			}
		}
	}
`;

export const HeaderUserMenuDropdown = styled.div`
	display: none;
	position: absolute;
	background-color: #212121;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	padding: 12px 0;
	z-index: 300;
	top: 31px;
	right: 0;
	flex-direction: column;
	min-width: 255px;

	&.open {
		display: flex;
	}

	& > .header-user-menu-dropdown-info {
		text-align: left;
		padding: 0 15px;
		font-size: 14px;
		display: flex;
		align-items: center;
		gap: 5px;
		pointer-events: none;

		img {
			max-width: 12px;
		}
	}

	& > .header-user-menu-separator {
		margin: 0 15px 15px;
		padding: 0 0 15px;
		border-bottom: 1px solid #fff;
	}
`;

export const HeaderUserMenuDropdownMenu = styled.div`
	background: transparent;
	color: #fff;
	text-decoration: none;
	text-align: left;
	padding: 7.5px 15px;
	font-size: 18px;
	font-family: 'Mukta';
	font-style: normal;
	font-size: 17.7185px;
	line-height: 29px;
	letter-spacing: -0.02em;
	cursor: pointer;
	border: 0;
	transition: color 300ms ease-in-out;

	&:hover {
		color: #a1bc36;
	}
`;

export const HeaderUserMenuDropdownMenuLink = styled(LinkComponent)`
	background: transparent;
	color: #fff;
	text-decoration: none;
	text-align: left;
	padding: 7.5px 15px;
	font-size: 18px;
	font-family: 'Mukta';
	font-style: normal;
	font-size: 17.7185px;
	line-height: 29px;
	letter-spacing: -0.02em;
	cursor: pointer;
	border: 0;
	transition: color 300ms ease-in-out;

	&:hover {
		color: #a1bc36;
	}
`;
