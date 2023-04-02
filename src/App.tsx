import { AuthProvider } from './contexts/auth'
import RoutesProvider from './routes'

function App() {
  return (
    <AuthProvider>
      <RoutesProvider />
    </AuthProvider>
  )
}

export default App
