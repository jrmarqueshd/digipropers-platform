import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import { TrainingsCardContent, TrainingsContainer } from './styles';
import { useEffect, useState } from 'react';
import { getTrainings } from '../../services/internal/requests';
import { Training } from '../../services/internal/interfaces';
import FwTrainingsBg from '/images/fw-trainings-bg.png';
import { useLoading } from '../../contexts/loading';

import ArrowLeftIcon from '/icons/icon-arrow-right.png';
import { useHeader } from '../../contexts/header';
import { toast } from 'react-toastify';

const borderColor = {
	'/fabrica-de-win/treinamento': '#A7CB22',
	'/metodo-prosper/treinamento': '#CE3439',
	'/b3-pro/treinamento': '#2B9BD7',
};

export default function Trainings() {
	const [trainings, setTrainings] = useState<Training[]>([]);
	const { setLoading } = useLoading();

	const navigate = useNavigate();
	const location = useLocation();
	const { setBreadcrumbs } = useHeader();

	useEffect(() => {
		async function fetch() {
			setLoading(true);
			const response = await getTrainings();

			if (!response?.length) {
				toast.info('Nenhum módulo do treinamento disponível');

				return navigate(-1);
			}

			setTrainings(response);
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
		<TrainingsContainer>
			{trainings?.map((training, index) => (
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

						<p>{training.description}</p>
					</TrainingsCardContent>
				</Card>
			))}
		</TrainingsContainer>
	);
}
