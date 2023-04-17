import { useAuth } from '../../contexts/auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import DgLogo from '/images/dg-logo.png';
import Input from '../../components/input';
import Checkbox from '../../components/checkbox';

import { LoginCard, LoginContainer } from './styles';
import Button from '../../components/button';
import { useState } from 'react';

const schema = z.object({
	email: z.string().nonempty({ message: 'Campo obrigatório' }).email({ message: 'Informe um e-mail válido.' }),
	password: z.string().nonempty({ message: 'Campo obrigatório' }),
});

type LoginSchemaData = z.infer<typeof schema>;

export default function Login() {
	const [isTermAccept, setTermAccept] = useState(false);
	const [loading, setLoading] = useState(false);
	const auth = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchemaData>({
		resolver: zodResolver(schema),
	});

	const loginUser = async (data: LoginSchemaData) => {
		setLoading(true);
		try {
			await auth.signin(data);
		} finally {
			setLoading(false);
		}
	};

	return (
		<LoginContainer>
			<LoginCard onSubmit={handleSubmit(loginUser)}>
				<img src={DgLogo} alt="Logo" />

				<Input
					type="email"
					label="Email"
					id="email"
					placeholder="email@email.com"
					errorMessage={errors?.email?.message}
					register={register}
				/>
				<Input
					type="password"
					id="password"
					label="Senha"
					placeholder="********"
					errorMessage={errors?.password?.message}
					register={register}
				/>
				{/* <a className="forgot-password" href="/recuperar-senha">
					Esqueceu sua senha?
				</a> */}

				<Checkbox
					onChange={({ currentTarget }) => setTermAccept(currentTarget.checked)}
					id="term"
					label="aceitar termos *"
				/>

				<Button disabled={!isTermAccept} type="submit" loading={loading}>
					Entrar
				</Button>
			</LoginCard>
		</LoginContainer>
	);
}
