import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

export function LoginPage() {
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
		<div>
			<p>You must log in to view the page at {from}</p>

			<form onSubmit={handleSubmit}>
				<label>
					Username: <input name="username" type="text" />
				</label>{' '}
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
