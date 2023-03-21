import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from '../styles/GlobalStyles';
import Home from './index';
import Store from './store/[slug]';
import Navbar from '../components/Navigation/Navbar';
import { store } from '../app-redux/store';
// import { useAppDispatch, useAppSelector } from '../app-redux/hooks';
// import { setRestaurantListData, setRestaurantCarouselData } from '../app-redux/features/data/dataSlice';
import CartSheet from '../components/CartSheet/CartSheet';
import GithubBadge from '../components/GithubBadge/GithubBadge';

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        console.log('%chttps://anericzhang.com', 'background: orange; font-size: 16px');
        // Prints: my website to the console
    }, []);

    // const dispatch = useAppDispatch();
    // const restaurantData = useAppSelector((state) => state.dataSlice.restaurantListData);
    // const restaurantCarouselData = useAppSelector((state) => state.dataSlice.restaurantCarousels);
    // fetch restaurant data
    // TODO: I need to create a restaurantsList slice that is a part of the global redux store, which has its global provider wrapper inside _app.tsx
    // TODO: The idea is to put all data that is passed in [slug].tsx and move it into a redux store
    // TODO: The slice would instantiate a copy of restaurantList from datav2.tsx
    // TODO: Then, on _app.tsx mount, the slice would provide information to each slug page. For example,
    // TODO: In [slug].tsx, inside getServerSideProps, we would use a selector to return the restaurant of the slug's params.
    useEffect(() => {
        // Set fetchData for later.

        // async function fetchData() {
        //     try {
        //         const res = await fetch('/api/hello');
        //         if (!res.ok) {
        //             console.log(`fetch failed, error code ${res.status} - ${res.statusText}`);
        //         } else {
        //             const data = await res.json();
        //             // dispatch(setRestaurantListData(data.restaurantListData));
        //             // dispatch(setRestaurantCarouselData(data.restaurantCarouselsData));
        //             // setRestaurantData(data.restaurantListData);
        //             // setRestaurantCarouselsData(data.restaurantCarouselsData);
        //         }
        //     } catch (e) {
        //         console.error(e);
        //         console.log('fetch failed!');
        //     }
        // }

        // fetchData();
    }, []);

    // useEffect(() => {
    //     console.log(restaurantData, restaurantCarouselData);
    // }, [restaurantData, restaurantCarouselData]);

    return (
        <Provider store={store}>
            <GlobalStyles />
            {/**
                 * Check if the child component pages (Component prop) are either Home or Store.
                 * If they are, render a <Navbar />
                 * */}
            {Component === Home || Component === Store ? (
                Component !== Store ? (
                    <Navbar isShoppingCartToggleable />
                ) : (
                    <Navbar isShoppingCartToggleable={false} />
                )
            ) : null}
            {/* {(Component !== Store) ? <CartSheet /> : null} */}
            {/* Consider passing a cartSheet with property isStoreCartSheet for
                Component === store? So we can use this boolean to hide/show the cart sheet */}
            {Component === Home ? (
                <CartSheet />
            ) : Component === Store ? (
                <CartSheet isStoreCartSheet />
            ) : null}
            <Component {...pageProps} />
            <GithubBadge />
        </Provider>
    );
}
