import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TRestaurantList } from '../../../global';
import { restaurantList } from '../../../components/datav2';

// TODO: Figure out how to type restaurantList properly
// TODO: itemID is not avail on every restaurant, but used in cartSlice??
const initialState: TRestaurantList = restaurantList;

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        setItemSpecialDeliveryStatusToRefillRequested: (state, action: PayloadAction<number>) => {
            // TODO: Grab the restaurant according to the passed PayloadAction, which would be the slug parameters in this case.
            const storeID = action.payload;
            console.log(state[Number(storeID) as keyof typeof restaurantList]);
        }
    }
});

export const {
    setItemSpecialDeliveryStatusToRefillRequested
} = restaurantsSlice.actions;
export default restaurantsSlice.reducer;

// function setSpecialDeliveryStatusToRefillRequested() {
//     setRestaurantData!((state) => ({
//         ...state,
//         storefrontData: {
//             ...state.storefrontData,
//             items: {
//                 ...state.storefrontData.items,
//                 itemsList: [
//                     ...state.storefrontData.items.itemsList.slice(0, itemID),
//                     {
//                         ...state.storefrontData.items.itemsList[itemID],
//                         specialDeliveryStatus: 'refill-requested'
//                     },
//                     ...state.storefrontData.items.itemsList.slice(itemID + 1),
//                 ]
//             }
//         }
//     }));
// }
