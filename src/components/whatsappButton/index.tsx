import { FaWhatsapp } from 'react-icons/fa';
import { WhatsappButtonContainer } from './styles';
import { links } from '../../constants';

export default function WhatsappButton() {
	return (
		<WhatsappButtonContainer href={links.WHATSAPP_CHAT} target="_blank">
			<FaWhatsapp size={30} color="#ffffff" />
		</WhatsappButtonContainer>
	);
}
