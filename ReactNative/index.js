/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import StackNavigation from './StackNavigation';
import TabNavigation from './TabNavigation';
import SimpleCRUDProject from './SimpleCRUDProject';
import Splash from './Splash';

import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => StackNavigation);
// AppRegistry.registerComponent(appName, () => TabNavigation);
// AppRegistry.registerComponent(appName, () => SimpleCRUDProject);
AppRegistry.registerComponent(appName, () => Splash);

