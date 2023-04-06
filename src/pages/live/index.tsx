import { useEffect } from 'react';
import { useHero } from '../../contexts/hero';
import { LiveContainer, LiveContentContainer, LiveVideoContainer } from './styles';
import Chat from '../../components/chat';
import Button from '../../components/button';

import ViewIcon from '/icons/view-icon.png';

export default function Live() {
	const { setTitle, setIgnoreLogo } = useHero();

	useEffect(() => {
		setIgnoreLogo(true);
		setTitle('Nome da live');
	}, []);

	return (
		<LiveContainer>
			<LiveVideoContainer>
				<div className="video-container">
					<iframe
						src="https://www.youtube.com/embed/msizPweg3kE"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope;"
						allowFullScreen
					></iframe>
				</div>
				<div className="chat-container">
					<Chat />
				</div>
			</LiveVideoContainer>

			<LiveContentContainer>
				<div className="live-assets">
					<Button variant="secondary">Remover delay da live</Button>

					<div className="watchers-amount">
						<img src={ViewIcon} alt="watchers-count" />
						2.321 online
					</div>
				</div>

				<div className="description">
					<h2>uma breve descrição sobre a live</h2>

					<p>
						{`Está procurando uma forma de aprender a operar na Bolsa de Valores e aproveitar o melhor que o curto prazo pode oferecer? Se a resposta for sim, certamente você está naquele momento de pesquisar o melhor curso trader.\n
              Ao longo desse conteúdo, você vai entender alguns detalhes para escolher o melhor curso trader para você. Vale ressaltar que isso é fundamental, afinal, o número de ofertas disponíveis, principalmente na internet, aumentou muito nos últimos anos.\n 
              E, partindo do pressuposto que você não quer cair em falsas promessas e realmente deseja aprender a fazer Day Trade do jeito certo, preparamos algumas dicas para te ajudar. Aqui você vai entender:`}
					</p>
				</div>
			</LiveContentContainer>
		</LiveContainer>
	);
}
