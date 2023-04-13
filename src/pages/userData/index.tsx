import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Button from '../../components/button';
import Input from '../../components/input';
import ProductsAvailable from '../../components/productsAvailable';
import UserProfile from '../../components/userProfile';
import { links } from '../../constants';
import { UserDataContainer, UserDataSeparator } from './styles';
import manageStorage from '../../commons/helpers/manageStorage';
import { User } from '../../services/internal/interfaces';
import { updateUser } from '../../services/internal/requests';
import { useAuth } from '../../contexts/auth';

const schema = z
	.object({
		name: z.string().nonempty({ message: 'Campo obrigatório' }),
		password: z.string().min(6, { message: 'Informe uma senha de no mínimo 6 caracteres.' }),
		confirm_password: z.string().min(6, { message: 'Informe uma senha de no mínimo 6 caracteres.' }),
	})
	.superRefine(({ confirm_password, password }, ctx) => {
		if (confirm_password !== password) {
			ctx.addIssue({
				code: 'custom',
				message: 'As senhas precisam ser iguais.',
				path: ['password'],
			});
			ctx.addIssue({
				code: 'custom',
				message: 'As senhas precisam ser iguais.',
				path: ['confirm_password'],
			});
		}
	});

type UserSchemaData = z.infer<typeof schema>;

export default function UserData() {
	const [userData] = useState<User>(manageStorage().get('STORAGE_USER_KEY'));
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserSchemaData>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: userData.name,
			password: 'ocultPassword',
			confirm_password: 'ocultPassword',
		},
	});
	const { fetchUserData } = useAuth();

	const handleUpdateData = async (data: UserSchemaData) => {
		setLoading(true);
		const response = await updateUser(data);

		if (response) {
			await fetchUserData();
		}

		setLoading(false);
	};

	return (
		<UserDataContainer onSubmit={handleSubmit(handleUpdateData)}>
			<UserProfile />

			<Input id="email" type="email" label="Email" disabled value={userData.email} />
			<Input register={register} id="name" type="text" label="Nome" errorMessage={errors.name?.message} />
			<Input register={register} id="password" type="password" label="Senha" errorMessage={errors.password?.message} />
			<Input
				register={register}
				id="confirm_password"
				type="password"
				label="Confirmar nova senha"
				errorMessage={errors.confirm_password?.message}
			/>

			<UserDataSeparator />

			<Input id="balance" type="text" label="Seu saldo" disabled value="R$ 5000" />
			<Button as="a" href={links.WHATSAPP_DEPOSIT_LINK} target="_blank" secondary>
				Adicionar saldo
			</Button>

			<UserDataSeparator />

			<ProductsAvailable />

			<Button type="submit" loading={loading}>
				Salvar alterações
			</Button>
		</UserDataContainer>
	);
}
