import { useEffect, useRef, useState } from 'react';
import { useHero } from '../../contexts/hero';
import { LiveContainer, LiveContentContainer, LiveVideoContainer } from './styles';
import Chat from '../../components/chat';
import Button from '../../components/button';

import ViewIcon from '/icons/view-icon.png';
import { useLocation } from 'react-router-dom';
import { getLiveInfos } from '../../services/youtube/requests';

export default function Live() {
	const [viewers, setViewers] = useState(0);
	const [removeDelay, setRemoveDelay] = useState(9999);

	const { setTitle, setIgnoreLogo } = useHero();
	const location = useLocation();
	const [_, base] = location.pathname.split('/');

	const themeColor = {
		'fabrica-de-win': '#A7CB22',
		'metodo-prosper': '#CE3439',
		'b3-pro': '#2B9BD7',
	};

	async function fetchLiveInfos() {
		const response = await getLiveInfos('jfKfPfyJRdk');
		const viewers = response.concurrentViewers;
		setViewers(viewers);
	}

	useEffect(() => {
		fetchLiveInfos();
		setIgnoreLogo(true);
		setTitle('Nome da live');
	}, []);

	useEffect(() => {
		const delay = 1000 * 60 * 1; // 5 minutos
		const intervalId = setInterval(fetchLiveInfos, delay);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<LiveContainer>
			<LiveVideoContainer>
				<div className="video-container">
					<iframe
						src={`https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&t${removeDelay}s`}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
				<div className="chat-container">
					<Chat />
				</div>
			</LiveVideoContainer>

			<LiveContentContainer>
				<div className="live-assets">
					<Button
						onClick={() => setRemoveDelay((prevState) => prevState + 1)}
						dynamicColor={(themeColor as any)[base as any]}
					>
						Remover delay da live
					</Button>

					<div className="watchers-amount">
						<img src={ViewIcon} alt="watchers-count" />
						{viewers} online
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
