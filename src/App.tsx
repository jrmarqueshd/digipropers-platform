import { AuthProvider } from './contexts/auth';
import { HeaderProvider } from './contexts/header';
import RoutesProvider from './routes';

function App() {
	return (
		<AuthProvider>
			<HeaderProvider>
				<RoutesProvider />
			</HeaderProvider>
		</AuthProvider>
	);
}

export default App;
