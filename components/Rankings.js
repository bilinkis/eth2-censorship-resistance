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
  epoch,
  slot,
  age,
  proposer,
  
) {
  return { epoch, slot, age, proposer };
}
function createProtocol(
  address,
  txs
){
  return { address, txs }
}


const blocks = [
  createData(
    141051,
    4513636,
    '14 hrs 44 mins ago',
    59044,
  ),
  createData(
    141052,
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
const protocols = [
  createProtocol("Tornado Cash", 45),
  createProtocol("Proof of Humanity", 27),
  createProtocol("Open Sea", 20),
  createProtocol("ENS", 14)
]
const censored = [
createProtocol("0x5fbddead785d433a7a45db96b02edf68bad27033", 10),
createProtocol("0x621777682d2e7fb47ee28ad40e3c1d8d9b4d4126", 7), 
createProtocol("0xc2ee087094a6c25eaf1274b31a1dbd97c93c83de", 5), 
createProtocol("0xc85935ab2be4b0788f0ac19dd3f447d90dd31464", 4), 
]
const censoringValidators = [
  createProtocol(190235, 14),
  createProtocol(25434, 10),
  createProtocol(34548, 8),
  createProtocol(76434, 4)
]

function preventDefault(event) {
  event.preventDefault();
}

export default function Rankings() {
  return (
    <>
    <React.Fragment>
      <Title>Latest orphaned blocks</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Epoch</TableCell>
            <TableCell>Block number (slot)</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Validator/Proposer</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {blocks.map((block) => (
            <TableRow key={block.epoch}>
              <TableCell>{block.epoch}</TableCell>
              <Link href={`dashboard/block/${block.slot}`}><TableCell>{block.slot}</TableCell></Link>
              <TableCell>{block.age}</TableCell>
              <Link href={`dashboard/validator/${block.proposer}`}><TableCell>{block.proposer}</TableCell></Link>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
       <React.Fragment>
       <Title>Most censored protocols</Title>
       <Table size="small">
         <TableHead>
           <TableRow>
             <TableCell>Protocol</TableCell>
             <TableCell># of transactions</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {protocols.map((protocol) => (
             <TableRow key={protocol.address}>
               <TableCell>{protocol.address}</TableCell>
               <TableCell>{protocol.txs}</TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </React.Fragment>
     <React.Fragment>
       <Title>Most censored individuals</Title>
       <Table size="small">
         <TableHead>
           <TableRow>
             <TableCell>Public Key</TableCell>
             <TableCell># of transactions</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {censored.map((censoree) => (
             <TableRow key={censoree.address}>
               <TableCell>{censoree.address}</TableCell>
               <TableCell>{censoree.txs}</TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </React.Fragment>
     <React.Fragment>
       <Title>Most censoring validators</Title>
       <Table size="small">
         <TableHead>
           <TableRow>
             <TableCell>ID</TableCell>
             <TableCell># of orphaned blocks</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {censoringValidators.map((censoringValidator) => (
             <TableRow key={censoringValidator.address}>
               <TableCell>{censoringValidator.address}</TableCell>
               <TableCell>{censoringValidator.txs}</TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </React.Fragment>
     </>

  );
}
