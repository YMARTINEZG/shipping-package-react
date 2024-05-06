import { shippingActions } from './shipping-slice';
import { uiActions } from './ui-slice';
export const fetchOrderData = () => {
    
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(process.env.REACT_APP_URL_ENDPOINT+'/order/all');
            if(!response.ok){
                throw new Error('Couldnot fetch data!');
            }
            const data = await response.json();
            return data;
        };
       
        try {
           const orderData = await fetchData();
           
           dispatch(
              shippingActions.replaceOrders({
                 orders: orderData.orders || [],
              })


           )
        }catch (error){
           dispatch(
            uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching order data failed!',
              })            
           )
        }
    };

}