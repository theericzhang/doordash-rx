import styled from 'styled-components';
import CheckmarkIcon from '../../Icons/CheckmarkIcon';

const BadgeBannerWrapper = styled.div<TBadgeBanner>`
    height: 20px;
    width: fit-content;
    border-radius: 4px;
    background-color: ${(props) => {
        switch (props.specialDeliveryStatus) {
        case 'delivery-ready':
            return 'var(--primary-green)';
        case 'refill-ready':
            return 'var(--quinary-gray)';
        case 'refill-requested':
            return 'var(--secondary-gold)';
        default:
            break;
        }
    }};
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-white); 
    padding: 0 4px;
    position: ${(props) => (props.specialDeliveryStatus ? 'unset' : 'absolute')};
    bottom: ${(props) => (props.specialDeliveryStatus ? 'unset' : '7px')};
    right: ${(props) => (props.specialDeliveryStatus ? 'unset' : '6px')};
    column-gap: 3px;
`;

const BadgeBannerSpan = styled.span`
    font-weight: 500;
    font-size: 12px;
`;

type TBadgeBanner = {
    specialDeliveryStatus?: string;
};

export default function BadgeBanner({ specialDeliveryStatus }: TBadgeBanner) {
    // TODO: conditionally render different styles for the badges, with background-color, CheckmarkIcon, and label name
    return (
        <BadgeBannerWrapper specialDeliveryStatus={specialDeliveryStatus}>
            <CheckmarkIcon />
            <BadgeBannerSpan>
                Rx ready for delivery
            </BadgeBannerSpan>
        </BadgeBannerWrapper>
    );
}
