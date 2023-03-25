import { useMemo } from 'react';
import styled from 'styled-components';
import Information from '../../../../../Icons/InformationIcon';
import Aetna from '../../../../../Icons/InsuranceLogos/Aetna';

const FooterInsuranceInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 16px;

    @media screen and (max-width: 771px) {
        align-items: flex-start;
        row-gap: 5px;
        flex-direction: column;
    }
`;

const FooterInsuranceMemberAndInfoIconWrapper = styled.div`
    display: flex;
    column-gap: 16px;
    align-items: center;
    @media screen and (max-width: 771px) {
        column-gap: 5px;
    }
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
    const stringOfMemberID = memberID!.toString();

    // let concealedMemberID: string = '';
    // for (let i = 0; i < stringOfMemberID!.length; i++) {
    //     if (i < stringOfMemberID!.length - 3) {
    //         concealedMemberID += '*';
    //     } else {
    //         concealedMemberID += stringOfMemberID![i];
    //     }
    // }

    function concealMemberID(stringOfMemberIDArg: string): string {
        let tempMemberID: string = '';
        for (let i = 0; i < stringOfMemberIDArg!.length; i++) {
            if (i < stringOfMemberIDArg!.length - 3) {
                tempMemberID += '*';
            } else {
                tempMemberID += stringOfMemberIDArg![i];
            }
        }
        return tempMemberID;
    }

    const concealedMemberID = useMemo(() => concealMemberID(stringOfMemberID), [stringOfMemberID]);

    return (
        <FooterInsuranceInfoWrapper>
            {/* //TODO: aetna case is widely hardcoded in - in the future, we will need to consider cases for all insurance providers */}
            {insurer === 'aetna' ? <Aetna /> : null}
            <FooterInsuranceMemberAndInfoIconWrapper>
                <FooterInsuranceInfoSpan>
                    Member #
                    {' '}
                    {' '}
                    {concealedMemberID}
                </FooterInsuranceInfoSpan>
                <Information />
            </FooterInsuranceMemberAndInfoIconWrapper>
        </FooterInsuranceInfoWrapper>
    );
}
