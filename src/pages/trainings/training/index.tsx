import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { scroller } from 'react-scroll';
import CourseAssets from '../../../components/courseAssets';
import CourseProgress from '../../../components/courseProgress';
import { useHeader } from '../../../contexts/header';
import { TrainingContainer, TrainingContentContainer } from './styles';

import ArrowLeftIcon from '/icons/icon-arrow-right.png';
import { getTrainingLessons } from '../../../services/internal/requests';
import { useLoading } from '../../../contexts/loading';
import { Lesson } from '../../../services/internal/interfaces';
import PageWrapper from '../../../layouts/pageWrapper';

export default function Training() {
	const [lessons, setLessons] = useState<Lesson[]>([]);
	const [lesson, setLesson] = useState<Lesson>();
	const [loading, setLoading] = useState(true);

	const { setBreadcrumbs } = useHeader();
	const location = useLocation();
	const navigate = useNavigate();
	const { training_id = '', lesson_index = 1 } = useParams();

	const [_, base] = location.pathname.split('/');

	useEffect(() => {
		scroller.scrollTo('main-wrapper', {
			duration: 200,
			delay: 50,
			smooth: true,
			offset: -200,
		});

		async function fetch() {
			setLoading(true);

			const response = await getTrainingLessons();

			if (!response) return navigate(`/${base}/treinamento`);

			setLessons(response.sort((a, b) => (a.indice || a.index) - (b.indice || b.index)));
			setLesson(response.find((data) => (data.indice || data.index) === Number(lesson_index)));
			setLoading(false);
		}

		fetch();
	}, [training_id, lesson_index]);

	useEffect(() => {
		setBreadcrumbs([
			{
				icon: ArrowLeftIcon,
				label: 'Treinamento',
				goTo: `${base}/treinamento`,
			},
			{
				icon: ArrowLeftIcon,
				label: lesson?.title || 'Carregando...',
			},
		]);
	}, [lesson]);

	return (
		<PageWrapper loading={loading}>
			<TrainingContainer id="main-wrapper">
				<div className="video-container">
					<iframe
						src={`https://www.youtube.com/embed/${lesson?.url}`}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>

				<TrainingContentContainer>
					<div className="description">
						<h1>{lesson?.title}</h1>

						<h2>uma breve descrição sobre o treinamento</h2>

						<p>{lesson?.description}</p>
					</div>
					{lesson && (
						<div className="progress">
							<CourseProgress atualLesson={lesson} trainingId={training_id} lessons={lessons} />
						</div>
					)}
				</TrainingContentContainer>

				{/* <CourseAssets /> */}
			</TrainingContainer>
		</PageWrapper>
	);
}
