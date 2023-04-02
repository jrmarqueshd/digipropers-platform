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
import { links } from '../../constants';
import HeaderCenterRender from './HeaderCenterRender';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { user, signout } = useAuth();

	return (
		<HeaderWrapper>
			<HeaderContainer>
				<HeaderLogoBreadcrumbs>
					<HeaderLogoBreadcrumbsItem to="/">
						<img src={HomeIcon} alt="Go to home" /> Home
					</HeaderLogoBreadcrumbsItem>
				</HeaderLogoBreadcrumbs>
				<HeaderLogoContainer>
					<HeaderCenterRender />
				</HeaderLogoContainer>
				<HeaderUserMenu>
					<HeaderUserMenuTrigger type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<img src={UserIcon} alt="Your Profile" />
						<div className="user-display">
							Olá, {user?.name?.split(' ')[0]}!{' '}
							<img className={`chavron ${isMenuOpen ? 'open' : ''}`} src={ChevronDown} alt="Show more" />
						</div>
						<HeaderUserMenuDropdown onClick={(e) => e.stopPropagation()} className={isMenuOpen ? 'open' : undefined}>
							<div className="header-user-menu-dropdown-info">
								<img src={UserIconGreen} alt="Your Profile" /> {user?.email}
							</div>
							<div className="header-user-menu-dropdown-info">
								<img src={TimeIconGreen} alt="Expiration time" />
								{getPlatformExpiration(
									// TODO change fixed ID to dynamic
									user?.products?.find((product) => product.id === 'ABC123'),
								)}{' '}
							</div>

							<div className="header-user-menu-separator" />

							<HeaderUserMenuDropdownMenuLink to="/meus-dados/alterar-dados">
								Alterar dados pessoais
							</HeaderUserMenuDropdownMenuLink>
							<HeaderUserMenuDropdownMenuLink as="a" href={links.WHATSAPP_DEPOSIT_LINK} target="_blank">
								Depositar saldo
							</HeaderUserMenuDropdownMenuLink>
							<HeaderUserMenuDropdownMenuLink as="button" type="button" onClick={signout}>
								Sair
							</HeaderUserMenuDropdownMenuLink>
						</HeaderUserMenuDropdown>
					</HeaderUserMenuTrigger>
				</HeaderUserMenu>
			</HeaderContainer>
		</HeaderWrapper>
	);
}
