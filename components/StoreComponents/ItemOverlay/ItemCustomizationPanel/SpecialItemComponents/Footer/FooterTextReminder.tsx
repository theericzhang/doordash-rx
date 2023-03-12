import styled from 'styled-components';
import Information from '../../../../../Icons/InformationIcon';

const FooterTextReminderWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    column-gap: 8px;
    max-width: 282px;
`;

const FooterTextReminderSpan = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

export default function FooterTextReminder() {
    return (
        <FooterTextReminderWrapper>
            <Information />
            <FooterTextReminderSpan>
                You will receive a text notification when your refill has been processed
            </FooterTextReminderSpan>
        </FooterTextReminderWrapper>
    );
}
