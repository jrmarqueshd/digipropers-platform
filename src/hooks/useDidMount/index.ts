import { useEffect, useRef } from 'react';

export default function useDidMount(cb: () => void | {}, deps: any[]) {
	const isMountedRef = useRef(false);

	useEffect(() => {
		if (isMountedRef.current) {
			cb();
		}

		isMountedRef.current = true;
	}, [...deps]);
}
