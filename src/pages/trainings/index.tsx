import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import { TrainingsCardContent, TrainingsContainer } from './styles';
import { useEffect, useState } from 'react';
import { getTrainingModule } from '../../services/internal/requests';
import { TrainingModule } from '../../services/internal/interfaces';
import FwTrainingsBg from '/images/fw-trainings-bg.png';

import ArrowLeftIcon from '/icons/icon-arrow-right.png';
import { useHeader } from '../../contexts/header';
import { toast } from 'react-toastify';
import PageWrapper from '../../layouts/pageWrapper';

const borderColor = {
	'/fabrica-de-win/treinamento': '#A7CB22',
	'/metodo-prosper/treinamento': '#CE3439',
	'/b3-pro/treinamento': '#2B9BD7',
};

export default function Trainings() {
	const [trainingsModules, setTrainingsModules] = useState<TrainingModule[]>([]);
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();
	const location = useLocation();
	const { setBreadcrumbs } = useHeader();

	const [_, base] = location.pathname.split('/');

	useEffect(() => {
		async function fetch() {
			setLoading(true);
			const response = await getTrainingModule();

			if (!response?.length) {
				toast.info('Nenhum módulo do treinamento disponível');

				return navigate(`/${base}`);
			}

			setTrainingsModules(response);
			setLoading(false);
		}

		fetch();
	}, []);

	useEffect(() => {
		setBreadcrumbs([
			{
				icon: ArrowLeftIcon,
				label: 'Treinamento',
			},
		]);
	}, []);

	return (
		<PageWrapper loading={loading}>
			<TrainingsContainer>
				{trainingsModules?.map((training, index) => (
					<Card
						key={index}
						onClick={() => navigate(`${location.pathname}/${training.id}/1`)}
						borderSize="113px"
						borderColor={(borderColor as any)[location.pathname]}
						background={FwTrainingsBg}
						hiddenBorders={['top-left', 'bottom-right']}
					>
						<TrainingsCardContent>
							<h2>{training.name}</h2>

							{/* <p>{training?.description}</p> */}
						</TrainingsCardContent>
					</Card>
				))}
			</TrainingsContainer>
		</PageWrapper>
	);
}
