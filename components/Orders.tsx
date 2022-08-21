import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(
  epoch: number,
  slot: number,
  age: string,
  proposer: number,
  
) {
  return { epoch, slot, age, proposer };
}

const rows = [
  createData(
    141051,
    4513636,
    '14 hrs 44 mins ago',
    59044,
  ),
  createData(
    141051,
    4513648,
    '14 hrs 41 mins ago',
    38719,
  ),
  createData(141058, 4513859, '13 hrs 59 mins ago', 94612),
  createData(
    141083,
    4514680,
    '11 hrs 15 mins ago',
    109235,
  )
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Epoch</TableCell>
            <TableCell>Slot (ID)</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Proposer</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.epoch}>
              <TableCell>{row.slot}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.proposer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
