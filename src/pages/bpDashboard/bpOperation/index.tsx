import { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import Button from '../../../components/button';
import Table from '../../../components/table';
import { Operation } from './interfaces';
import { BpOperationContainer, BpOperationResume, BpOperationResumeItem } from './styles';

const data: Operation[] = [
	{
		hour: '00:00',
		contract: 'digitover-7',
		input: 24040.45,
		output: 27040.25,
		value: 0.35,
		result: -0.1,
	},
	{
		hour: '00:01',
		contract: 'digitover-7',
		input: 24040.45,
		output: 27040.25,
		value: 0.35,
		result: 0.2,
	},
	{
		hour: '00:02',
		contract: 'digitover-7',
		input: 24040.45,
		output: 27040.25,
		value: 0.35,
		result: 0.3,
	},
];

export default function BpOperation() {
	//should be memoized or stable
	const columns = useMemo<MRT_ColumnDef<Operation>[]>(
		() => [
			{
				accessorKey: 'hour',
				header: 'hora',
			},
			{
				accessorKey: 'contract',
				header: 'contrato',
			},
			{
				accessorKey: 'input',
				header: 'entrada',
			},
			{
				accessorKey: 'output',
				header: 'saída',
			},
			{
				accessorKey: 'value',
				header: 'valor',
			},
			{
				accessorKey: 'result',
				header: 'resultado',
			},
		],
		[],
	);

	return (
		<BpOperationContainer>
			<Button>Iniciar bot khalifa</Button>

			<BpOperationResume>
				<BpOperationResumeItem>
					<span>Saldo</span>
					<strong>R$ 500</strong>
				</BpOperationResumeItem>
				<BpOperationResumeItem>
					<span>Lucro/Prejuízo</span>
					<strong className={true ? 'profit' : 'loss'}>R$ 374.24</strong>
				</BpOperationResumeItem>
				<BpOperationResumeItem>
					<span>Operações</span>
					<strong>100 de 50</strong>
				</BpOperationResumeItem>
				<BpOperationResumeItem>
					<span>Status</span>
					<strong>Analisando</strong>
				</BpOperationResumeItem>
			</BpOperationResume>

			<Table columns={columns} data={data} />
		</BpOperationContainer>
	);
}
