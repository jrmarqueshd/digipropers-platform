import styled, { css, keyframes } from 'styled-components';
import { LoadingProps } from './interfaces';

const ldsRing = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div<LoadingProps>`
	${({ centerMode }) =>
		centerMode &&
		css`
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			background-image: url('/images/background.jpg');
			z-index: 1000;
			display: flex;
			align-items: center;
			justify-content: center;
		`}

	.lds-ring {
		display: inline-block;
		position: relative;
		width: calc(${({ size }) => size} + 16px);
		height: calc(${({ size }) => size} + 16px);

		div {
			box-sizing: border-box;
			display: block;
			position: absolute;
			width: ${({ size }) => size};
			height: ${({ size }) => size};
			margin: 8px;
			border: ${({ stroke }) => stroke || '8px'} solid ${({ color }) => color || '#fff'};
			border-radius: 50%;
			animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
			border-color: ${({ color }) => color || '#fff'} transparent transparent transparent;
		}

		div:nth-child(1) {
			animation-delay: -0.45s;
		}

		div:nth-child(2) {
			animation-delay: -0.3s;
		}

		div:nth-child(3) {
			animation-delay: -0.15s;
		}
	}
`;
