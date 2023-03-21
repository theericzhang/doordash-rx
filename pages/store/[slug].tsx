import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { createContext, useMemo, useState } from 'react';
import { restaurantList } from '../../components/datav2';
import {
    TRestaurantDataPrimary, TStorefrontData
} from '../../global';

import StoreLayout from '../../components/Layouts/StoreLayout';
import HeroComponent from '../../components/StoreComponents/HeroComponent/HeroComponent';
import CartOverview from '../../components/StoreComponents/CartOverviewComponent/CartOverview';
// eslint-disable-next-line import/no-cycle
import QuickActions from '../../components/StoreComponents/QuickActionsComponent/QuickActions';

import { useAppDispatch } from '../../app-redux/hooks';
import { setPageViewingStoreID } from '../../app-redux/features/cart/cartSlice';

type TServerSideProps = {
    restaurant: {
        restaurantData: TRestaurantDataPrimary;
        storefrontData: TStorefrontData;
    };
    storeID: string;
};

type TStoreItemsContext = {
    restaurantData: {
        restaurantData: TRestaurantDataPrimary;
        storefrontData: TStorefrontData;
    };
    setRestaurantData: React.Dispatch<React.SetStateAction<{ restaurantData: TRestaurantDataPrimary; storefrontData: TStorefrontData; }>>;
};

export const StoreItemsContext = createContext<TStoreItemsContext | null>(null);

export default function Store({ restaurant, storeID }: TServerSideProps) {
    const dispatch = useAppDispatch();
    dispatch(setPageViewingStoreID(Number(storeID)));
    const [restaurantData, setRestaurantData] = useState(restaurant);
    return (
        <>
            <Head>
                <title>{restaurant.restaurantData.restaurantName}</title>
                <meta
                    name="DoorDash"
                    content="DoorDash Food Delivery - Delivering Now, From Restaurants Near You"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <StoreLayout>
                <HeroComponent
                    restaurantData={restaurant.restaurantData}
                    storefrontData={restaurant.storefrontData}
                />
                {/* Insert Rest of the Store's components */}
                {/* <StoreItemsContext.Provider value={restaurant.storefrontData.items}> */}
                <StoreItemsContext.Provider value={useMemo(() => ({ restaurantData, setRestaurantData }), [restaurantData, setRestaurantData])}>
                    <QuickActions />
                </StoreItemsContext.Provider>
                <CartOverview isInCartSheet={false} />
            </StoreLayout>
        </>
    );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    // fetch data pertinent to store here
    // Always note that the last property ctx.params?.slug MUST be the same as the name [slug], without square brackets.
    const storeID = ctx.params?.slug;
    const restaurant = restaurantList[Number(storeID) as keyof typeof restaurantList];
    return {
        props: { restaurant, storeID },
    };
}
