/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import StackNavigation from './StackNavigation';
import TabNavigation from './TabNavigation';

import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => StackNavigation);
AppRegistry.registerComponent(appName, () => TabNavigation);
