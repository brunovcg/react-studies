import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect, useColumnOrder, useFlexLayout } from "react-table"
import { useSticky } from 'react-table-sticky'
import { useMemo, forwardRef, useRef, useEffect } from "react"
import StyledTable from "../Table/Table.styled"
import Icon from "../../../models/components/icon"
import generateExcel from "zipcelx";

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
    sortable = true,
    showGlobalFilter = true,
    showColumnFilter = true,
    paginate = true,
    selectableRows = true,
    columnOrder,
    noData = "There is no data"
}) {

    const memoizedColumns = useMemo(() => columns, [columns])
    const memoizedData = useMemo(() => data, [data])
    const hasStickyColumns = memoizedColumns.filter(column => column.sticky === true).length


    // ! DEFAULT column to apply default configs to columns
    const defaultColumn = useMemo(() => {
        return {
            width: 200,
        }
    }, [])

    const isStickyColumn = (columnId) => memoizedColumns.find(column => column.accessor === columnId)?.sticky ? 'left' : null

    const setHeaderGroupArgs = (column) => {
        if (sortable) {
            return [column.getSortByToggleProps()]
        }
        return []
    }

    const tableInstanceConfigs = [{
        columns: memoizedColumns,
        data: memoizedData,
        defaultColumn
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
            hooks.visibleColumns.push((columns) => {
                const mappedColumns = columns.map(column => ({ ...column, sticky: isStickyColumn(column.id) }))
                return [{
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => (<Checkbox  {...getToggleAllRowsSelectedProps()} />),
                    Cell: ({ row }) => (<Checkbox {...row.getToggleRowSelectedProps()} />),
                    sticky: 'left',
                    width: 30
                }, ...mappedColumns]
            }

            )
        }
    }]

    if (hasStickyColumns) {
        tableInstanceConfigs.push(useSticky, useFlexLayout)
    }

    const tableIntance = useTable(...tableInstanceConfigs)

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

    function getHeader(column) {
        if (column.totalHeaderCount === 1) {
            return [
                {
                    value: column.Header,
                    type: "string"
                }
            ];
        } else {
            return [
                {
                    value: column.Header,
                    type: "string"
                },
            ];
        }
    }

    function getExcel() {
        const config = {
            filename: "table-test",
            sheet: {
                data: []
            }
        };

        const dataSet = config.sheet.data;

        headerGroups.forEach(headerGroup => {
            const headerRow = [];
            if (headerGroup.headers) {
                headerGroup.headers.forEach((column, index) => {
                    const rowHasData = renderRows.find(row => row.values[column.id])
                    if (index && rowHasData) {
                        headerRow.push(...getHeader(column));
                    }
                });
            }

            dataSet.push(headerRow);
        });

        if (renderRows.length > 0) {
            renderRows.forEach(row => {
                const dataRow = [];

                Object.values(row.values).forEach(value =>
                    dataRow.push({
                        value,
                        type: typeof value === "number" ? "number" : "string"
                    })
                );

                dataSet.push(dataRow);
            });
        } else {
            dataSet.push([
                {
                    value: "No data",
                    type: "string"
                }
            ]);
        }

        return generateExcel(config);
    }

    return (
        <StyledTable sticky={hasStickyColumns}>
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
                            {headerGroup.headers.map(column => <th {...column.getHeaderProps(...setHeaderGroupArgs(column))}>
                                <div>
                                    {column.render('Header')}
                                    {column.isSorted ? (column.isSortedDesc ? <Icon icon="arrow_downward" /> : <Icon icon="arrow_upward" />) : ''}
                                </div>
                                <div>{(column?.Filter && showColumnFilter) ? column.render("Filter") : null}</div>
                            </th>)}
                        </tr>))}
                    </thead>
                    <tbody {...getTableBodyProps}>
                        {renderRows.map(row => {
                            prepareRow(row);
                            return (<tr {...row.getRowProps()}>
                                {row.cells.map(cell => <td  {...cell.getCellProps()}>{cell.render("Cell")}</td>)}
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
                <button onClick={getExcel}>Download to excel</button>
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