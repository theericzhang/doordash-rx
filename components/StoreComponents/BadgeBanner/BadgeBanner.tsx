import styled from 'styled-components';
import CheckmarkIcon from '../../Icons/CheckmarkIcon';
import RenewIcon from '../../Icons/RenewIcon';

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
            return 'var(--primary-green)';
        }
    }};
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-white); 
    padding-left: 5px;
    padding-right: 6px;
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
    specialDeliveryStatus?: 'refill-ready' | 'refill-requested' | 'delivery-ready';
};

export default function BadgeBanner({ specialDeliveryStatus }: TBadgeBanner) {
    let badgeLabel = '';
    let badgeIcon;

    switch (specialDeliveryStatus) {
    case 'delivery-ready':
        badgeLabel = 'Ready for delivery';
        badgeIcon = <CheckmarkIcon />;
        break;
    case 'refill-ready':
        badgeLabel = 'Ready for refill';
        badgeIcon = <RenewIcon />;
        break;
    case 'refill-requested':
        badgeLabel = 'Refill requested';
        badgeIcon = <RenewIcon />;
        break;
    default:
        // Rx ready for delivery should be reserved for Home-page view only. Consider creating a special prop for this component to handle badgeLabel coming from home page
        badgeLabel = 'Rx ready for delivery';
        badgeIcon = <CheckmarkIcon />;
        break;
    }

    return (
        <BadgeBannerWrapper specialDeliveryStatus={specialDeliveryStatus}>
            {badgeIcon}
            <BadgeBannerSpan>
                {badgeLabel}
            </BadgeBannerSpan>
        </BadgeBannerWrapper>
    );
}
