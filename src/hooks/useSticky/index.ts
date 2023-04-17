import { useEffect, useState, useRef } from 'react';
import { StickyProps, StickyReturn } from './interfaces';

function useSticky({ offsetTop = 0 }: StickyProps): StickyReturn {
	const [isSticky, setIsSticky] = useState(false);

	const targetElement = useRef<HTMLElement>(null);

	useEffect(() => {
		let hasBeenSticky = false;

		window.onscroll = () => {
			const rect = targetElement.current?.getBoundingClientRect();

			if (rect && rect.top < offsetTop && !hasBeenSticky) {
				hasBeenSticky = true;
				return setIsSticky(true);
			}

			if (rect && rect.top >= offsetTop && hasBeenSticky) {
				hasBeenSticky = false;
				return setIsSticky(false);
			}
		};

		return () => {
			window.onscroll = () => {};
		};
	}, [offsetTop]);

	return { isSticky, targetElement };
}

export default useSticky;
