// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '@kritzel-ui';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

const Template: Story = ({ label, ...otherProps }) => (
  <>
    <Button {...otherProps}>{label}</Button>
    <br />
    <br />
    <Button disabled {...otherProps}>
      DISABLED: {label}
    </Button>
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'An ordinary button',
  onClick: () => alert('Help!')
} as ButtonProps;

export const Success = Template.bind({});
Success.args = {
  label: 'A successful button',
  variant: 'success'
} as ButtonProps;

export const Danger = Template.bind({});
Danger.args = {
  label: 'A dangerous button',
  variant: 'danger'
} as ButtonProps;

export const Link = Template.bind({});
Link.args = {
  label: 'A Button disquised as link',
  variant: 'link'
} as ButtonProps;

export const Icon = Template.bind({});
Icon.args = {
  title: 'A Button with an icon',
  icon: '🐸'
} as ButtonProps;
