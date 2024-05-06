import {useEffect} from 'react';
import Layout from './components/Layout/Layout';
import { ThemeProvider } from 'react-ui';
import {tokens} from 'react-ui/themes/light'
import { blue, green} from '@mui/material/colors';
import { createTheme } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrderData } from './store/shipping-actions';
import Keycloak from 'keycloak-js';

export const theme = createTheme({
  palette: {
    primary: blue,
    secondary: green
  }
});
  const keycloak = new Keycloak({
    url: "http://localhost:8024/auth",
    realm: "keep-growing",
    clientId: "react-client",
  });


  keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
    if (authenticated) {
        console.log('User is authenticated');
    } else {
        console.log('User is not authenticated');
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
       <ThemeProvider tokens={tokens}>
         <Layout />
       </ThemeProvider>
      </div>
  );

}

export default App;
