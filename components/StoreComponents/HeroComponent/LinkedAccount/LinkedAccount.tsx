import styled from 'styled-components';
import Image from 'next/image';

const LinkedAccountWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LinkedAccountStoreProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

type TLinkedAccount = {
    storeProfileSrc: string;
    storeProfileAlt: string;
};

export default function LinkedAccount({ storeProfileSrc, storeProfileAlt }: TLinkedAccount) {
    return (
        <LinkedAccountWrapper>
            <LinkedAccountStoreProfile>
                <Image
                    src={storeProfileSrc}
                    alt={storeProfileAlt}
                />
            </LinkedAccountStoreProfile>
        </LinkedAccountWrapper>
    );
}
