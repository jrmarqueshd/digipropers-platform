import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CourseAssets from '../../../components/courseAssets';
import CourseProgress from '../../../components/courseProgress';
import { useHeader } from '../../../contexts/header';
import { TrainingContainer, TrainingContentContainer } from './styles';

import ArrowLeftIcon from '/icons/icon-arrow-right.png';

export default function Training() {
	const { setBreadcrumbs } = useHeader();

	const location = useLocation();

	const [_, base] = location.pathname.split('/');

	useEffect(() => {
		setBreadcrumbs([
			{
				icon: ArrowLeftIcon,
				label: 'treinamentos',
				goTo: `${base}/treinamentos`,
			},
			{
				icon: ArrowLeftIcon,
				label: 'Lorem ipsum dolor sit amet',
			},
		]);
	}, []);

	return (
		<TrainingContainer>
			<div className="video-container">
				<iframe
					src="https://www.youtube.com/embed/msizPweg3kE"
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope;"
					allowFullScreen
				></iframe>
			</div>

			<TrainingContentContainer>
				<div className="description">
					<h1>Apresentação</h1>

					<h2>uma breve descrição sobre o treinamento</h2>

					<p>
						{`Está procurando uma forma de aprender a operar na Bolsa de Valores e aproveitar o melhor que o curto prazo pode oferecer? Se a resposta for sim, certamente você está naquele momento de pesquisar o melhor curso trader.\n
              Ao longo desse conteúdo, você vai entender alguns detalhes para escolher o melhor curso trader para você. Vale ressaltar que isso é fundamental, afinal, o número de ofertas disponíveis, principalmente na internet, aumentou muito nos últimos anos.\n 
              E, partindo do pressuposto que você não quer cair em falsas promessas e realmente deseja aprender a fazer Day Trade do jeito certo, preparamos algumas dicas para te ajudar. Aqui você vai entender:`}
					</p>
				</div>
				<div className="progress">
					<CourseProgress />
				</div>
			</TrainingContentContainer>

			<CourseAssets />
		</TrainingContainer>
	);
}
