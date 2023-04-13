import { FaSpinner } from 'react-icons/fa';
import styled, { css } from 'styled-components';

export const PageWrapperContainer = styled.div<{ loading: boolean }>`
	${({ loading }) =>
		loading &&
		css`
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 50vh;
		`}
`;
