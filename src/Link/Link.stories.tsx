// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Link, LinkProps } from '@kritzel-ui';

export default {
  title: 'Example/Link',
  component: Link,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

const Template: Story = ({ label, ...otherProps }) => (
  <>
    <Link {...otherProps}>{label}</Link>
    <br />
    <br />
    <Link disabled {...otherProps}>
      DISABLED: {label}
    </Link>
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'An ordinary Link',
  href: '#',
  onClick: () => alert('Whee!')
} as LinkProps;
