import { useEffect, useState } from 'react';

import { useHero } from '../../contexts/hero';
import { LiveContainer, LiveContentContainer, LiveVideoContainer } from './styles';
import Chat from '../../components/chat';
import Button from '../../components/button';

import ViewIcon from '/icons/view-icon.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { getYouTubeLiveInfos } from '../../services/youtube/requests';
import { Live as LiveType } from '../../services/internal/interfaces';
import { getLive } from '../../services/internal/requests';
import { useLoading } from '../../contexts/loading';

export default function Live() {
	const [viewers, setViewers] = useState(0);
	const [live, setLive] = useState<LiveType>();
	const [removeDelay, setRemoveDelay] = useState(9999);

	const { loading, setLoading } = useLoading();
	const { setTitle, setIgnoreLogo } = useHero();
	const location = useLocation();
	const navigate = useNavigate();
	const [_, base] = location.pathname.split('/');

	const themeColor = {
		'fabrica-de-win': '#A7CB22',
		'metodo-prosper': '#CE3439',
		'b3-pro': '#2B9BD7',
	};

	async function fetchLiveInfos() {
		const response = await getYouTubeLiveInfos('jfKfPfyJRdk');
		const viewers = response.concurrentViewers;
		setViewers(viewers);
	}

	useEffect(() => {
		async function fetch() {
			setIgnoreLogo(true);
			setLoading(true);

			const response = await getLive();

			setLoading(false);

			if (!response) return navigate(-1);

			setLive(response);
			setTitle(response.title);
			fetchLiveInfos();
		}

		fetch();
	}, []);

	useEffect(() => {
		const delay = 1000 * 60 * 1; // 5 minutos
		const intervalId = setInterval(fetchLiveInfos, delay);
		return () => clearInterval(intervalId);
	}, []);

	if (!live) return null;

	return (
		<LiveContainer>
			<LiveVideoContainer>
				<div className="video-container">
					<iframe
						src={`https://www.youtube.com/embed/${live.hash}?autoplay=1&controls=0&t${removeDelay}s&rel=0`}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
				<div className="chat-container">
					<Chat liveId={live.id} color={(themeColor as any)[base as any]} />
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

					<p>{live.description}</p>
				</div>
			</LiveContentContainer>
		</LiveContainer>
	);
}
