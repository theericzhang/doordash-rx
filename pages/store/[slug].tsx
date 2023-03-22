import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { createContext, useEffect, useState } from 'react';
import { restaurantList } from '../../components/datav2';
import {
    TRestaurantDataPrimary, TStorefrontData
} from '../../global';

import StoreLayout from '../../components/Layouts/StoreLayout';
import HeroComponent from '../../components/StoreComponents/HeroComponent/HeroComponent';
import CartOverview from '../../components/StoreComponents/CartOverviewComponent/CartOverview';
// eslint-disable-next-line import/no-cycle
import QuickActions from '../../components/StoreComponents/QuickActionsComponent/QuickActions';

import { useAppSelector, useAppDispatch } from '../../app-redux/hooks';
import { setPageViewingStoreID } from '../../app-redux/features/cart/cartSlice';

type TServerSideProps = {
    storeID: string;
};

type TRestaurantContext = {
    restaurantData: TRestaurantDataPrimary;
    storefrontData: TStorefrontData;
};

export const RestaurantContext = createContext<TRestaurantContext | null>(null);

export default function Store({ storeID }: TServerSideProps) {
    // Set the storeID once the page mounts
    const dispatch = useAppDispatch();
    dispatch(setPageViewingStoreID(Number(storeID)));

    // grab the restaurant/store's data from global redux store, create a state variable and set it to the data
    // Cannot pass restaurant directly as context since context will not trigger a re-render if it is updated, as per design
    const restaurant = useAppSelector((state) => state.restaurantSlice[Number(storeID) as keyof typeof restaurantList]);
    const [restaurantState, setRestaurantState] = useState(restaurant);

    // update restaurantState if the value of restaurant changes. expect restaurant to change when specialDeliveryStatus updates
    useEffect(() => {
        setRestaurantState(restaurant);
    }, [restaurant]);

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
                <RestaurantContext.Provider value={restaurantState}>
                    <QuickActions />
                </RestaurantContext.Provider>
                <CartOverview isInCartSheet={false} />
            </StoreLayout>
        </>
    );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    // fetch data pertinent to store here
    // Always note that the last property ctx.params?.slug MUST be the same as the name [slug], without square brackets.
    const storeID = ctx.params?.slug;
    if (restaurantList[Number(storeID) as keyof typeof restaurantList] === undefined) {
        return {
            notFound: true,
        };
    }

    return {
        props: { storeID },
    };
}
