import Button from '../../components/button';
import Input from '../../components/input';
import ProductsAvailable from '../../components/productsAvailable';
import UserProfile from '../../components/userProfile';
import { links } from '../../constants';
import { UserDataContainer, UserDataSeparator } from './styles';

export default function UserData() {
	return (
		<UserDataContainer>
			<UserProfile />

			<Input type="email" label="Email" disabled value="email@email.com" />
			<Input type="text" label="Nome" value="Fulano de tal" />
			<Input type="password" label="Senha" value="516dsd5asd" />
			<Input type="password" label="Confirmar nova senha" value="516dsd5asd" />

			<UserDataSeparator />

			<Input type="text" label="Seu saldo" disabled value="R$ 5000" />
			<Button as="a" href={links.WHATSAPP_DEPOSIT_LINK} secondary>
				Adicionar saldo
			</Button>

			<UserDataSeparator />

			<ProductsAvailable />

			<Button>Salvar alterações</Button>
		</UserDataContainer>
	);
}
