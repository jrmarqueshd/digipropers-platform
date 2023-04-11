import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	id: string;
	errorMessage?: string;
	register?: any;
}
