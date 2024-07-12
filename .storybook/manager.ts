import { addons } from '@storybook/manager-api';
// import { themes } from '@storybook/theming';
import DTTheme from './DTTheme';
 
addons.setConfig({
  theme: DTTheme,
});