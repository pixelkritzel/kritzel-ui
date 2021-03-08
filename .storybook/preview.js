import React from 'react';

import { KritzelThemeProvider } from '../src/KritzelTheme';
import { BaseStyles } from '../src/BaseStyles';
import { CSSReset } from '../src/CSSReset';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  (Story) => (
    <KritzelThemeProvider>
      <CSSReset />
      <BaseStyles>
        <Story />
      </BaseStyles>
    </KritzelThemeProvider>
  )
];
