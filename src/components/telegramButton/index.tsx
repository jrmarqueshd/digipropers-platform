import { FaTelegramPlane } from 'react-icons/fa';
import Button from '../button';
import { TelegramButtonLabel } from './styles';
import { useMediaQuery } from '@mui/material';
import { styles } from '../../constants';

export default function TelegramButton() {
	const isSmallTablet = useMediaQuery(`(min-width: ${styles.medias.sm})`);

	return (
		<Button size={isSmallTablet ? 'small' : 'smaller'} secondary>
			<TelegramButtonLabel>telegram</TelegramButtonLabel> <FaTelegramPlane color="#fff" />
		</Button>
	);
}
