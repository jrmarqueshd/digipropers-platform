import { useState } from 'react';
import HomeIcon from '/icons/home-icon.png';
import UserIcon from '/icons/user-icon.png';
import ChevronDown from '/icons/chevron-down.png';
import UserIconGreen from '/icons/user-icon-green.png';
import TimeIconGreen from '/icons/time-icon-green.png';
import { useAuth } from '../../contexts/auth';
import getPlatformExpiration from '../../commons/helpers/getPlatformExpiration';
import {
	HeaderContainer,
	HeaderLogoBreadcrumbs,
	HeaderLogoBreadcrumbsItem,
	HeaderLogoContainer,
	HeaderUserMenu,
	HeaderUserMenuDropdown,
	HeaderUserMenuTrigger,
	HeaderWrapper,
	HeaderUserMenuDropdownMenuLink,
} from './styles';
import { links, styles } from '../../constants';
import HeaderCenterRender from './HeaderCenterRender';
import { useHeader } from '../../contexts/header';
import { textEllipsis } from '../../commons/helpers/textEllipsis';
import useMediaQuery from '../../hooks/useMediaQuery';
import { useLocation } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';

export default function Header({ logo, hiddenLogo }: { logo?: string; hiddenLogo?: boolean }) {
	const isLaptop = useMediaQuery(`(min-width: ${styles.medias.xl})`);

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const location = useLocation();

	const { user, signout } = useAuth();
	const { breadcrumbs } = useHeader();

	return (
		<HeaderWrapper>
			<HeaderContainer>
				{location.pathname !== '/' && (
					<HeaderLogoBreadcrumbs>
						<HeaderLogoBreadcrumbsItem to="/">
							<img src={HomeIcon} alt="Go to home" /> Home
						</HeaderLogoBreadcrumbsItem>
						{breadcrumbs.map(({ goTo, icon, label }) => (
							<HeaderLogoBreadcrumbsItem className="custom-breadcrumbs" {...(goTo ? { to: goTo } : { as: 'div' })}>
								<img src={icon} alt={`Go to ${label}`} /> {textEllipsis(label, !isLaptop ? 11 : 22)}
							</HeaderLogoBreadcrumbsItem>
						))}
					</HeaderLogoBreadcrumbs>
				)}
				<HeaderLogoContainer>
					<HeaderCenterRender hiddenLogo={hiddenLogo} logo={logo} />
				</HeaderLogoContainer>
				<HeaderUserMenu>
					<OutsideClickHandler onOutsideClick={() => setIsMenuOpen(false)}>
						<HeaderUserMenuTrigger type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<img src={UserIcon} alt="Your Profile" />
							<div onClick={() => setIsMenuOpen(false)} className="user-display">
								Olá, {user?.name?.split(' ')[0]}!{' '}
								<img className={`chavron ${isMenuOpen ? 'open' : ''}`} src={ChevronDown} alt="Show more" />
							</div>
							<HeaderUserMenuDropdown onClick={(e) => e.stopPropagation()} className={isMenuOpen ? 'open' : undefined}>
								<div className="header-user-menu-dropdown-info">
									<img src={UserIconGreen} alt="Your Profile" /> {user?.email}
								</div>
								{/* <div className="header-user-menu-dropdown-info">
								<img src={TimeIconGreen} alt="Expiration time" />
								{getPlatformExpiration(
									// TODO change fixed ID to dynamic
									user?.products?.find((product) => product.id === 'd4sa5d1asd61asd'),
								)}{' '}
							</div> */}

								<div className="header-user-menu-separator" />

								<HeaderUserMenuDropdownMenuLink onClick={() => setIsMenuOpen(false)} to="/meus-dados/alterar-dados">
									Alterar dados pessoais
								</HeaderUserMenuDropdownMenuLink>
								<HeaderUserMenuDropdownMenuLink
									onClick={() => setIsMenuOpen(false)}
									as="a"
									href={links.WHATSAPP_DEPOSIT_LINK}
									target="_blank"
								>
									Depositar saldo
								</HeaderUserMenuDropdownMenuLink>
								<HeaderUserMenuDropdownMenuLink as="button" type="button" onClick={signout}>
									Sair
								</HeaderUserMenuDropdownMenuLink>
							</HeaderUserMenuDropdown>
						</HeaderUserMenuTrigger>
					</OutsideClickHandler>
				</HeaderUserMenu>
			</HeaderContainer>
		</HeaderWrapper>
	);
}
