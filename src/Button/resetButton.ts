import { css } from 'styled-components';

export const resetButton = css`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  text-align: inherit;
  background: transparent;
  border-radius: 0;
  font: inherit;

  /* Normalize line-height. Cannot be changed from normal in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable input types in iOS */
  -webkit-appearance: none;

  /* Remove excess padding and border in Firefox 4+ */
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;
