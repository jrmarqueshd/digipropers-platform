import { FaWhatsapp } from 'react-icons/fa';
import { WhatsappButtonContainer } from './styles';

export default function WhatsappButton() {
	return (
		<WhatsappButtonContainer href="https://wa.me/5511977923130" target="_blank">
			<FaWhatsapp size={30} color="#ffffff" />
		</WhatsappButtonContainer>
	);
}
