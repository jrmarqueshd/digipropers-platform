import { useMemo } from 'react';
import { CardContainer } from './styles';

import LockIcon from '/icons/lock-icon.png';
import { CardProps } from './interfaces';

const borders = ['top-right', 'top-left', 'bottom-right', 'bottom-left'];

export default function Card({
	background,
	children,
	hiddenBorders,
	borderColor,
	borderSize,
	onClick,
	onDisabledClick,
	disabled,
	unavailable,
}: CardProps) {
	const borderToShow = useMemo(() => {
		return borders.reduce((accum: string[], atual: string) => {
			if (hiddenBorders?.includes(atual)) return accum;

			accum.push(atual);

			return accum;
		}, []);
	}, [hiddenBorders]);

	return (
		<CardContainer
			onClick={!disabled ? onClick : onDisabledClick}
			borderColor={borderColor}
			className="card"
			borderSize={borderSize}
			background={background}
			disabled={disabled}
			unavailable={unavailable}
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
