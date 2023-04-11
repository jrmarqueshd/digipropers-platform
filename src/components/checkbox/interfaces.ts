export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	id: string;
	errorMessage?: string;
	register?: any;
}
