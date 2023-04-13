import { Link, useLocation } from 'react-router-dom';
import { textEllipsis } from '../../commons/helpers/textEllipsis';
import { styles } from '../../constants';
import useMediaQuery from '../../hooks/useMediaQuery';
import { CourseProgressbar, CourseProgressContainer } from './styles';
import { Lesson } from '../../services/internal/interfaces';
import { useMemo } from 'react';

export default function CourseProgress({
	trainingId,
	atualLesson,
	lessons,
}: {
	trainingId: string;
	atualLesson: Lesson;
	lessons: Lesson[];
}) {
	const isTablet = useMediaQuery(`(min-width: ${styles.medias.md})`);

	const location = useLocation();

	const [_, base] = location.pathname.split('/');

	const progress = useMemo(() => {
		return (atualLesson.index / lessons.length) * 100;
	}, [atualLesson]);

	return (
		<CourseProgressContainer>
			<div className="heading">
				<CourseProgressbar value={progress} />

				<div className="progress-statistics">
					<h3>{progress}% concluído</h3>
					<span>
						{atualLesson.index} de {lessons.length} aulas
					</span>
				</div>
			</div>

			<div className="chapters-progress">
				<div className="chapter-item heading">
					<h4>Investimento</h4>
				</div>

				{lessons.map((lesson) => (
					<Link
						key={lesson.id}
						to={`/${base}/treinamento/${trainingId}/${lesson.index}`}
						className={`chapter-item ${lesson.index <= atualLesson.index ? 'completed' : ''}`}
					>
						<h5>
							{lesson.index}. {textEllipsis(lesson.title, !isTablet ? 32 : 50)}
						</h5>
					</Link>
				))}
			</div>
		</CourseProgressContainer>
	);
}
