import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './features/cart/cartSlice';
import deliveryReducers from './features/delivery/deliverySlice';
import itemReducers from './features/item/itemSlice';
import dataReducers from './features/data/dataSlice';
import restaurantReducers from './features/restaurants/restaurantsSlice';

export const store = configureStore({
    reducer: {
        // Slice and reducer, slice: reducer
        cartSlice: cartReducers,
        deliverySlice: deliveryReducers,
        itemSlice: itemReducers,
        dataSlice: dataReducers,
        restaurantSlice: restaurantReducers,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
