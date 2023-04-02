import { TrainingContainer } from './styles';

export default function Training() {
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
		</TrainingContainer>
	);
}
