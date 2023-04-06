import { TableContainer } from './styles';

export default function Table({ columns, data }: { columns: any; data: any }) {
	return (
		<TableContainer
			columns={columns}
			data={data}
			enableColumnActions={false}
			enableColumnFilters={false}
			enablePagination={false}
			enableBottomToolbar={false}
			enableTopToolbar={false}
			muiTableBodyRowProps={{ hover: false }}
		/>
	);
}
