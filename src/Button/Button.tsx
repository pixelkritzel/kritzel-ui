/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import cx from 'classnames';
import styled, { css } from 'styled-components';

import { KritzelThemeType } from 'src/KritzelTheme';
import { linkStyles } from 'src/Link';
import { removeEventHandlerFromProps } from 'src/utilities/removeEventHandlerFromProps';

import { resetButton } from './resetButton';

const BUTTON_INNER_BORDER_BOX_SHADOW = ' inset 0px 0px 0px 1px white';

type VARIANT_PROP = {
  variant?: ButtonProps['variant'];
};

const buttonStyles = css<VARIANT_PROP>`
  position: relative;
  padding: 5px 17px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({
    theme,
    variant
  }: { theme: KritzelThemeType } & VARIANT_PROP) =>
    theme.components.button[variant!].border.color.default};
  color: ${({ theme, variant }: { theme: KritzelThemeType } & VARIANT_PROP) =>
    theme.components.button[variant!].textColor.default};
  background-color: ${({
    theme,
    variant
  }: { theme: KritzelThemeType } & VARIANT_PROP) =>
    theme.components.button[variant!].background.default};
  box-shadow: ${BUTTON_INNER_BORDER_BOX_SHADOW};
  transition: all 0.2s;
  &:disabled {
    border-color: ${({
      theme,
      variant
    }: { theme: KritzelThemeType } & VARIANT_PROP) =>
      theme.components.button[variant!].border.color.disabled};
    color: ${({ theme, variant }: { theme: KritzelThemeType } & VARIANT_PROP) =>
      theme.components.button[variant!].textColor.disabled};
    background-color: ${({
      theme,
      variant
    }: { theme: KritzelThemeType } & VARIANT_PROP) =>
      theme.components.button[variant!].background.disabled};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${({
      theme,
      variant
    }: { theme: KritzelThemeType } & VARIANT_PROP) =>
      theme.components.button[variant!].background.hover};
    border-color: ${({
      theme,
      variant
    }: { theme: KritzelThemeType } & VARIANT_PROP) =>
      theme.components.button[variant!].border.color.hover};
    color: ${({ theme, variant }: { theme: KritzelThemeType } & VARIANT_PROP) =>
      theme.components.button[variant!].textColor.hover};
    transform: translate(-1px, -1px);
    box-shadow: ${({ theme }) => `${BUTTON_INNER_BORDER_BOX_SHADOW},
      2px 2px 1px ${theme.components.button.default.background}`};
  }

  &:active {
    transform: translate(0, 0);
  }

  &:focus {
    outline: none;
    @include focus-styles();
  }
`;

const Icon = styled.span`
  display: inline-block;
  margin-right: 6px;
  transform: translate(0, 1px);
`;

export interface ButtonProps<Tag extends keyof HTMLElementTagNameMap = 'button'>
  extends React.HTMLAttributes<HTMLElementTagNameMap[Tag]> {
  tag?: Tag;
  icon?: React.ReactNode;
  variant?: 'default' | 'danger' | 'success' | 'link';
  disabled?: boolean;
}

const ButtonElement = React.forwardRef(function <
  Tag extends keyof HTMLElementTagNameMap = 'button'
>(
  {
    tag = 'button' as Tag,
    children,
    className,
    icon,
    variant: _,
    ...otherProps
  }: ButtonProps<Tag>,
  ref: React.RefObject<HTMLElementTagNameMap[Tag]>
): React.ReactElement<ButtonProps<Tag>> {
  ref = ref || React.createRef();
  const elRef = React.useRef<HTMLElementTagNameMap[Tag] | null>();
  React.useEffect(() => {
    elRef.current = ref.current;
    if (NODE_ENV === 'development') {
      if (
        !['button', 'a', 'input'].includes(tag) &&
        otherProps.role !== 'button'
      ) {
        throw new Error(
          'Button component was provided with non interactable HTML element without providing an ARIA role!'
        );
      }

      if (
        elRef.current?.innerText.length === 0 &&
        !(otherProps.title || otherProps['aria-labelledby'])
      ) {
        throw new Error('Button component has no accessible text!');
      }
    }
  }, [elRef.current]);

  if (otherProps.disabled) {
    removeEventHandlerFromProps(otherProps);
  }

  return React.createElement(
    tag,
    {
      className: cx(className),
      ...otherProps,
      ref
    },
    icon && <Icon>{icon}</Icon>,
    children
  );
});

export const Button = styled(ButtonElement)`
  ${resetButton}
  ${({ variant }) => (variant === 'link' ? linkStyles : buttonStyles)}
`;

Button.defaultProps = {
  variant: 'default'
};

export const b = <Button>Hello</Button>;
