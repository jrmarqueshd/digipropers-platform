import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layouts/default';
import pages from './pages';
import { RouteProtector } from './ProtectorRoutes';

export default function RoutesProvider() {
	return (
		<Routes>
			<Route element={<Layout hiddenHeader />}>
				{pages.unAuth.map(({ element: Element, path }) => (
					<Route
						key={path}
						path={path}
						element={
							<RouteProtector protectType="unAuth">
								<Element />
							</RouteProtector>
						}
					/>
				))}
			</Route>

			<Route element={<Layout />}>
				{pages.auth.map(({ element: Element, path }) => (
					<Route
						key={path}
						path={path}
						element={
							<RouteProtector protectType="auth">
								<Element />
							</RouteProtector>
						}
					/>
				))}
			</Route>
		</Routes>
	);
}
