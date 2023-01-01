import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect, useColumnOrder, useFlexLayout } from "react-table"
import { useSticky } from 'react-table-sticky'
import { useMemo, forwardRef, useRef, useEffect } from "react"
import { StyledTable, StyledColumnData, StyledColumnHeader } from "../Table/Table.styled"
import Icon from "../../../models/components/icon"
import useExportToExcel from './useExportToExcel';

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
    noData = "There is no data",
    defaultColumnConfigs,
    stickFromColumn,
    headerConfig,
    rowsConfig
}) {

    const memoizedColumns = useMemo(() => columns, [columns])
    const memoizedData = useMemo(() => data, [data])
    const hasManualWidthColumns = memoizedColumns.some(column => column.width)

    // ! DEFAULT column to apply default configs to columns
    const defaultColumn = useMemo(() => {
        if (defaultColumnConfigs) {
            return defaultColumnConfigs
        }
        return {
            width: 200,
        }
    }, [defaultColumnConfigs])

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
                let sticky = false
                const mappedColumns = columns.reduceRight((acc, current) => {
                    const column = { ...current }
                    if (stickFromColumn === current.id || sticky) {
                        column.sticky = 'left'
                        if (!sticky) {
                            sticky = true
                        }
                    }
                    acc.unshift(column)

                    return acc
                }, [])
                return [{
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => (<Checkbox  {...getToggleAllRowsSelectedProps()} />),
                    Cell: ({ row }) => (<Checkbox {...row.getToggleRowSelectedProps()} />),
                    sticky: stickFromColumn && 'left',
                    width: 30
                }, ...mappedColumns]
            }
            )
        }
    }]

    if (stickFromColumn || hasManualWidthColumns) {
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

    const [getExcel] = useExportToExcel(renderRows, headerGroups)
    const renderOrdingIcon = (column) => column.isSortedDesc ? <Icon icon="arrow_downward" /> : <Icon icon="arrow_upward" />

    return (
        <StyledTable sticky={stickFromColumn} manualWidth={hasManualWidthColumns} headerConfig={headerConfig} rowConfigs={rowsConfig}>
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
                            {headerGroup.headers.map(column => <StyledColumnHeader className="im-table-th" width={column.width} {...column.getHeaderProps(...setHeaderGroupArgs(column))}>
                                <div>
                                    {column.render('Header')}
                                    {column.isSorted ? renderOrdingIcon(column) : ''}
                                </div>
                                <div>{(column?.Filter && showColumnFilter) ? column.render("Filter") : null}</div>
                            </StyledColumnHeader>)}
                        </tr>))}
                    </thead>
                    <tbody {...getTableBodyProps}>
                        {renderRows.map(row => {
                            prepareRow(row);
                            return (<tr {...row.getRowProps()}>
                                {row.cells.map(cell => <StyledColumnData className="im-table-td" width={cell.column.width}  {...cell.getCellProps()}>{cell.render("Cell")}</StyledColumnData>)}
                            </tr>)
                        })}
                    </tbody>
                    {showFooter && <tfoot>
                        {footerGroups.map(footerGroup => (<tr {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map(column => <StyledColumnData width={column.width} {...column.getFooterProps()}>{column.render('Footer')}</StyledColumnData>)}
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