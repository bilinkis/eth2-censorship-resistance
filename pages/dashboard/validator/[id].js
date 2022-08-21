import * as React from 'react';
import Head from "next/head"
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rankings from '../../../components/Rankings';
import LineChart from 'react-linechart';
import '../../../node_modules/react-linechart/dist/styles.css';
import { useRouter } from 'next/router'
import Title from '../../../components/Title';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { create } from 'domain';




const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const mdTheme = createTheme();
function createData(
  epoch,
  slot,
  age,
  proposer,
  
) {
  return { epoch, slot, age, proposer };
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

function DashboardContent() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id)
  

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Head>
        <title>Ethereum Uncensored</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <AppBar position="absolute" >
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            
            <Link href="/dashboard"><Typography
              component="h1"
              variant="h6"
              color="white"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Ethereum Uncensored Dashboard
            </Typography>
            </Link>
            
          </Toolbar>
        </AppBar>
       
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
            <Grid container spacing={3} >
              {/* Chart */}
              {/* Recent Orders */}
              <Grid style={{display:"block", margin:"0 auto"}}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems:"center" }}>
                  <Typography>Validator: {id}</Typography>
                  <Typography>Pool: Coinbase</Typography>
                  <Typography>Stake: 1024 ETH</Typography>
                  <Typography>Orphaned blocks: 14</Typography>
                  
                  <React.Fragment>
      <Title>Latest orphaned blocks</Title>
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
          {blocks.map((block) => (
            <TableRow key={block.epoch}>
              <TableCell>{block.epoch}</TableCell>
              <Link href={`/dashboard/block/${block.slot}`}><TableCell>{block.slot}</TableCell></Link>
              <TableCell>{block.age}</TableCell>
              <TableCell>{id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
                </Paper>
                
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Validator() {
  return <DashboardContent />;
}
