import { useMemo } from 'react';
import { CardContainer } from './styles';

import LockIcon from '/icons/lock-icon.png';

const borders = ['top-right', 'top-left', 'bottom-right', 'bottom-left'];

export default function Card({
	background,
	children,
	hiddenBorders,
	borderColor,
	borderSize,
	onClick,
	disabled,
}: {
	background: string;
	children: React.ReactNode;
	hiddenBorders?: typeof borders;
	borderColor: string;
	borderSize: string;
	onClick?: VoidFunction;
	disabled?: boolean;
}) {
	const borderToShow = useMemo(() => {
		return borders.reduce((accum: string[], atual: string) => {
			if (hiddenBorders?.includes(atual)) return accum;

			accum.push(atual);

			return accum;
		}, []);
	}, [hiddenBorders]);

	return (
		<CardContainer
			onClick={!disabled ? onClick : undefined}
			borderColor={borderColor}
			className="card"
			borderSize={borderSize}
			background={background}
			disabled={disabled}
		>
			<div className="background" />

			{disabled && <img className="locked-icon" src={LockIcon} alt="locked icon" />}

			{borderToShow.map((border) => (
				<div key={border} className={`${border}-border`} />
			))}

			<div className="card-info">{children}</div>
		</CardContainer>
	);
}
