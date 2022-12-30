import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect, useColumnOrder } from "react-table"
import { useMemo, forwardRef, useRef, useEffect } from "react"
import StyledTable from "../Table/Table.styled"
import Icon from "../../../models/components/icon"
// import { ColumnFilter } from "../TableExemple"

const Checkbox = forwardRef(({ indeterminate, ...rest }, ref) => {

    const defaultRef = useRef()
    const resolvedRef = ref || defaultRef

    useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return <input type="checkbox" ref={resolvedRef} {...rest} />
})


function Table({
    columns,
    data,
    showFooter = false,
    sortable = false,
    showGlobalFilter = true,
    showColumnFilter = true,
    paginate = true,
    selectableRows = true,
    columnOrder,
    noData = "There is no data"
}) {

    const memoizedColumns = useMemo(() => columns, [columns])
    const memoizedData = useMemo(() => data, [data])


    // ! DEFAULT column to apply default configs to columns
    // const defaultColumn = useMemo(() => {
    //     return {
    //         Filter: ColumnFilter
    //     }
    // }, [])


    const setHeaderGroupArgs = (column) => {
        if (sortable) {
            return [column.getSortByToggleProps()]
        }
        return []
    }

    const tableIntance = useTable(
        {
            columns: memoizedColumns,
            data: memoizedData,
            // initialState: { pageIndex: 2 }
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
        useColumnOrder,
        (hooks) => {
            if (selectableRows) {
                hooks.visibleColumns.push((columns) => [{
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => (<Checkbox  {...getToggleAllRowsSelectedProps()} />),
                    Cell: ({ row }) => (<Checkbox {...row.getToggleRowSelectedProps()} />),
                }, ...columns])
            }
        }
        // defaultColumn
    )

    const { getTableProps,
        getTableBodyProps,
        state,
        setGlobalFilter,
        headerGroups,
        rows,
        prepareRow,
        footerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        selectedFlatRows,
        setColumnOrder,
        allColumns,
        getToggleHideAllColumnsProps,
    } = tableIntance

    const { globalFilter, pageIndex, pageSize } = state

    const renderRows = paginate ? page : rows

    const hasData = renderRows.length > 0

    const changeOrder = () => {
        setColumnOrder(columnOrder)
    }

    return (
        <StyledTable>
            <div>
                <div>
                    <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
                </div>
                <div style={{ display: "flex", gap: "20px" }} >
                    {allColumns.map(column => {
                        const header = typeof column.Header === 'string' ? column.Header : column.id
                        return <label key={column.id}>
                            <input type="checkbox" {...column.getToggleHiddenProps()} />
                            <span>{header}</span>
                        </label>

                    })}
                </div>
            </div>
            {columnOrder && <button onClick={changeOrder}>Change Column Order</button>}
            {showGlobalFilter && <input placeholder="global filter" value={globalFilter || ""} onChange={(e) => setGlobalFilter(e.target.value)} />}
            <div className="table-wrapper">
                < table {...getTableProps} >
                    <thead>
                        {headerGroups.map(headerGroup => (<tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => <th {...column.getHeaderProps(...setHeaderGroupArgs(column))}>{column.render('Header')}
                                {column.isSorted ? (column.isSortedDesc ? <Icon icon="arrow_downward" /> : <Icon icon="arrow_upward" />) : ''}
                                <div>{(column?.Filter && showColumnFilter) ? column.render("Filter") : null}</div>
                            </th>)}
                        </tr>))}
                    </thead>
                    <tbody {...getTableBodyProps}>
                        {renderRows.map(row => {
                            prepareRow(row);
                            return (<tr {...row.getRowProps()}>
                                {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render("Cell")}</td>)}
                            </tr>)
                        })}
                    </tbody>
                    {showFooter && <tfoot>
                        {footerGroups.map(footerGroup => (<tr {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map(column => <td {...column.getFooterProps()}>{column.render('Footer')}</td>)}
                        </tr>))}
                    </tfoot>}
                </table >
            </div>
            {paginate && hasData && <div>
                <span>Page <strong>{pageIndex + 1} of {pageOptions.length}</strong></span>
                <span> | Page Size: <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>{
                    [10, 20, 30].map(size => <option key={size}>{size}</option>)
                }</select> | </span>
                <button disabled={!canPreviousPage} onClick={() => gotoPage(0)}>{'<<'}</button>
                <button disabled={!canPreviousPage} onClick={() => previousPage()}>Previous</button>
                <button disabled={!canNextPage} onClick={() => nextPage()}>Next</button>
                <button disabled={!canNextPage} onClick={() => gotoPage(pageCount - 1)}>{'>>'}</button>
            </div>
            }
            {!hasData && <div>{noData}</div>}

            <pre>
                <code>
                    {JSON.stringify({ selectedFlatRows: selectedFlatRows.map(row => row.original) }, null, 2)}
                </code>
            </pre>
        </StyledTable >)
}

export default Table