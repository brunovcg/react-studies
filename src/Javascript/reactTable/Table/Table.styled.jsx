import styled from 'styled-components'

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
  
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr th {
  position: relative;
}

table tr th span {
  position: absolute;

}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

table th, tfoot td {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #04AA6D;
  color: white;
}

`

export default StyledTable