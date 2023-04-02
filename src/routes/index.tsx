import { useMemo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from '../layouts/default';
import pages from './pages';
import { RouteProtector } from './ProtectorRoutes';

export default function RoutesProvider() {
	const location = useLocation();

	const atualAuthPageMemo = useMemo(() => {
		return pages.auth.find((page) => page.path === location.pathname);
	}, [location.pathname]);

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

			<Route
				element={
					<Layout
						hiddenHeader={atualAuthPageMemo?.hiddenHeader}
						hiddenHeaderLogo={atualAuthPageMemo?.hiddenHeaderLogo}
						logo={atualAuthPageMemo?.logo}
					/>
				}
			>
				{pages.auth.map(({ element: Element, layout: SubLayout, path, logo }) =>
					SubLayout ? (
						<Route key={path} element={<SubLayout logo={logo} />}>
							<Route
								path={path}
								element={
									<RouteProtector protectType="auth">
										<Element />
									</RouteProtector>
								}
							/>
						</Route>
					) : (
						<Route
							key={path}
							path={path}
							element={
								<RouteProtector protectType="auth">
									<Element />
								</RouteProtector>
							}
						/>
					),
				)}
			</Route>
		</Routes>
	);
}
