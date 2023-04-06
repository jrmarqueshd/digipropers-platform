import { ChatContainer, ChatFormContainer, ChatMessageContainer, ChatMessageItem } from './styles';

import SubmitIcon from '/icons/submit-icon.png';

export default function Chat() {
	return (
		<ChatContainer>
			<h3>Chat ao vivo</h3>

			<ChatMessageContainer>
				{Array.from({ length: 2 }, (i) => Number(i)).map((i) => (
					<ChatMessageItem key={i}>
						<img className="profile-img" src="https://github.com/jrmarqueshd.png" alt="user image" />

						<div className="chat-arrow" />

						<div className="message">
							<div className="message-title">Junior Marques</div>
							<div className="message-content">
								Boa noite, galera! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							</div>
						</div>
					</ChatMessageItem>
				))}
			</ChatMessageContainer>

			<ChatFormContainer onSubmit={(e) => e.preventDefault()}>
				<input type="text" placeholder="digite sua mensagem" />
				<button type="submit">
					<img src={SubmitIcon} alt="submit icon" />
				</button>
			</ChatFormContainer>
		</ChatContainer>
	);
}
