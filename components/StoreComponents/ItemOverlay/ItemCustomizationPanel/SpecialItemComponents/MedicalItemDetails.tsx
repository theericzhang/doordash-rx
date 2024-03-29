import styled from 'styled-components';
import { TMedicationInformation } from '../../../../../global';
import BadgeBanner from '../../../BadgeBanner/BadgeBanner';

const MedicalItemDetailsSpanWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 7px;
    margin-bottom: 11px;
`;

const MedicalItemDetailsSpan = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
    line-height: 1.4;
`;

const MedicalItemDetailsSpanGroup = styled.div`
    display: flex;
    column-gap: 18px;
`;

const MedicalItemDetailsLabel = styled.section`
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    background-color: var(--secondary-gray);
    width: 100%;
    padding: 16px;
    margin-top: 33px;
`;

const MedicalLabelPatientName = styled.h3`
    font-size: 20px;
    font-weight: 400;
    color: var(--primary-black);
`;

const MedicalLabelPatientAddress = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

const MedicalLabelInstructions = styled.span`
    font-size: 20px;
    font-weight: 500;
    color: var(--primary-black);
    margin: 9px 0;
`;

const MedicalLabelImportantInfo = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: var(--quinary-red);
    margin-top: 13px;
`;

const MedicalLabelInfoUL = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-position: inside;
    row-gap: 3px;
    margin-top: 6px;
`;

const MedicalLabelInfoLI = styled.li`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

type TMedicalItemDetails = {
    primaryDescription?: string;
    medicationInformation?: TMedicationInformation;
    specialDeliveryStatus?: 'refill-ready' | 'refill-requested' | 'delivery-ready';
};

export default function MedicalItemDetails({ primaryDescription, medicationInformation, specialDeliveryStatus }: TMedicalItemDetails) {
    return (
        <>
            <MedicalItemDetailsSpanWrapper>
                <MedicalItemDetailsSpan>
                    {primaryDescription}
                </MedicalItemDetailsSpan>
                <MedicalItemDetailsSpan>
                    Last Filled:
                    {' '}
                    {medicationInformation?.lastFilledDate}
                </MedicalItemDetailsSpan>
                <MedicalItemDetailsSpanGroup>
                    <MedicalItemDetailsSpan>
                        Quantity:
                        {' '}
                        {medicationInformation?.quantity}
                    </MedicalItemDetailsSpan>
                    <MedicalItemDetailsSpan>
                        Refills:
                        {' '}
                        {medicationInformation?.refills}
                    </MedicalItemDetailsSpan>
                </MedicalItemDetailsSpanGroup>
            </MedicalItemDetailsSpanWrapper>
            <BadgeBanner specialDeliveryStatus={specialDeliveryStatus} />
            <MedicalItemDetailsLabel>
                <MedicalLabelPatientName>
                    {medicationInformation?.patientInformation.patientName}
                </MedicalLabelPatientName>
                <MedicalLabelPatientAddress>
                    {medicationInformation?.patientInformation.patientAddress}
                </MedicalLabelPatientAddress>
                <MedicalLabelInstructions>
                    {medicationInformation?.instructions}
                </MedicalLabelInstructions>
                <MedicalLabelImportantInfo>
                    Important Information
                </MedicalLabelImportantInfo>
                <MedicalLabelInfoUL>
                    {medicationInformation?.medicalImportantInformation?.map((info) => (
                        <MedicalLabelInfoLI key={info}>
                            {info}
                        </MedicalLabelInfoLI>
                    ))}
                </MedicalLabelInfoUL>
            </MedicalItemDetailsLabel>

        </>
    );
}
