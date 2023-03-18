import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TStoreItem } from '../../../global';

interface IItemState {
    isModalOpen: boolean;
    itemData: TStoreItem;
}

const initialState: IItemState = {
    isModalOpen: false,
    itemData: {} as TStoreItem,
};

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        toggleIsModalOpen: (state) => {
            state.isModalOpen = !state.isModalOpen;
        },
        setIsModalOpenFalse: (state) => {
            state.isModalOpen = false;
        },
        setModalData: (state, action: PayloadAction<TStoreItem>) => {
            state.itemData = action.payload;
        },
        setItemSpecialDeliveryStatusToRefillRequested: (state) => {
            // Dispatch a request
            // TODO: Figure out how to update instance of specialDeliveryStatus entirely -
            // TODO: Currently, the itemData that's being propogated to ItemCustomizationPanel.tsx is not the "main" value
            // TODO: The main value is StoreItemContext. See if I can get the specialDeliveryStatus in MenuItem.tsx to update
            // TODO: IDEA: In MenuItem.tsx - create a new state from passed specialDeliveryStatus prop, then pass the state and setter to ItemCustomizationPanel
            // TODO: BETTER IDEA: Find a way to directly set StoreItem (Before it is passed as context)
            state.itemData.specialDeliveryStatus = 'refill-requested';
        }
    }
});

export const {
    toggleIsModalOpen, setIsModalOpenFalse, setModalData, setItemSpecialDeliveryStatusToRefillRequested
} = itemSlice.actions;
export default itemSlice.reducer;
