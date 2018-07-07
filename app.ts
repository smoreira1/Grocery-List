import angular from 'angular';

// Import your app stylesheets
import './style.less';

// Import your app functionality
import './components/footer';
import './components/header';
import './components/items-needed';
import './components/items-purchased';

import './home';

// Create and bootstrap application
const requires = [
  'header',
  'footer'
];

let app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);

export default app;