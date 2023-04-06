import { AuthProvider } from './contexts/auth';
import { HeaderProvider } from './contexts/header';
import { HeroProvider } from './contexts/hero';
import RoutesProvider from './routes';

function App() {
	return (
		<AuthProvider>
			<HeaderProvider>
				<HeroProvider>
					<RoutesProvider />
				</HeroProvider>
			</HeaderProvider>
		</AuthProvider>
	);
}

export default App;
