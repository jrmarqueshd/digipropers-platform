import { LoadingProps } from './interfaces';
import { LoadingContainer } from './styles';

export default function Loading(props: LoadingProps) {
	return (
		<LoadingContainer className="loading" {...props}>
			<div className="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</LoadingContainer>
	);
}
