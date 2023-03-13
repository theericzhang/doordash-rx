import styled from 'styled-components';
import Information from '../../../../../Icons/InformationIcon';
import Aetna from '../../../../../Icons/InsuranceLogos/Aetna';

const FooterInsuranceInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 16px;
`;

const FooterInsuranceInfoSpan = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

type TFooterInsuranceInfo = {
    insurer?: string;
    memberID?: number;
};

export default function FooterInsuranceInfo({ insurer, memberID }: TFooterInsuranceInfo) {
    return (
        <FooterInsuranceInfoWrapper>
            {/* //TODO: aetna case is widely hardcoded in - in the future, we will need to consider cases for all insurance providers */}
            {insurer === 'aetna' ? <Aetna /> : null}
            <FooterInsuranceInfoSpan>
                Member #
                {' '}
                {' '}
                {memberID}
            </FooterInsuranceInfoSpan>
            <Information />
        </FooterInsuranceInfoWrapper>
    );
}
