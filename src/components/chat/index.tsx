import { useEffect, useRef, useState } from 'react';
import { BsPinAngleFill } from 'react-icons/bs';
import manageStorage from '../../commons/helpers/manageStorage';
import socket from '../../services/chat';
import { ChatContainer, ChatFormContainer, ChatMessageContainer, ChatMessageItem } from './styles';
import { animateScroll } from 'react-scroll';

import SubmitIcon from '/icons/submit-icon.png';
import { User } from '../../services/internal/interfaces';
import { Message } from '../../services/chat/interfaces';

import messagesMock from './mock.json';
import jsonParse from '../../commons/helpers/jsonParse';

import MalePlaceholder from '/images/male-placeholder.jpeg';

export default function Chat({ liveId, color }: { liveId: string; color: string }) {
	const socketClient = socket(manageStorage().get('STORAGE_USER_KEY'), liveId);

	const [isConnected, setIsConnected] = useState(socketClient.connected);
	const [fixedMessage, setFixedMessages] = useState<Message>();
	const [messages, setMessages] = useState<Message[]>(jsonParse(messagesMock));

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		function onConnect() {
			console.log('CONECTADO', socketClient.id);
			setIsConnected(true);
		}

		function onDisconnect() {
			console.log('DESCONECTADO');
			setIsConnected(false);
		}

		function onFixedMessage(message: Message) {
			console.log(message);
			setFixedMessages(message);
		}

		function onMessage(message: Message[]) {
			setMessages(message);
		}

		socketClient.on('connect', onConnect);
		socketClient.on('disconnect', onDisconnect);
		socketClient.on('chat.message', (data) => onMessage(data));
		socketClient.on('fixed.message', (data) => onFixedMessage(data));

		return () => {
			socketClient.off('connect', onConnect);
			socketClient.off('disconnect', onDisconnect);
		};
	}, []);

	useEffect(() => {
		animateScroll.scrollMore(999999, {
			containerId: 'chat-messages',
			duration: 500,
			delay: 1000,
		});
	}, [messages]);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		const { id, name, avatar } = manageStorage().get('STORAGE_USER_KEY') as User;
		const message = inputRef.current?.value;

		const author = {
			id,
			name,
			avatar,
			status: 'online',
			blocked: false,
		};

		socketClient.emit('sendMessage', {
			author,
			trainingId: liveId,
			message,
		});
	}

	return (
		<ChatContainer>
			<h3>Chat ao vivo</h3>

			<ChatMessageContainer id="chat-messages">
				{fixedMessage && (
					<ChatMessageItem className="fixed">
						<img className="profile-img" src={fixedMessage.author.avatar || MalePlaceholder} alt="user image" />
						<div className="message">
							<div className="message-content">{fixedMessage.message}</div>

							<div className="pin">
								<BsPinAngleFill color={color} />
							</div>
						</div>
					</ChatMessageItem>
				)}

				{messages?.map(({ author, message }, index) => (
					<ChatMessageItem key={index}>
						<img className="profile-img" src={author.avatar} alt="user image" />

						<div className="chat-arrow" />

						<div className="message">
							<div className="message-title">{author.name}</div>
							<div className="message-content">{message}</div>
						</div>
					</ChatMessageItem>
				))}
			</ChatMessageContainer>

			<ChatFormContainer onSubmit={handleSubmit}>
				<input ref={inputRef} type="text" placeholder="digite sua mensagem" disabled={!isConnected} />
				<button type="submit" disabled={!isConnected || !inputRef.current?.value}>
					<img src={SubmitIcon} alt="submit icon" />
				</button>
			</ChatFormContainer>
		</ChatContainer>
	);
}
