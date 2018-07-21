const {default: colors} = require('vuetify/es5/util/colors')

const config = { // needs to be ES6 module so it can be imported by webpack
  blips: {
    titleCutOff: 20 // cut off title after N characters (display only)
  },
  firebase: {
    key: 'AIzaSyC3FxfpYywy5ZYpiWuf9nw8_vlbxibpQH8',
    project: 'techradar-f5834'
  },
  categories: ['Tools', 'Techniques', 'Platforms', 'Languages & Frameworks'], // quadrant 1-4
  states: ['Know of', 'Tested', 'Used', 'Advanced'], // should be 0 - 3 for tech radar, 4 for in use, 5 for no longer in use
  metaTitle: 'anoff\'s Techradar', // meta information title tag
  appTitle: 'my tech history', // title showing in the application titlebar
  editPermissions: user => user.roles.admin || user.roles.editor,
  routes: [ // configure name, permissions & viewports
    // do NOT change the view property as this links to the vue component and is used for lookups across the app
    { view: 'List', icon: 'list', title: 'Blips', path: '/list/:search?', validator: user => true, location: ['toolbar'] },
    { view: 'Radar', icon: 'track_changes', title: 'Radar', path: '/', validator: user => true, location: ['toolbar'] },
    { view: 'Logout', icon: 'exit_to_app', title: 'Logout', path: '/logout', validator: user => user.uid, location: ['toolbar-menu'] },
    { view: 'Users', icon: 'people', title: 'Users', path: '/users', validator: user => user.uid && user.roles.admin, location: ['toolbar-menu'] },
    { view: 'Login', icon: 'meeting_room', title: 'Login', path: '/login', validator: user => !user.uid, location: ['toolbar-menu'] }
  ],
  theme: {
    primary: colors.indigo.base,
    secondary: colors.blue.darken1,
    accent: colors.cyan.accent4,
    error: colors.red.base,
    warning: colors.yellow.base,
    info: colors.blue.base,
    success: colors.green.base
  }
}

// precalculate some properties for later
config.routes = config.routes
  .map(i => {
    i.rootPath = i.path.split(':')[0] // path property without a potential query param
    return i
  })
module.exports = config
