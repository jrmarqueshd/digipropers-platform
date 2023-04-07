import { useRef, useState } from 'react';
import { UserProfileContainer } from './styles';

import thumbPlaceholder from '/images/male-placeholder.jpeg';

export default function UserProfile() {
	const [file, setFile] = useState<string>();

	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = (e: any) => {
		setFile(URL.createObjectURL(e.target.files[0]));
	};

	const handleInputFocus = () => {
		inputRef.current?.click();
	};

	return (
		<UserProfileContainer onClick={handleInputFocus}>
			<img src={file || thumbPlaceholder} />
			<input ref={inputRef} type="file" onChange={handleChange} />

			<span>Clique na foto para alterar</span>
		</UserProfileContainer>
	);
}
