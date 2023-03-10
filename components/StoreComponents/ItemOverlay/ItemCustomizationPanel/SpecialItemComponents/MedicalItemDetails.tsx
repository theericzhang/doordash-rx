import styled from 'styled-components';
import { TMedicationInformation } from '../../../../../global';
import BadgeBanner from '../../../BadgeBanner/BadgeBanner';

const ItemCustomizationPanelItemDescriptionSpecial = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
    line-height: 1.4;
`;

type TMedicalItemDetails = {
    primaryDescription?: string;
    medicationInformation?: TMedicationInformation;
    specialDeliveryStatus: string;
};

export default function MedicalItemDetails({ primaryDescription, medicationInformation, specialDeliveryStatus }: TMedicalItemDetails) {
    return (
        <>
            <ItemCustomizationPanelItemDescriptionSpecial>
                {primaryDescription}
            </ItemCustomizationPanelItemDescriptionSpecial>
            <ItemCustomizationPanelItemDescriptionSpecial>
                Last Filled:
                {' '}
                {medicationInformation?.lastFilledDate}
            </ItemCustomizationPanelItemDescriptionSpecial>
            <BadgeBanner specialDeliveryStatus={specialDeliveryStatus} />

        </>
    );
}
