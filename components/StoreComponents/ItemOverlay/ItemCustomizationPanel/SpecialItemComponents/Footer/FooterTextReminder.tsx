import styled from 'styled-components';
import Information from '../../../../../Icons/InformationIcon';

const FooterTextReminderWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    column-gap: 8px;
    max-width: 282px;
    @media screen and (max-width: 770px) {
        max-width: 260px;
    }
`;

const InformationIconWrapper = styled.div`
    min-width: 11px;
    margin: 2px 0;
    display: flex;
    justify-content: flex-start;
`;

const FooterTextReminderSpan = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: var(--quinary-gray);
`;

export default function FooterTextReminder() {
    return (
        <FooterTextReminderWrapper>
            <InformationIconWrapper>
                <Information />
            </InformationIconWrapper>
            <FooterTextReminderSpan>
                You will receive a text notification when your refill has been processed
            </FooterTextReminderSpan>
        </FooterTextReminderWrapper>
    );
}
