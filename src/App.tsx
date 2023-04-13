import WhatsappButton from './components/whatsappButton';
import { AuthProvider } from './contexts/auth';
import { HeaderProvider } from './contexts/header';
import { HeroProvider } from './contexts/hero';
import { LoadingProvider } from './contexts/loading';
import RoutesProvider from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<LoadingProvider>
			<AuthProvider>
				<HeaderProvider>
					<HeroProvider>
						<RoutesProvider />
						<ToastContainer />
						<WhatsappButton />
					</HeroProvider>
				</HeaderProvider>
			</AuthProvider>
		</LoadingProvider>
	);
}

export default App;
