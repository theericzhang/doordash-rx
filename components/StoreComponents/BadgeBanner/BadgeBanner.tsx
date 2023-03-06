import styled from 'styled-components';

const BadgeBannerWrapper = styled.div`
    height: 20px;
    width: fit-content;
    border-radius: 4px;
    background-color: var(--primary-green);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function BadgeBanner() {
    return (
        <BadgeBannerWrapper>
            Hi
        </BadgeBannerWrapper>
    );
}
