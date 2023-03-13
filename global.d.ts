export type TRestaurantList = {
    [key: number]: {
        restaurantData: TRestaurantDataPrimary;
        storefrontData: TStorefrontData;
    },
};

export type TRestaurantCarousels = {
    restaurantCarouselsData: {
        carouselName: string;
        selectedRestaurantIDs: number[];
    }[];
};

export type TRestaurantDataPrimary = {
    restaurantName: string;
    restaurantImage: {
        src: string;
        alt: string;
    };
    distance: string;
    deliveryTime: string;
    pickupTime: string;
    isDashPass: boolean;
    isSpecialDelivery?: boolean;
};

export type TStorefrontData = {
    isSpecialDelivery?: boolean;
    shortDescription?: string;
    averageRating?: number;
    ratingCount?: number;
    priceRating?: number;
    operationHours: {
        openHour: number;
        openMinute: number;
        closeHour: number;
        closeMinute: number;
    }[];
    items: TStoreItemCategory;
};

export type TStoreItemCategory = {
    itemsName: string;
    itemsNameDesc: string;
    itemsList: TStoreItem[];
};

export type TMedicationInformation = {
    lastFilledDate: string;
    quantity: number;
    refills: number;
    patientInformation: {
        patientName: string;
        patientAddress: string;
        patientInsurance: {
            insurer: string;
            memberID: number;
        };
    };
    instructions: string;
    medicalImportantInformation: string[];
};

export type TStoreItem = {
    itemID: number;
    image: {
        src: string;
        alt: string;
    };
    itemName: string;
    price: number;
    description?: string;
    lastOrdered?: string;
    ratingPercentage?: number;
    ratingCount?: number;
    specialDeliveryStatus?: 'refill-ready' | 'refill-requested' | 'delivery-ready';
    medicationInformation?: TMedicationInformation;
};
