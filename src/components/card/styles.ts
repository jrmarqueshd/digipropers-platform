import styled, { css } from 'styled-components';

export const CardContainer = styled.div<{
	background: string;
	borderColor: string;
	borderSize: string;
	onClick?: VoidFunction;
}>`
	border-radius: 4px;
	box-sizing: border-box;
	border: 1px solid rgba(255, 255, 255, 0.08);
	position: relative;

	.background {
		background-image: linear-gradient(2.21deg, rgba(18, 18, 18, 0.87) -2.89%, rgba(18, 18, 18, 0) 148.58%),
			linear-gradient(11.61deg, rgba(18, 18, 18, 0.91) -0.33%, rgba(18, 18, 18, 0) 70.16%),
			url(${({ background }) => background});
		background-size: cover;
		filter: grayscale(100%);
		transition: filter 300ms ease-in-out;
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 0;
		border-radius: 4px;
	}

	.top-right-border,
	.top-left-border,
	.bottom-right-border,
	.bottom-left-border {
		border: 1px solid ${({ borderColor }) => borderColor};
		border-radius: 4px;
		position: absolute;
		width: ${({ borderSize }) => borderSize};
		height: ${({ borderSize }) => borderSize};
		z-index: 1;
		transition: height 300ms ease-in-out, width 300ms ease-in-out;
	}

	.top-right-border {
		top: 0;
		right: 0;
		border-bottom: 0;
		border-left: 0;
	}

	.top-left-border {
		top: 0;
		left: 0;
		border-bottom: 0;
		border-right: 0;
	}

	.bottom-right-border {
		bottom: 0;
		right: 0;
		border-top: 0;
		border-left: 0;
	}

	.bottom-left-border {
		bottom: 0;
		left: 0;
		border-top: 0;
		border-right: 0;
	}

	.card-info {
		position: relative;
		height: 100%;
		z-index: 10;
	}

	&:hover {
		.background {
			filter: grayscale(0%);
		}

		.top-right-border,
		.top-left-border,
		.bottom-right-border,
		.bottom-left-border {
			opacity: 1;
			width: 100%;
			height: 100%;
		}
	}

	${({ onClick }) =>
		onClick &&
		css`
			cursor: pointer;
		`}
`;
