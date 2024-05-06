import { TableContainer, Paper, Table, TableBody, TableRow, TableHead } from "@mui/material";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useSelector } from 'react-redux';
import CreateIcon from '@mui/icons-material/Create'
import DeleteIcon from '@mui/icons-material/Delete'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


export default function OrderList() {
  const orderItems = useSelector( (state) =>state.shipping.orders)
  const cancelOrderHandler = (id) => {
   
    console.log(id);
  };
  const labelShippingHandler = (id) => {
    
    console.log(id);
  };
  return (
        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Orden #</StyledTableCell>
              <StyledTableCell align="left">Client</StyledTableCell>
              <StyledTableCell align="left">Product</StyledTableCell>
              <StyledTableCell align="right">Carrier</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderItems.map(item => (
               <TableRow key={item.id}>
                <TableCell align="left">{item.id}</TableCell>
                <TableCell align="left">{item.detail}</TableCell>
                <TableCell align="left">{item.carrier}</TableCell>
                <TableCell align="right">{item.parcel}</TableCell>
                <TableCell align="right">{item.status}</TableCell>
                <TableCell align="right" onClick={ () => labelShippingHandler(item.id) }><CreateIcon/></TableCell>
                <TableCell align="right" onClick={ () => cancelOrderHandler(item.id)}><DeleteIcon/></TableCell>
               </TableRow>
            ))}
          </TableBody>
        </Table>
     </TableContainer>
  );
};