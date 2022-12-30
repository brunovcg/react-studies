import styled, { css } from 'styled-components'

const StyledTable = styled.div`
padding: 50px;


.table-wrapper{
  width: 100%;
  overflow-x: auto;
}


table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  text-align: center;
  width: 100%;
  overflow-x: hidden;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
  width: 30px;
}

table tr th {
  position: relative;
 
  ${props => props.sticky && css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  `}
}

table tr th span {
  position: absolute;

}


table tr:nth-child(even) td {background-color: #f2f2f2;}
table tr:nth-child(odd) td {background-color: #fff;}


table tr:hover {background-color: #ddd;}

table th, tfoot td {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #04AA6D;
  color: white;
  overflow: hidden;
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
      }
 
      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;
      }
 
      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc;
      }
    }

`

export default StyledTable