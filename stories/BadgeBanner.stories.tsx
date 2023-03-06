import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BadgeBanner from '../components/StoreComponents/BadgeBanner/BadgeBanner';

export default {
    title: 'BadgeBanner',
    component: BadgeBanner,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof BadgeBanner>;

const Template: ComponentStory<typeof BadgeBanner> = (args) => <BadgeBanner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};
