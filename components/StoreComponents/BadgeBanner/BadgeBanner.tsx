import styled from 'styled-components';
import CheckmarkIcon from '../../Icons/CheckmarkIcon';

const BadgeBannerWrapper = styled.div`
    height: 20px;
    width: fit-content;
    border-radius: 4px;
    background-color: var(--primary-green);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-white);
`;

const BadgeBannerSpan = styled.span`
    font-weight: 600;
    font-size: 12px;
`;

export default function BadgeBanner() {
    return (
        <BadgeBannerWrapper>
            <CheckmarkIcon />
            <BadgeBannerSpan>
                Rx ready for delivery
            </BadgeBannerSpan>
        </BadgeBannerWrapper>
    );
}
