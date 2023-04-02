import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import { Container } from "./styles";

export function Layout({ hiddenHeader }: { hiddenHeader?: boolean }) {
  return (
    <Container>
      {!hiddenHeader && (
        <Header />
      )}

      <Outlet />
    </Container>
  );
}