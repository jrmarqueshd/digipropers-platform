import { Link } from 'react-router-dom';
import { textEllipsis } from '../../commons/helpers/textEllipsis';
import { styles } from '../../constants';
import useMediaQuery from '../../hooks/useMediaQuery';
import { CourseProgressbar, CourseProgressContainer } from './styles';

export default function CourseProgress() {
	const isTablet = useMediaQuery(`(min-width: ${styles.medias.md})`);

	return (
		<CourseProgressContainer>
			<div className="heading">
				<CourseProgressbar value={20} />

				<div className="progress-statistics">
					<h3>20% concluído</h3>
					<span>1 de 5 aulas</span>
				</div>
			</div>

			<div className="chapters-progress">
				<div className="chapter-item heading">
					<h4>Investimento</h4>
				</div>

				{Array.from({ length: 5 }, (i) => Number(i)).map((_, index) => (
					<Link
						to="/treinamentos/dkljaskdlasd/2"
						className={`chapter-item ${index === 0 || index === 1 ? 'completed' : ''}`}
					>
						<h5>
							{index + 1}. {textEllipsis('Aula', !isTablet ? 32 : 50)}
						</h5>
					</Link>
				))}
			</div>
		</CourseProgressContainer>
	);
}
