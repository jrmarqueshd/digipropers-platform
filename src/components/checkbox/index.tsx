import { CheckboxProps } from './interfaces';
import { CheckboxContainer } from './styles';

export default function Checkbox({ label, errorMessage, ...props }: CheckboxProps) {
	return (
		<CheckboxContainer errorMessage={!!errorMessage} disabled={props.disabled}>
			<label>
				<input {...props} type="checkbox" />
				<span>{label}</span>
			</label>
			{errorMessage && <div className="error-message">{errorMessage}</div>}
		</CheckboxContainer>
	);
}
