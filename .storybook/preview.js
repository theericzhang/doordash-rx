import GlobalStyles from '../styles/GlobalStyles';
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// export const decorators = [
//     (Story) => (
//         <>
//             <GlobalStyles />
//             <Story />
//         </>
//     ),
// ];

addDecorator((Story) => (
    <>
        <GlobalStyles />
        <Story />
    </>
))