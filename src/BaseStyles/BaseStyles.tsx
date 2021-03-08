import React from 'react';
import styled from 'styled-components';

import { KritzelThemeType } from 'src/KritzelTheme';

const BaseStylesElement = styled('div')`
  font-family: ${({ theme }: { theme: KritzelThemeType }) => theme.fonts.copy};
`;

export const BaseStyles: React.FC = ({ children, ...otherProps }) => (
  <BaseStylesElement {...otherProps}>{children}</BaseStylesElement>
);
