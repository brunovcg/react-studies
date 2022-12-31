import Table from "./Table/Table"
import data from "./mock.json"
import Icon from "../../models/components/icon"

export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column

    return <input value={filterValue || ""} onChange={e => setFilter(e.target.value)} />
}

function TableExemple() {

    const columns = [
        { Header: "Id", Footer: "Id", accessor: "id", width: 40, sticky: true },
        { Header: "First Name", Footer: "First Name", accessor: "first_name", Filter: ColumnFilter, width: 200, sticky: true },
        { Header: "Last Name", Footer: "Last Name", accessor: "last_name", Filter: ColumnFilter },
        { Header: "Date of Birth", Footer: "Date of Birth", accessor: "date_of_birth", Filter: ColumnFilter },
        { Header: "Country", Footer: "Country", accessor: "country", Cell: ({ value }) => value + " (formated)", Filter: ColumnFilter },
        { Header: "Phone", Footer: "Phone", accessor: "phone", Filter: ColumnFilter },
        { Header: "Options", Footer: "Options", Cell: (value) => <Icon onClick={() => { console.log(value); alert('Look console') }} icon="settings" />, width:80 }
    ]

    const groupedColumns = [
        { Header: "Id", Footer: "Id", accessor: "id" },
        {
            Header: "Name", Footer: "Name", columns: [
                { Header: "First Name", Footer: "First Name", accessor: "first_name" },
                { Header: "Last Name", Footer: "Last Name", accessor: "last_name" }]
        },
        {
            Header: "Info", Footer: "Info", columns: [
                { Header: "Date of Birth", Footer: "Date of Birth", accessor: "date_of_birth" },
                { Header: "Country", Footer: "Country", accessor: "country" },
                { Header: "Phone", Footer: "Phone", accessor: "phone" }

            ]
        },
    ]

    //! it is hardcoded but you can use it in a function
    const newColumnOrder = ['id', 'fist_name', 'last_name', 'phone', 'country', 'date_of_birth']


    return <Table columns={columns} data={data} columnOrder={newColumnOrder} />
}

export default TableExemple