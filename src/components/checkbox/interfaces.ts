export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: React.ReactNode;
	id: string;
	errorMessage?: string;
	register?: any;
}
