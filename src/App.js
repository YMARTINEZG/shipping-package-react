import {useEffect} from 'react';
import Layout from './components/Layout/Layout';
import { ThemeProvider } from "@mui/styles";
import { blue, green} from '@mui/material/colors';
import { createTheme } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrderData } from './store/shipping-actions';

export const theme = createTheme({
  palette: {
    primary: blue,
    secondary: green
  }
});

let isInitial = true;

function App() {

  const dispatch = useDispatch();
  const shipping = useSelector((state) => state.shipping);

  useEffect(() => {
    dispatch(fetchOrderData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
  }, [shipping, dispatch]);
  return (
      <div className="main-container">
       <ThemeProvider theme={theme}>
         <Layout />
       </ThemeProvider>
      </div>
  );
}

export default App;
