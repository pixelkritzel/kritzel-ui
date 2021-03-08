// import original module declarations
import 'styled-components';

import { KritzelThemeType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends KritzelThemeType {}
}
