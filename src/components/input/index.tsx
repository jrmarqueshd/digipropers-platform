import { InputProps } from './interfaces';
import { InputContainer } from './styles';

export default function Input({ label, errorMessage, register = () => {}, ...props }: InputProps) {
	return (
		<InputContainer errorMessage={!!errorMessage} disabled={props.disabled}>
			<label htmlFor={props.id}>{label}</label>
			<input {...register(props.id)} {...props} />
			{errorMessage && <div className="error-message">{errorMessage}</div>}
		</InputContainer>
	);
}
