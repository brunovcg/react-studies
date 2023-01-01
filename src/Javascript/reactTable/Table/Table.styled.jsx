import styled, { css } from 'styled-components'

export const StyledTable = styled.div`
padding: 50px;

.table-wrapper{
  width: 100%;
  height: ${props => props.tableHeight} ;
  overflow-x: auto;
}

table {
  border-collapse: collapse;
  text-align: center;
  width: 100%;
  table-layout: ${props => props.stickFromColumn || !props.manualWidth ? 'auto' : 'fixed'}
}

table thead {
  ${props => props.stickHeader && css`
    z-index: 4;
    position: sticky;
    top:0;
  
  `}
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr th span {
  position: absolute;
}

table tbody tr td{
  ${props => css`${props.rowsConfig?.row}`}
}

table tr:nth-child(even) td {
  ${props => css`${props.rowConfigs?.even}`}
}

table tr:nth-child(odd) td {
  ${props => css`${props.rowConfigs?.odd}`}
}

table tr:hover td {
  ${props => css`${props.rowConfigs?.hover}`}
  cursor: ${props => props.clickableRow && 'pointer'} ;
}

table th, tfoot td {
  padding-top: 12px;
  padding-bottom: 12px;
  overflow: hidden;
  ${props => css`${props.headerConfig}`}
}

table tr th{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  

  ${props =>
    !props.manualWidth && !props.stickColumn && css`
    display: table-cell;
  `}
}

&.sticky {
      overflow: scroll;
      thead,
      tfoot {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }
 
      thead {
        top: 0;
        box-shadow: 0px 3px 3px #ccc;
      }
 
      tfoot  {
        bottom: 0;
        box-shadow: 0px -3px 3px #ccc;
      }
 
      tbody {
        position: relative;
        z-index: 0;
      }
 
      [data-sticky-td] {
        position: sticky;
        left: 0;
      }
 
      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;
      }
 
      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc;
      }
    }
`

export const StyledColumnHeader = styled.th`
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  

  ${props =>
    !props.manualWidth && !props.stickColumn && css`
    display: table-cell;
  `}

`
export const StyledColumnData = styled.td`
width: ${props => props.width ? `${props.width}px` : 'auto'}
`