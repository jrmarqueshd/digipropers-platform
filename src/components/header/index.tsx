import { useState } from 'react';
import HomeIcon from '/icons/home-icon.png';
import UserIcon from '/icons/user-icon.png';
import ChevronDown from '/icons/chevron-down.png';
import UserIconGreen from '/icons/user-icon-green.png';
import { useAuth } from '../../contexts/auth';
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
import { useHeader } from '../../contexts/header';
import { textEllipsis } from '../../commons/helpers/textEllipsis';
import useMediaQuery from '../../hooks/useMediaQuery';
import { useLocation } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import TelegramButton from '../telegramButton';
import { HeaderProps } from './interfaces';

export default function Header({ logo, hiddenLogo, isSticky, showTelegram }: HeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const location = useLocation();

	const { user, signout } = useAuth();
	const { breadcrumbs } = useHeader();
	const isLaptop = useMediaQuery(`(min-width: ${styles.medias.xl})`);

	return (
		<HeaderWrapper isSticky={isSticky}>
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
					{showTelegram && <TelegramButton />}
					{logo && !hiddenLogo && <img src={logo} alt="Logo" />}
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
