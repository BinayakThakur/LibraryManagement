import { BrowserRouter as Routers, Route } from "react-router-dom";
import './App.css';
import ButtonAppBar from './components/AppBar';
import {  createTheme, ThemeProvider, Container } from '@mui/material';
import Home from "./components/Home";
import { DataProvider } from "./Datacontext";
import { SnackbarProvider } from 'notistack';




const darkTheme = createTheme({
  palette:    {
    type: 'dark',
    primary: {
      main: '#2B2B2D',
    },
   
  },
  
}
);
function App() {
  
  return (
    <ThemeProvider theme={darkTheme}>
      <SnackbarProvider>
    <DataProvider>
    <Container>
    <ButtonAppBar/>
      <Home></Home>
    </Container>
    </DataProvider>
    </SnackbarProvider>
   </ThemeProvider>
  );
}

export default App;
