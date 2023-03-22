import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { TRestaurantList } from '../../../global';
import { restaurantList } from '../../../components/datav2';

type TPayloadActionSpecialDeliveryStatus = {
    pageViewingStoreID: number;
    itemID: number;
};

const initialState = restaurantList;

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        setItemSpecialDeliveryStatusToRefillRequested: (state, action: PayloadAction<TPayloadActionSpecialDeliveryStatus>) => {
            const { pageViewingStoreID, itemID } = action.payload;
            state[Number(pageViewingStoreID) as keyof typeof restaurantList].storefrontData.items.itemsList[itemID].specialDeliveryStatus = 'refill-requested' as 'refill-requested';
        }
    }
});

export const {
    setItemSpecialDeliveryStatusToRefillRequested
} = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
