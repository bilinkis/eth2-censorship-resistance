import * as React from 'react';
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
  hash,
  from,
  to,
  value,
  
) {
  return { hash, from, to, value };
}
const txs = [
  createData("0xd59a30e4fdb2ec9ca21ff765e2d0643225ab8e8b8c64da1061ecc4369bfb625b", "0xf5687849dba892d0738bd0cffb504720ed938961", "Tornado Cash", "0.1"),
  createData("0xa33c3eeadf9cd2d4d99bc3f36a60c7ad6e9bea0767c5b201eed1fa28b542b311", "0xf35074bbd0a9aee46f4ea137971feec024ab704e", "ENS", "0.013"),
  createData("0xf066230fc17b2b30e3ca2f6bf02f2dec696b489e6e08b9f2a6670bb7be13af2a", "0x8610df5a928e4bcec0eaf3df4aaa66ca2ceb06ae", "Bored Apes Yacht Club", "97"),
  createData("0xd59a30e4fdb2ec9ca21ff765e2d0643225ab8e8b8c64da1061ecc4369bfb625b", "0xa73245fd145860cf66dcff4aac4a78c213a73407", "Tornado Cash", "1"),
];

function DashboardContent() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id)
  

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
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
                  <Typography>Block number (slot): {id}</Typography>
                  <Typography>Epoch: 141051</Typography>
                  <Typography>Age: 14 hrs 44 mins ago</Typography>
                  <Link href="/dashboard/validator/59044"><Typography>Validator: 59044</Typography></Link>
                  
                  <React.Fragment>
      <Title>Block's transactions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>TX Hash</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Value</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {txs.map((tx) => (
            <TableRow key={tx.hash}>
              <TableCell>{tx.hash}</TableCell>
              <TableCell>{tx.from}</TableCell>
              <TableCell>{tx.to}</TableCell>
              <TableCell>{tx.value} ETH</TableCell>
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

export default function Block() {
  return <DashboardContent />;
}
