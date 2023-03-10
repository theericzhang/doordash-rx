import styled from 'styled-components';
import { TMedicationInformation } from '../../../../../global';

const ItemCustomizationPanelItemDescriptionSpecial = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
    line-height: 1.4;
`;

type TMedicalItemDetails = {
    medicationInformation?: TMedicationInformation;
};

export default function MedicalItemDetails({ medicationInformation }: TMedicalItemDetails) {
    return (
        <ItemCustomizationPanelItemDescriptionSpecial>
            Last Filled:
            {' '}
            {medicationInformation?.lastFilledDate}
        </ItemCustomizationPanelItemDescriptionSpecial>

    );
}
