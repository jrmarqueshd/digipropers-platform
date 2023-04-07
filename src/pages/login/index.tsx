import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

import DgLogo from '/images/dg-logo.png';
import Input from '../../components/input';
import Checkbox from '../../components/checkbox';
import { LoginCard, LoginContainer } from './styles';
import Button from '../../components/button';

export default function Login() {
	const navigate = useNavigate();
	const location = useLocation();
	const auth = useAuth();

	const from = location.state?.from?.pathname || '/';

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		auth.signin();

		navigate(from, { replace: true });
	}

	return (
		<LoginContainer>
			<LoginCard>
				<img src={DgLogo} alt="Logo" />

				<Input type="email" label="Email" placeholder="email@email.com" />
				<Input type="password" label="Senha" placeholder="********" />
				<a className="forgot-password" href="/recuperar-senha">
					Esqueceu sua senha?
				</a>

				<Checkbox label="aceitar termos" errorMessage="" />

				<Button onClick={handleSubmit}>Entrar</Button>
			</LoginCard>
		</LoginContainer>
	);
}
