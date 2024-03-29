/* eslint-disable import/no-cycle */
import styled from 'styled-components';
import { Fragment, useContext } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { RestaurantContext } from '../../../pages/store/[slug]';

const MenuSectionSection = styled.section`
    display: flex;
    flex-direction: column;
`;

const MenuSectionHeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3.5px;

    @media screen and (max-width: 770px) {
        padding: 0 16px;
    }

    @media screen and (max-width: 480px) {
        padding: 0;
    }
`;

// reserved for larger headers, like feature items section
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MenuSectionHeaderLarge = styled.h2`
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.6px;
    color: var(--primary-black);
`;

const MenuSectionHeader = styled.h2`
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -0.7px;
    color: var(--primary-black);
`;

const MenuSectionSubheader = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

const MenuSectionItemsWrapper = styled.div`
    display: flex;
    column-gap: 14px;
    row-gap: 16px;
    flex-wrap: wrap;
    width: 100%;
    margin: 18px 0;
    overflow: hidden;

    @media screen and (max-width: 1300px) {
        justify-content: space-between;
        column-gap: unset;
    }

    @media screen and (max-width: 770px) {
        padding: 0 18px;
    }

    @media screen and (max-width: 480px) {
        padding: 0;
    }
`;

const MenuSectionItemsDivider = styled.hr`
    display: none;

    @media screen and (max-width: 770px) {
        display: block;
        width: 100%;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid var(--primary-gray);
    }
`;
export default function MenuSection() {
    const RestaurantConsumedContext = useContext(RestaurantContext);

    return (
        <MenuSectionSection>
            <MenuSectionHeaderWrapper>
                <MenuSectionHeader>
                    {RestaurantConsumedContext?.storefrontData.items?.itemsName}
                </MenuSectionHeader>
                <MenuSectionSubheader>
                    {RestaurantConsumedContext?.storefrontData.items?.itemsNameDesc}
                </MenuSectionSubheader>
            </MenuSectionHeaderWrapper>
            <MenuSectionItemsWrapper>
                {RestaurantConsumedContext?.storefrontData.items?.itemsList?.map((item) => (
                    <Fragment key={item.itemName}>
                        <MenuItem
                            itemID={item.itemID}
                            image={item.image}
                            itemName={item.itemName}
                            price={item.price}
                            description={item.description}
                            ratingCount={item?.ratingCount}
                            ratingPercentage={item?.ratingPercentage}
                            lastOrdered={item?.lastOrdered}
                            specialDeliveryStatus={item?.specialDeliveryStatus}
                            medicationInformation={item?.medicationInformation}
                        />
                        <MenuSectionItemsDivider />
                    </Fragment>
                ))}
            </MenuSectionItemsWrapper>
        </MenuSectionSection>
    );
}
