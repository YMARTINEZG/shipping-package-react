import { configureStore } from '@reduxjs/toolkit';

import shippingSlice from './shipping-slice';
import uiSlice from './ui-slice';

const store = configureStore({reducer: { shipping:shippingSlice.reducer, ui: uiSlice.reducer}});

export default store;