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

export default function BadgeBanner() {
    return (
        <BadgeBannerWrapper>
            <CheckmarkIcon />
        </BadgeBannerWrapper>
    );
}
