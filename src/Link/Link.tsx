import React from 'react';
import styled, { css } from 'styled-components';

import { KritzelThemeType } from 'src/KritzelTheme';
import { removeEventHandlerFromProps } from 'src/utilities/removeEventHandlerFromProps';

export const linkStyles = css`
  color: ${({ theme }: { theme: KritzelThemeType }) =>
    theme.components.link.textColor.default};
  text-decoration: underline;
  cursor: pointer;

  &::hover {
    color: ${({ theme }: { theme: KritzelThemeType }) =>
      theme.components.link.textColor.hover};
  }

  &::visited {
    color: ${({ theme }: { theme: KritzelThemeType }) =>
      theme.components.link.textColor.visited};
  }

  &[disabled],
  &[aria-disabled] {
    color: ${({ theme }: { theme: KritzelThemeType }) =>
      theme.components.link.textColor.disabled};
    cursor: not-allowed;
  }
`;

const LinkElement = styled.a`
  ${linkStyles}
`;

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
}

function preventDefault<E extends Event>(event: E) {
  event.preventDefault();
  event.stopPropagation();
}

export const Link = React.forwardRef(
  (
    { disabled, children, ...otherProps }: LinkProps,
    ref: React.RefObject<HTMLAnchorElement>
  ) => {
    ref = ref || React.createRef();
    const elRef = React.useRef<HTMLAnchorElement | null>();
    React.useEffect(() => {
      elRef.current = ref.current;
      if (NODE_ENV === 'development') {
        if (
          elRef.current?.innerText.length === 0 &&
          !(otherProps.title || otherProps['aria-labelledby'])
        ) {
          throw new Error('Link component has no accessible text!');
        }
      }
    }, [elRef.current]);
    if (disabled) {
      removeEventHandlerFromProps(otherProps);
    }
    return (
      <LinkElement
        aria-disabled={disabled}
        onClick={
          disabled
            ? (preventDefault as React.EventHandler<React.MouseEvent>)
            : undefined
        }
        onClickCapture={
          disabled
            ? (preventDefault as React.EventHandler<React.MouseEvent>)
            : undefined
        }
        onKeyPress={
          disabled
            ? (preventDefault as React.EventHandler<React.KeyboardEvent>)
            : undefined
        }
        onKeyPressCapture={
          disabled
            ? (preventDefault as React.EventHandler<React.KeyboardEvent>)
            : undefined
        }
        onKeyDown={
          disabled
            ? (preventDefault as React.EventHandler<React.KeyboardEvent>)
            : undefined
        }
        onKeyDownCapture={
          disabled
            ? (preventDefault as React.EventHandler<React.KeyboardEvent>)
            : undefined
        }
        onKeyUp={
          disabled
            ? (preventDefault as React.EventHandler<React.KeyboardEvent>)
            : undefined
        }
        onKeyUpCapture={
          disabled
            ? (preventDefault as React.EventHandler<React.KeyboardEvent>)
            : undefined
        }
        ref={ref}
        {...otherProps}>
        {children}
      </LinkElement>
    );
  }
);
