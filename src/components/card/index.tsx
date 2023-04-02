import { useMemo } from 'react';
import { CardContainer } from './styles';

const borders = ['top-right', 'top-left', 'bottom-right', 'bottom-left'];

export default function Card({
	background,
	children,
	hiddenBorders,
	borderColor,
	borderSize,
}: {
	background: string;
	children: React.ReactNode;
	hiddenBorders?: typeof borders;
	borderColor: string;
	borderSize: string;
}) {
	const borderToShow = useMemo(() => {
		return borders.reduce((accum: string[], atual: string) => {
			if (hiddenBorders?.includes(atual)) return accum;

			accum.push(atual);

			return accum;
		}, []);
	}, [hiddenBorders]);

	return (
		<CardContainer borderColor={borderColor} className="card" borderSize={borderSize} background={background}>
			<div className="background" />

			{borderToShow.map((border) => (
				<div key={border} className={`${border}-border`} />
			))}
			<div className="card-info">{children}</div>
		</CardContainer>
	);
}
