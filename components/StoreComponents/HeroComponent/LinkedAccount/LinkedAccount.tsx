import styled from 'styled-components';
import Image from 'next/image';

const LinkedAccountWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
    margin: 22px 0;
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

const LinkedAccountLabel = styled.span`
    font-size: 14px;
    color: var(--secondary-black);
    display: flex;
    column-gap: 6px;
`;

const LinkedAccountLabelBolden = styled.span`
    font-weight: 500;
`;

const LinkedAccountManageLink = styled.a`
    font-size: 14px;
    color: var(--primary-black);
    text-decoration: underline;

    &:visited {
        color: inherit;
    }
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
            <LinkedAccountLabel>
                Linked account:
                <LinkedAccountLabelBolden>
                    JaneSmith@mail.com
                </LinkedAccountLabelBolden>
            </LinkedAccountLabel>
            <LinkedAccountManageLink href="/">
                Manage
            </LinkedAccountManageLink>
        </LinkedAccountWrapper>
    );
}
