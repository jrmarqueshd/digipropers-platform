import { useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import { TrainingsCardContent, TrainingsContainer } from './styles';

export default function Trainings() {
	const navigate = useNavigate();

	return (
		<TrainingsContainer>
			{Array.from({ length: 4 }, (i) => Number(i)).map((i) => (
				<Card
					onClick={() => navigate('/treinamentos/d516as6d1sa6das16d')}
					borderSize="113px"
					borderColor="#CE3439"
					background="https://i0.wp.com/startup-studio.jp/wp-content/uploads/2021/01/phil-hearing-nfs0n3_d2xy-unsplash.jpg?fit=250%2C300&ssl=1"
					hiddenBorders={['top-left', 'bottom-right']}
				>
					<TrainingsCardContent>
						<h2>Lorem ipsum</h2>

						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
					</TrainingsCardContent>
				</Card>
			))}
		</TrainingsContainer>
	);
}
