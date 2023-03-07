import styled from 'styled-components';
import Image from 'next/image';

const LinkedAccountWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LinkedAccountStoreProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    height: 46px;
    width: 46px;
    border-radius: 50%
`;

const LinkedAccountStoreProfileImage = styled(Image)`
    object-fit: cover;
`;

type TLinkedAccount = {
    storeProfileSrc: string;
    storeProfileAlt: string;
};

export default function LinkedAccount({ storeProfileSrc, storeProfileAlt }: TLinkedAccount) {
    return (
        <LinkedAccountWrapper>
            <LinkedAccountStoreProfileWrapper>
                <LinkedAccountStoreProfileImage
                    src={storeProfileSrc}
                    alt={storeProfileAlt}
                    fill
                    sizes="(max-width: 960px) 76px, 76px"
                />
            </LinkedAccountStoreProfileWrapper>
        </LinkedAccountWrapper>
    );
}
